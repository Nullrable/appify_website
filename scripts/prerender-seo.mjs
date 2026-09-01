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
// `indexable: false` emits `noindex,follow` and keeps the route out of
// sitemap.xml. Flip an entry to `indexable: true` once real Markdown lands in
// content/{appId}/{section}/ - see the loadAppContent() extension point below.
const SECTIONS = [
  { id: 'about', indexable: false },
  { id: 'blog', indexable: false },
  { id: 'terms', indexable: false },
  { id: 'privacy', indexable: false },
];

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

  const appsMod = await import(pathToFileURL(appsModPath).href);
  const seoMod = await import(pathToFileURL(seoModPath).href);
  const sectionMod = await import(pathToFileURL(sectionModPath).href);

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
    appPages,
  };
}

// Extension point: once Markdown files land under content/{appId}/{section}/,
// parse them here (front matter -> title/description/date, body -> HTML) and
// pass the result into buildSectionContent(). Flip the matching SECTIONS entry
// to `indexable: true` so the route gets `index,follow` and enters sitemap.xml.
async function loadAppContent(appId, section) {
  const dir = path.join(PROJECT_ROOT, 'content', appId, section);
  try {
    const files = await fs.readdir(dir);
    return files.filter((f) => f.endsWith('.md'));
  } catch {
    return [];
  }
}

function buildHreflangLinks({ siteOrigin, hreflangConfig, appId, section }) {
  return hreflangConfig.map(({ lang: hreflang }) => {
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
      ? '    <meta name="robots" content="noindex,follow" />'
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

function toSitemapXml({ siteOrigin, languages, apps, lastmod }) {
  const indexableSections = SECTIONS.filter((s) => s.indexable);
  const urls = [];
  for (const lang of languages) {
    urls.push({ loc: `${siteOrigin}/${lang}/`, priority: 0.8 });
    for (const app of apps) {
      urls.push({ loc: `${siteOrigin}/${lang}/${app.id}/`, priority: 0.9 });
      for (const section of indexableSections) {
        urls.push({ loc: `${siteOrigin}/${lang}/${app.id}/${section.id}/`, priority: 0.6 });
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

function buildSectionContent({ app, lang, section, labels, articles }) {
  const appName = app.name?.[lang] ?? app.name?.en ?? app.id;
  const sectionName = labels[section] ?? section;
  const body = articles.length > 0
    ? `<ul>${articles.map((f) => `<li>${escapeHtml(f.replace(/\.[a-zA-Z-]+\.md$/, ''))}</li>`).join('')}</ul>`
    : `<p>${escapeHtml(labels.comingSoonDesc ?? '')}</p>`;

  return `<section class="app-content"><nav><a href="/${lang}/">Appify</a> / <a href="/${lang}/${app.id}/">${escapeHtml(appName)}</a> / ${escapeHtml(sectionName)}</nav><header><h1>${escapeHtml(sectionName)}</h1><p>${escapeHtml(appName)}</p></header><main>${body}</main></section>`;
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
  } = await loadSeoData();

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
      const labels = sectionLabels[lang] ?? sectionLabels.en ?? {};
      for (const section of SECTIONS) {
        const sectionName = labels[section.id] ?? section.id;
        const sectionCanonical = `${siteOrigin}/${encodeURIComponent(lang)}/${encodeURIComponent(app.id)}/${encodeURIComponent(section.id)}/`;
        const articles = await loadAppContent(app.id, section.id);

        const sectionHtml = renderHtmlForRoute(templateHtml, {
          siteOrigin,
          hreflangConfig,
          langCodes,
          lang,
          appId: app.id,
          section: section.id,
          title: `${sectionName} - ${appName} - Appify`,
          description: `${sectionName} - ${appName}. ${labels.comingSoonDesc ?? appDesc}`,
          keywords: appKeywords,
          canonicalUrl: sectionCanonical,
          ogImage,
          // No JSON-LD yet: the right schema type depends on the content that
          // lands here (BlogPosting for blog, WebPage for terms/privacy).
          // Emitting WebSite/SoftwareApplication again would duplicate the
          // home and App detail pages.
          jsonLdScripts: [],
          isRtl: lang === 'ar',
          noIndex: !section.indexable,
          appContent: buildSectionContent({
            app,
            lang,
            section: section.id,
            labels,
            articles,
          }),
        });

        const sectionOut = path.join(DIST_DIR, lang, app.id, section.id, 'index.html');
        await fs.mkdir(path.dirname(sectionOut), { recursive: true });
        await fs.writeFile(sectionOut, sectionHtml, 'utf8');
      }
    }
  }

  // Generate sitemap.xml into dist (overwrites public copy)
  const lastmod = new Date().toISOString().slice(0, 10);
  const sitemapXml = toSitemapXml({ siteOrigin, languages: langCodes, apps, lastmod });
  await fs.writeFile(path.join(DIST_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

  console.log(`[seo] prerendered ${langCodes.length} languages, ${apps.length} apps, wrote sitemap.xml (${lastmod})`);
}

main().catch((err) => {
  console.error('[seo] prerender failed:', err);
  process.exitCode = 1;
});
