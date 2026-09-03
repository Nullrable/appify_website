import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import ts from 'typescript';

const PROJECT_ROOT = process.cwd();
const DIST_DIR = path.join(PROJECT_ROOT, 'dist');

const MARKERS = {
  defaultSeo: '<!-- Default SEO meta tags (pre-rendered for crawlers) -->',
  openGraph: '<!-- Open Graph tags -->',
  hreflang: '<!-- Pre-rendered hreflang tags -->',
  jsonLd: '<!-- Pre-rendered JSON-LD structured data -->',
};

// Per-App content sections. Each entry gets a static index.html so the route
// resolves on Vercel (there is no SPA rewrite - routes are real directories).
//
// Indexability is content-driven: see the route loop in main() - if a Markdown
// article exists for (appId, section), the route gets `index,follow` and joins
// the sitemap. Otherwise it stays `noindex,follow` and out of the sitemap.
//
// Sections that are authored in English only and reused across all locales
// (legal text - terms and privacy). For these, the canonical URL collapses to
// the English path and hreflang narrows to `en` + `x-default`, so Google sees
// one canonical page instead of 15 near-duplicates.
const SECTIONS = ['about', 'features', 'blog', 'terms', 'privacy'];
const LEGAL_SECTIONS = new Set(['terms', 'privacy']);

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function indent(text, spaces) {
  const pad = ' '.repeat(spaces);
  return String(text)
    .split('\n')
    .map((line) => `${pad}${line}`)
    .join('\n');
}

function replaceSection(html, startMarker, endMarker, replacement) {
  const start = html.indexOf(startMarker);
  if (start === -1) throw new Error(`Marker not found: ${startMarker}`);
  const end = html.indexOf(endMarker, start + startMarker.length);
  if (end === -1) throw new Error(`End marker not found: ${endMarker}`);
  return html.slice(0, start) + replacement + html.slice(end);
}

function langToOgLocale(lang) {
  const localeMap = {
    en: 'en_US',
    zh: 'zh_CN',
    'zh-TW': 'zh_TW',
    ja: 'ja_JP',
    ko: 'ko_KR',
    vi: 'vi_VN',
    id: 'id_ID',
    ar: 'ar_AR',
    fr: 'fr_FR',
    de: 'de_DE',
    es: 'es_ES',
    pt: 'pt_BR',
    it: 'it_IT',
    ru: 'ru_RU',
    th: 'th_TH',
  };
  return localeMap[lang] || 'en_US';
}

function getAppCategory(appId) {
  const categories = {
    'work-hours-tracker': 'ProductivityApplication',
    'money-tracker': 'FinanceApplication',
    'image-to-pdf': 'UtilityApplication',
    'image-converter': 'UtilityApplication',
    'cleanphoto': 'UtilityApplication',
    'translate-offline-translator': 'UtilityApplication',
    'paperscan': 'UtilityApplication',
  };
  return categories[appId] || 'ProductivityApplication';
}

async function transpileToTempModule(tempDir, inputFile) {
  const inputCode = await fs.readFile(inputFile, 'utf8');
  const output = ts.transpileModule(inputCode, {
    compilerOptions: {
      module: ts.ModuleKind.ESNext,
      target: ts.ScriptTarget.ES2022,
      importsNotUsedAsValues: ts.ImportsNotUsedAsValues.Remove,
    },
    fileName: inputFile,
  });

  const fileBase = path.basename(inputFile).replace(/\.tsx?$/, '.mjs');
  const outPath = path.join(tempDir, fileBase);
  await fs.writeFile(outPath, output.outputText, 'utf8');
  return outPath;
}

async function loadSeoData() {
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'appify-seo-'));
  const appsModPath = await transpileToTempModule(tempDir, path.join(PROJECT_ROOT, 'src/data/apps.ts'));
  const seoModPath = await transpileToTempModule(tempDir, path.join(PROJECT_ROOT, 'src/data/seo.ts'));
  const sectionModPath = await transpileToTempModule(tempDir, path.join(PROJECT_ROOT, 'src/data/sectionLabels.ts'));

  // src/generated/content.ts is emitted by `npm run content`. The build pipeline
  // guarantees it exists before prerender runs.
  const contentModPath = await transpileToTempModule(tempDir, path.join(PROJECT_ROOT, 'src/generated/content.ts'));

  const appsMod = await import(pathToFileURL(appsModPath).href);
  const seoMod = await import(pathToFileURL(seoModPath).href);
  const sectionMod = await import(pathToFileURL(sectionModPath).href);
  const contentMod = await import(pathToFileURL(contentModPath).href);

  const appPagesDir = path.join(PROJECT_ROOT, 'src/data/appPages');
  const appPages = new Map();

  const entries = await fs.readdir(appPagesDir);
  for (const entry of entries) {
    if (!entry.endsWith('.ts')) continue;
    if (entry === 'types.ts') continue;

    const input = path.join(appPagesDir, entry);
    const out = await transpileToTempModule(tempDir, input);
    const mod = await import(pathToFileURL(out).href);

    const pageData = Object.values(mod).find(
      (v) => v && typeof v === 'object' && typeof v.appId === 'string' && Array.isArray(v.faqs),
    );
    if (pageData) appPages.set(pageData.appId, pageData);
  }

  return {
    tempDir,
    apps: appsMod.apps ?? [],
    languages: appsMod.languages ?? [],
    seoMeta: seoMod.seoMeta ?? {},
    seoKeywords: seoMod.seoKeywords ?? {},
    hreflangConfig: seoMod.hreflangConfig ?? [],
    sectionLabels: sectionMod.sectionLabels ?? {},
    contentEntries: contentMod.contentEntries ?? [],
    getContent: contentMod.getContent,
    listContentSlugs: contentMod.listContentSlugs,
    hasMultiContent: contentMod.hasMultiContent,
    appPages,
  };
}

function buildHreflangLinks({ siteOrigin, hreflangConfig, appId, section, narrowToEn = false }) {
  const configs = narrowToEn
    ? hreflangConfig.filter((c) => c.lang === 'en' || c.lang === 'x-default')
    : hreflangConfig;

  return configs.map((entry) => {
    const hreflang = entry.lang;
    const targetLang = hreflang === 'x-default' ? 'en' : hreflang;
    const segments = [encodeURIComponent(targetLang)];
    if (appId) segments.push(encodeURIComponent(appId));
    if (appId && section) segments.push(encodeURIComponent(section));
    const href = new URL(`/${segments.join('/')}/`, siteOrigin).toString();
    return { hreflang, href };
  });
}

function buildOgLocaleAlternates(hreflangConfig, currentLang) {
  return hreflangConfig
    .map(({ lang }) => lang)
    .filter((lang) => lang !== 'x-default' && lang !== currentLang)
    .map((lang) => langToOgLocale(lang));
}

function buildJsonLdScripts({ siteOrigin, lang, appId, app, pageData, canonicalUrl }) {
  const scripts = [];

  if (!appId) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Appify',
      url: siteOrigin,
      description: 'All-in-one App Platform with Powerful Apps',
      inLanguage: lang,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteOrigin}/{search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }

  // Organization schema - Appify is a website name, not an App Store developer
  // SameAs intentionally empty to avoid 404 on apps.apple.com
  scripts.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Appify',
    url: siteOrigin,
  });

  if (appId && app) {
    scripts.push({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: app.name,
      description: app.description,
      url: canonicalUrl,
      image: app.ogImage,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'iOS',
      downloadUrl: app.appStoreUrl,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
      inLanguage: lang,
    });

    // Note: FAQPage schema is NOT included here because it is added dynamically
    // by the SEO component's useEffect on the client side. Including it in the
    // pre-rendered HTML would cause duplicate FAQPage errors in Google Search Console.
  }

  return scripts;
}

function renderHtmlForRoute(templateHtml, route) {
  const {
    siteOrigin,
    hreflangConfig,
    lang,
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage,
    jsonLdScripts,
    isRtl,
    appContent,
    narrowHreflangToEn,
  } = route;

  let html = templateHtml;

  // html lang/dir
  html = html.replace(
    /<html\s+lang="[^"]*"(?:\s+dir="[^"]*")?\s*>/i,
    `<html lang="${escapeHtml(lang)}"${isRtl ? ' dir="rtl"' : ''}>`,
  );

  const defaultSeoBlock = [
    `    ${MARKERS.defaultSeo}`,
    `    <title>${escapeHtml(title)}</title>`,
    `    <meta name="description" content="${escapeHtml(description)}" />`,
    `    <meta name="keywords" content="${escapeHtml(keywords)}" />`,
    route.noIndex
      ? `    <meta name="robots" content="noindex,${route.noFollow ? 'nofollow' : 'follow'}" />`
      : '    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
    `    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />`,
    '',
    '',
  ].join('\n');
  html = replaceSection(html, MARKERS.defaultSeo, MARKERS.openGraph, defaultSeoBlock);

  const ogAlternates = buildOgLocaleAlternates(hreflangConfig, lang);
  const ogBlockLines = [
    `    ${MARKERS.openGraph}`,
    `    <meta property="og:title" content="${escapeHtml(title)}" />`,
    `    <meta property="og:description" content="${escapeHtml(description)}" />`,
    '    <meta property="og:type" content="website" />',
    `    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />`,
    '    <meta property="og:site_name" content="Appify" />',
    `    <meta property="og:image" content="${escapeHtml(ogImage)}" />`,
    '    <meta property="og:image:width" content="1200" />',
    '    <meta property="og:image:height" content="630" />',
    `    <meta property="og:locale" content="${escapeHtml(langToOgLocale(lang))}" />`,
    ...ogAlternates.map(
      (alt) => `    <meta property="og:locale:alternate" content="${escapeHtml(alt)}" />`,
    ),
    '',
    '    <!-- Twitter tags -->',
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    <meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `    <meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />`,
    `    <meta name="twitter:url" content="${escapeHtml(canonicalUrl)}" />`,
    '',
    '',
  ];
  html = replaceSection(html, MARKERS.openGraph, MARKERS.hreflang, ogBlockLines.join('\n'));

  const hreflangLinks = buildHreflangLinks({
    siteOrigin,
    hreflangConfig,
    appId: route.appId,
    section: route.section,
    narrowToEn: narrowHreflangToEn === true,
  });
  const hreflangBlockLines = [
    `    ${MARKERS.hreflang}`,
    ...hreflangLinks.map(
      (l) => `    <link rel="alternate" hreflang="${escapeHtml(l.hreflang)}" href="${escapeHtml(l.href)}" />`,
    ),
    '',
    '',
  ];
  html = replaceSection(html, MARKERS.hreflang, MARKERS.jsonLd, hreflangBlockLines.join('\n'));

  const jsonLdBlockLines = [
    `    ${MARKERS.jsonLd}`,
    ...jsonLdScripts.map((obj) => {
      const json = JSON.stringify(obj, null, 2);
      return `    <script type="application/ld+json">\n${indent(json, 4)}\n    </script>`;
    }),
    '',
  ];
  const jsonLdContent = jsonLdBlockLines.join('\n');

  html = replaceSection(html, MARKERS.jsonLd, '<script type="module"', jsonLdContent);

  // Inject pre-rendered App content into body (for SEO crawlers)
  if (appContent) {
    html = html.replace('<!-- PRE_RENDERED_APP_CONTENT -->', appContent);
  }

  return html;
}

function toSitemapXml({ siteOrigin, languages, apps, lastmod, sectionUrls }) {
  const urls = [];
  for (const lang of languages) {
    urls.push({ loc: `${siteOrigin}/${lang}/`, priority: 0.8 });
    for (const app of apps) {
      urls.push({ loc: `${siteOrigin}/${lang}/${app.id}/`, priority: 0.9 });
      for (const entry of sectionUrls) {
        if (entry.appId !== app.id) continue;
        // entry.lang === null means the section is legal-only and emits one
        // sitemap entry pointing at /en/... regardless of which loop iteration
        // we're in.
        const targetLang = entry.lang ?? 'en';
        if (targetLang !== lang) continue;
        urls.push({
          loc: `${siteOrigin}/${targetLang}/${app.id}/${entry.section}/`,
          priority: 0.6,
        });
      }
    }
  }

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.flatMap(({ loc, priority }) => [
      '  <url>',
      `    <loc>${escapeHtml(loc)}</loc>`,
      `    <lastmod>${escapeHtml(lastmod)}</lastmod>`,
      `    <priority>${priority.toFixed(1)}</priority>`,
      '  </url>',
    ]),
    '</urlset>',
    '',
  ];

  return lines.join('\n');
}

function buildAppContent({ app, lang, pageData }) {
  const appName = app.name?.[lang] ?? app.name?.en ?? app.id;
  const appDesc = app.description?.[lang] ?? app.description?.en ?? '';

  const features = (pageData?.features ?? []).map((f) => ({
    title: f.title?.[lang] ?? f.title?.en ?? '',
    description: f.description?.[lang] ?? f.description?.en ?? '',
  })).filter((f) => f.title);

  const stats = pageData?.stats ?? {};
  const rating = stats.rating ?? 4.8;
  const ratingCount = stats.ratingCount ?? '';
  const downloads = stats.downloads ?? '';

  // Build HTML content for SEO crawlers
  const featuresHtml = features.map((f) =>
    `      <li>
        <strong>${escapeHtml(f.title)}</strong>: ${escapeHtml(f.description)}
      </li>`,
  ).join('\n');

  const downloadBtnText = lang === 'zh' || lang === 'zh-TW'
    ? '在 App Store 下载'
    : lang === 'ja'
      ? 'App Storeでダウンロード'
      : lang === 'ko'
        ? 'App Store에서 다운로드'
        : lang === 'ar'
          ? 'تحميل من App Store'
          : 'Download on App Store';

  return `<section class="app-content"><header><h1>${escapeHtml(appName)}</h1><p>${escapeHtml(appDesc)}</p><a href="${escapeHtml(app.appStoreUrl)}" target="_blank" rel="noopener">${escapeHtml(downloadBtnText)}</a></header><main><section class="features"><h2>Features</h2><ul>${featuresHtml}</ul></section><section class="stats"><p>Rating: ${rating}${ratingCount ? ` (${escapeHtml(ratingCount)})` : ''}</p><p>Downloads: ${escapeHtml(downloads)}</p></section></main></section>`;
}

function buildHomeContent({ apps, lang }) {
  const downloadText = lang === 'zh' || lang === 'zh-TW'
    ? '在 App Store 下载'
    : lang === 'ja'
      ? 'App Storeでダウンロード'
      : lang === 'ko'
        ? 'App Store에서 다운로드'
        : lang === 'ar'
          ? 'تحميل من App Store'
          : 'Download on App Store';

  const appListItems = apps.map(app => {
    const appName = app.name?.[lang] ?? app.name?.en ?? app.id;
    const appDesc = app.description?.[lang] ?? app.description?.en ?? '';
    return `<li><a href="/${lang}/${app.id}/"><strong>${escapeHtml(appName)}</strong></a> - ${escapeHtml(appDesc)} <a href="${escapeHtml(app.appStoreUrl)}" target="_blank" rel="noopener">[${escapeHtml(downloadText)}]</a></li>`;
  }).join('');

  return `<section class="app-content"><header><h1>Appify - All-in-one App Platform</h1><p>Powerful Apps to boost your productivity.</p></header><main><section class="apps"><h2>Our Apps</h2><ul>${appListItems}</ul></section></main></section>`;
}

function buildSectionContent({ app, lang, section, labels, article, externalUrl, posts }) {
  const appName = app.name?.[lang] ?? app.name?.en ?? app.id;
  const sectionName = labels[section] ?? section;

  // Content-bearing route: render the article's HTML straight into the
  // pre-rendered page so search engines can index it.
  if (article) {
    return `<section class="app-content"><nav><a href="/${lang}/">Appify</a> / <a href="/${lang}/${app.id}/">${escapeHtml(appName)}</a> / ${escapeHtml(sectionName)}</nav><header><h1>${escapeHtml(article.title)}</h1>${article.date ? `<p class="meta">Last updated: ${escapeHtml(article.date)}</p>` : ''}</header><main>${article.html}</main></section>`;
  }

  // Multi-post list view (blog, features): emit one card per post so the
  // index page is crawlable before client-side JS hydrates.
  if (Array.isArray(posts) && posts.length > 0) {
    const desc = section === 'features'
      ? (labels.featuresDesc ?? sectionName)
      : (labels.blogDesc ?? sectionName);
    const items = posts.map((p) => (
      `<li><a href="/${lang}/${app.id}/${encodeURIComponent(section)}/${encodeURIComponent(p.slug)}/"><strong>${escapeHtml(p.title)}</strong></a><p>${escapeHtml(p.description || '')}</p>${p.date ? `<p class="meta">${escapeHtml(p.date)}</p>` : ''}</li>`
    )).join('');
    return `<section class="app-content"><nav><a href="/${lang}/">Appify</a> / <a href="/${lang}/${app.id}/">${escapeHtml(appName)}</a> / ${escapeHtml(sectionName)}</nav><header><h1>${escapeHtml(sectionName)} - ${escapeHtml(appName)}</h1><p>${escapeHtml(desc)}</p></header><main><ul class="post-list">${items}</ul></main></section>`;
  }

  // External legal page: emit a redirect card so crawlers see a clear pointer
  // to the authoritative external URL, and the human reader gets a clickable
  // link with the destination host visible.
  if (externalUrl) {
    let host = externalUrl;
    try {
      host = new URL(externalUrl).host;
    } catch {
      // keep raw string
    }
    return `<section class="app-content"><nav><a href="/${lang}/">Appify</a> / <a href="/${lang}/${app.id}/">${escapeHtml(appName)}</a> / ${escapeHtml(sectionName)}</nav><header><h1>${escapeHtml(sectionName)}</h1><p>${escapeHtml(appName)}</p></header><main><p>${escapeHtml(sectionName)} for ${escapeHtml(appName)} is published on the official ${escapeHtml(host)} site.</p><p><a href="${escapeHtml(externalUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(externalUrl)}</a></p></main></section>`;
  }

  return `<section class="app-content"><nav><a href="/${lang}/">Appify</a> / <a href="/${lang}/${app.id}/">${escapeHtml(appName)}</a> / ${escapeHtml(sectionName)}</nav><header><h1>${escapeHtml(sectionName)}</h1><p>${escapeHtml(appName)}</p></header><main><p>${escapeHtml(labels.comingSoonDesc ?? '')}</p></main></section>`;
}

async function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  const templateHtml = await fs.readFile(templatePath, 'utf8');

  const {
    apps,
    languages,
    seoMeta,
    seoKeywords,
    hreflangConfig,
    sectionLabels,
    appPages,
    contentEntries,
    getContent,
    listContentSlugs,
    hasMultiContent,
  } = await loadSeoData();

  // Indexability is content-driven: for each (appId, section) we emit a real
  // index.html (because Vercel has no SPA rewrite), but only mark it
  // `index,follow` and add it to the sitemap when a Markdown article exists.
  // Legal sections (terms/privacy) are authored in English only - the canonical
  // URL collapses to /en/.../ and hreflang narrows to `en` + `x-default` so we
  // don't ship 15 near-duplicate pages.
  const lookupArticle = (appId, section, lang) => {
    const tryLang = (l) => getContent?.(appId, section, l) ?? null;
    const article = tryLang(lang);
    if (article) return { article, usedLang: lang };
    if (LEGAL_SECTIONS.has(section)) {
      const en = tryLang('en');
      if (en) return { article: en, usedLang: 'en' };
    }
    return null;
  };

  // Sitemap section entries: one per (appId, section) that has content.
  // lang === null means the section is legal-only and only emits a single
  // sitemap URL pointing at /en/... so we don't list 15 near-duplicates.
  const sectionUrls = [];

  const siteOrigin = (() => {
    const enHref = hreflangConfig.find((h) => h.lang === 'en')?.href;
    if (!enHref) return 'https://appify.show';
    return new URL(enHref).origin;
  })();

  const langCodes = languages.map((l) => l.code);

  // Generate static route HTML files with pre-rendered meta + schemas
  for (const lang of langCodes) {
    const homeSeo = seoMeta[lang] ?? seoMeta.en;
    const homeTitle = homeSeo?.title ?? 'Appify';
    const homeDescription = homeSeo?.description ?? 'Appify';
    const homeKeywords = (seoKeywords[lang] ?? seoKeywords.en ?? []).join(', ');
    const homeCanonical = `${siteOrigin}/${encodeURIComponent(lang)}/`;

    // Build pre-rendered content for home page
    const homeContent = buildHomeContent({ apps, lang });

    // Build JSON-LD with WebSite + Organization + all Apps (for home page SEO)
    const homeJsonLdScripts = [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Appify',
        url: siteOrigin,
        description: 'All-in-one App Platform with Powerful Apps',
        inLanguage: lang,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteOrigin}/{search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Appify',
        url: siteOrigin,
      },
      ...apps.map(app => ({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: app.name?.[lang] ?? app.name?.en ?? app.id,
        description: app.description?.[lang] ?? app.description?.en ?? '',
        url: `${siteOrigin}/${lang}/${app.id}/`,
        image: `${siteOrigin}${app.iconPath}`,
        applicationCategory: getAppCategory(app.id),
        operatingSystem: 'iOS',
        downloadUrl: app.appStoreUrl,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        inLanguage: lang,
      })),
    ];

    const homeHtml = renderHtmlForRoute(templateHtml, {
      siteOrigin,
      hreflangConfig,
      langCodes,
      lang,
      title: homeTitle,
      description: homeDescription,
      keywords: homeKeywords,
      canonicalUrl: homeCanonical,
      ogImage: `${siteOrigin}/icons/og-image.png`,
      jsonLdScripts: homeJsonLdScripts,
      isRtl: lang === 'ar',
      appContent: homeContent,
    });

    const homeOut = path.join(DIST_DIR, lang, 'index.html');
    await fs.mkdir(path.dirname(homeOut), { recursive: true });
    await fs.writeFile(homeOut, homeHtml, 'utf8');

    for (const app of apps) {
      const appName = app.name?.[lang] ?? app.name?.en ?? app.id;
      const appDesc = app.description?.[lang] ?? app.description?.en ?? homeDescription;
      const appKeywords = (seoKeywords[lang] ?? seoKeywords.en ?? []).join(', ');
      const appCanonical = `${siteOrigin}/${encodeURIComponent(lang)}/${encodeURIComponent(app.id)}/`;
      const ogImage = `${siteOrigin}${app.iconPath}`;

      const pageData = appPages.get(app.id);
      const localizedFaqs = (pageData?.faqs ?? []).map((f) => ({
        question: f.question?.[lang] ?? f.question?.en ?? '',
        answer: f.answer?.[lang] ?? f.answer?.en ?? '',
      })).filter((f) => f.question && f.answer);

      // Generate pre-rendered HTML content for App detail page
      const appContent = buildAppContent({ app, lang, pageData });

      const appHtml = renderHtmlForRoute(templateHtml, {
        siteOrigin,
        hreflangConfig,
        langCodes,
        lang,
        appId: app.id,
        title: `${appName} - Appify`,
        description: appDesc,
        keywords: appKeywords,
        canonicalUrl: appCanonical,
        ogImage,
        jsonLdScripts: buildJsonLdScripts({
          siteOrigin,
          lang,
          appId: app.id,
          canonicalUrl: appCanonical,
          app: {
            name: appName,
            description: appDesc,
            appStoreUrl: app.appStoreUrl,
            ogImage,
          },
          pageData: { faqs: localizedFaqs },
        }),
        isRtl: lang === 'ar',
        appContent,
      });

      const appOut = path.join(DIST_DIR, lang, app.id, 'index.html');
      await fs.mkdir(path.dirname(appOut), { recursive: true });
      await fs.writeFile(appOut, appHtml, 'utf8');

      // Per-App content sections. These need real HTML files because Vercel has
      // no SPA rewrite - without them the route would 404 on direct access.
      // Indexability is content-driven: only routes with a Markdown article get
      // `index,follow` and join the sitemap. Legal sections (terms/privacy) are
      // authored in English only - all language URLs share the English body,
      // canonical collapses to /en/..., and hreflang narrows to en + x-default.
      const labels = sectionLabels[lang] ?? sectionLabels.en ?? {};
      for (const sectionId of SECTIONS) {
        const sectionName = labels[sectionId] ?? sectionId;
        const isLegal = LEGAL_SECTIONS.has(sectionId);
        // External legal pages (terms/privacy) live on the product's own
        // domain. The in-app route still needs a real index.html (Vercel has
        // no SPA rewrite), but it must never rank or appear in the sitemap.
        // Canonical points at the external URL so search engines consolidate
        // signals there.
        const externalUrl = isLegal ? app.externalLinks?.[sectionId] : undefined;
        const isExternalLegal = externalUrl !== undefined;

        const hit = !isExternalLegal ? lookupArticle(app.id, sectionId, lang) : null;
        // Blog and Features sections render a post-list view when multiple posts
        // exist, even without an `index.{lang}.md` landing file.
        const isMultiSection = sectionId === 'blog' || sectionId === 'features';
        const sectionPosts = !isExternalLegal && isMultiSection
          ? (typeof listContentSlugs === 'function' ? listContentSlugs(app.id, sectionId, lang) : [])
          : [];
        const hasMultiPosts = sectionPosts.length > 0;
        const hasContent = hit !== null || hasMultiPosts;

        // Canonical: localized URL for multi-lang content, English URL for
        // legal-only content (so non-/en/ langs canonicalize to /en/), and
        // the external URL for pages hosted on another domain (so search
        // engines consolidate signals at the authoritative source).
        const canonicalLang = isExternalLegal ? 'en' : (hasContent && isLegal ? 'en' : lang);
        const sectionCanonical = isExternalLegal
          ? externalUrl
          : `${siteOrigin}/${encodeURIComponent(canonicalLang)}/${encodeURIComponent(app.id)}/${encodeURIComponent(sectionId)}/`;

        // For content pages, the localized title uses the section label in the
        // viewer's language even if the body is English - this keeps the title
        // and breadcrumb readable while the body remains authoritative.
        const sectionTitle = hasContent && hit
          ? (isLegal && lang !== 'en'
              ? `${sectionName} - ${appName} - Appify`
              : `${hit.article.title} - Appify`)
          : `${sectionName} - ${appName} - Appify`;
        const sectionDescription = hasContent && hit
          ? (hit.article.description || `${sectionName} - ${appName}.`)
          : `${sectionName} - ${appName}. ${labels.comingSoonDesc ?? appDesc}`;

        // WebPage JSON-LD for content-bearing sections. Helps Google understand
        // the page as a long-form document rather than an app page. Skipped for
        // external legal pages because the canonical points elsewhere and we
        // don't want this site to claim structured-data ownership of those URLs.
        const sectionJsonLd = hasContent && hit
          ? [
              {
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                name: hit.article.title,
                description: hit.article.description,
                url: sectionCanonical,
                inLanguage: 'en',
                isPartOf: { '@type': 'WebSite', name: 'Appify', url: siteOrigin },
                about: { '@type': 'SoftwareApplication', name: appName, url: `${siteOrigin}/${encodeURIComponent(canonicalLang)}/${encodeURIComponent(app.id)}/` },
                ...(hit.article.date ? { dateModified: hit.article.date } : {}),
              },
            ]
          : [];

        const sectionHtml = renderHtmlForRoute(templateHtml, {
          siteOrigin,
          hreflangConfig,
          langCodes,
          lang,
          appId: app.id,
          section: sectionId,
          title: sectionTitle,
          description: sectionDescription,
          keywords: appKeywords,
          canonicalUrl: sectionCanonical,
          ogImage,
          jsonLdScripts: sectionJsonLd,
          isRtl: lang === 'ar',
          noIndex: !hasContent,
          noFollow: isExternalLegal,
          narrowHreflangToEn: (hasContent && isLegal) || isExternalLegal,
          appContent: buildSectionContent({
            app,
            lang,
            section: sectionId,
            labels,
            article: hasContent && hit ? hit.article : null,
            externalUrl: isExternalLegal ? externalUrl : undefined,
            posts: sectionPosts,
          }),
        });

        const sectionOut = path.join(DIST_DIR, lang, app.id, sectionId, 'index.html');
        await fs.mkdir(path.dirname(sectionOut), { recursive: true });
        await fs.writeFile(sectionOut, sectionHtml, 'utf8');

        // Sitemap inclusion rules:
        // - External legal pages -> never include (canonical lives elsewhere).
        // - No content -> never include.
        // - Legal (terms/privacy) with English-only content -> include /en/... once.
        // - Other content -> include every lang URL where the route renders.
        if (isExternalLegal) {
          // skip
        } else if (hasContent && isLegal) {
          if (!sectionUrls.some((s) => s.appId === app.id && s.section === sectionId)) {
            sectionUrls.push({ appId: app.id, section: sectionId, lang: null });
          }
        } else if (hasContent) {
          sectionUrls.push({ appId: app.id, section: sectionId, lang });
        }
      }

      // Multi-post sections (blog, features): one index.html per (lang, slug).
      // Only emit when the post actually exists for the requested language; the
      // index page above already shows the list view when multiple posts exist.
      if (typeof listContentSlugs === 'function') {
        for (const sectionId of ['blog', 'features']) {
          const posts = listContentSlugs(app.id, sectionId, lang);
          for (const post of posts) {
            const postCanonical = `${siteOrigin}/${encodeURIComponent(lang)}/${encodeURIComponent(app.id)}/${encodeURIComponent(sectionId)}/${encodeURIComponent(post.slug)}/`;
            const postTitle = `${post.title} - ${appName}`;
            const postDescription = post.description || `${post.title} - ${appName}`;
            const postJsonLd = [
              {
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: post.title,
                description: post.description,
                url: postCanonical,
                inLanguage: lang,
                datePublished: post.date,
                dateModified: post.date,
                isPartOf: { '@type': 'WebSite', name: 'Appify', url: siteOrigin },
                about: { '@type': 'SoftwareApplication', name: appName, url: `${siteOrigin}/${encodeURIComponent(lang)}/${encodeURIComponent(app.id)}/` },
              },
            ];
            const postHtml = renderHtmlForRoute(templateHtml, {
              siteOrigin,
              hreflangConfig,
              langCodes,
              lang,
              appId: app.id,
              section: sectionId,
              title: postTitle,
              description: postDescription,
              keywords: appKeywords,
              canonicalUrl: postCanonical,
              ogImage,
              jsonLdScripts: postJsonLd,
              isRtl: lang === 'ar',
              appContent: buildSectionContent({
                app,
                lang,
                section: sectionId,
                labels,
                article: getContent(app.id, sectionId, lang, post.slug),
                externalUrl: undefined,
              }),
            });
            const postOut = path.join(DIST_DIR, lang, app.id, sectionId, post.slug, 'index.html');
            await fs.mkdir(path.dirname(postOut), { recursive: true });
            await fs.writeFile(postOut, postHtml, 'utf8');

            sectionUrls.push({
              appId: app.id,
              section: `${sectionId}/${post.slug}`,
              lang,
            });
          }
        }
      }
    }
  }

  // Generate sitemap.xml into dist (overwrites public copy)
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemapXml = toSitemapXml({
    siteOrigin,
    languages: langCodes,
    apps,
    lastmod,
    sectionUrls,
  });
  await fs.writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  console.log(`[seo] prerendered ${langCodes.length} languages, ${apps.length} apps, wrote sitemap.xml (${lastmod})`);
}

main().catch((err) => {
  console.error('[seo] prerender failed:', err);
  process.exitCode = 1;
});
