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

  const appsMod = await import(pathToFileURL(appsModPath).href);
  const seoMod = await import(pathToFileURL(seoModPath).href);

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
    appPages,
  };
}

function buildHreflangLinks({ siteOrigin, hreflangConfig, appId }) {
  return hreflangConfig.map(({ lang: hreflang }) => {
    const targetLang = hreflang === 'x-default' ? 'en' : hreflang;
    const pathname = appId
      ? `/${encodeURIComponent(targetLang)}/${encodeURIComponent(appId)}/`
      : `/${encodeURIComponent(targetLang)}/`;
    const href = new URL(pathname, siteOrigin).toString();
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
      description: 'All-in-one App Platform with 4 powerful iOS apps',
      inLanguage: lang,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteOrigin}/{search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }

  scripts.push({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Appify',
    url: siteOrigin,
    sameAs: ['https://apps.apple.com/us/developer/appify'],
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

    const faqs = pageData?.faqs ?? [];
    if (Array.isArray(faqs) && faqs.length > 0) {
      scripts.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      });
    }
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
    '    <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />',
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
    '    <meta property="og:image:width" content="512" />',
    '    <meta property="og:image:height" content="512" />',
    `    <meta property="og:locale" content="${escapeHtml(langToOgLocale(lang))}" />`,
    ...ogAlternates.map(
      (alt) => `    <meta property="og:locale:alternate" content="${escapeHtml(alt)}" />`,
    ),
    '',
    '    <!-- Twitter tags -->',
    '    <meta name="twitter:card" content="summary" />',
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
  html = replaceSection(html, MARKERS.jsonLd, '<script type="module"', jsonLdBlockLines.join('\n'));

  return html;
}

function toSitemapXml({ siteOrigin, languages, apps, lastmod }) {
  const urls = [];
  for (const lang of languages) {
    urls.push({ loc: `${siteOrigin}/${lang}/`, priority: 1.0 });
    for (const app of apps) {
      urls.push({ loc: `${siteOrigin}/${lang}/${app.id}/`, priority: 0.8 });
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

async function main() {
  const templatePath = path.join(DIST_DIR, 'index.html');
  const templateHtml = await fs.readFile(templatePath, 'utf8');

  const {
    apps,
    languages,
    seoMeta,
    seoKeywords,
    hreflangConfig,
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

    const homeHtml = renderHtmlForRoute(templateHtml, {
      siteOrigin,
      hreflangConfig,
      langCodes,
      lang,
      title: homeTitle,
      description: homeDescription,
      keywords: homeKeywords,
      canonicalUrl: homeCanonical,
      ogImage: `${siteOrigin}/icons/image-to-pdf.png`,
      jsonLdScripts: buildJsonLdScripts({
        siteOrigin,
        lang,
        canonicalUrl: homeCanonical,
      }),
      isRtl: lang === 'ar',
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
      });

      const appOut = path.join(DIST_DIR, lang, app.id, 'index.html');
      await fs.mkdir(path.dirname(appOut), { recursive: true });
      await fs.writeFile(appOut, appHtml, 'utf8');
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
