import { useEffect } from "react";
import { hreflangConfig, seoKeywords } from "../data/seo";

// Map lang code to Open Graph locale
function langToOgLocale(lang: string): string {
  const localeMap: Record<string, string> = {
    en: "en_US",
    zh: "zh_CN",
    "zh-TW": "zh_TW",
    ja: "ja_JP",
    ko: "ko_KR",
    vi: "vi_VN",
    id: "id_ID",
    ar: "ar_AR",
    fr: "fr_FR",
    de: "de_DE",
    es: "es_ES",
    pt: "pt_BR",
    it: "it_IT",
    ru: "ru_RU",
    th: "th_TH",
  };
  return localeMap[lang] || "en_US";
}

function ensureTrailingSlash(pathname: string): string {
  if (pathname === "/") return pathname;
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

function buildLocalizedPathname(pathname: string, targetLang: string): string {
  const supportedLangs = hreflangConfig
    .map(({ lang }) => lang)
    .filter((lang) => lang !== "x-default");

  const segments = pathname.split("/").filter(Boolean);
  const hasLeadingLang =
    segments.length > 0 && supportedLangs.includes(segments[0]);
  const restSegments = hasLeadingLang ? segments.slice(1) : segments;

  if (restSegments.length === 0) return `/${targetLang}/`;
  return `/${targetLang}/${restSegments.join("/")}/`;
}

function setMetaByName(name: string, content: string) {
  let meta = document.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta") as HTMLMetaElement;
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let meta = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta") as HTMLMetaElement;
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

interface SEOProps {
  title: string;
  description: string;
  lang: string;
  appId?: string;
  appName?: string;
  appStoreUrl?: string;
  faqs?: Array<{ question: string; answer: string }>;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  lang,
  appId,
  appName,
  appStoreUrl,
  faqs,
  noIndex = false,
}: SEOProps) {
  useEffect(() => {
    // Set document language attribute for accessibility and SEO
    document.documentElement.lang = lang;
    const isRtl = hreflangConfig.some(
      (l) => l.lang === lang && l.dir === "rtl",
    );
    document.documentElement.dir = isRtl ? "rtl" : "ltr";

    const origin = window.location.origin;
    const pathname = ensureTrailingSlash(window.location.pathname);
    const canonicalUrl = `${origin}${pathname}`;
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link") as HTMLLinkElement;
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // Set meta keywords (keep short-tail only to avoid keyword stuffing)
    const keywordList = seoKeywords[lang] || seoKeywords["en"];
    const shortTailKeywords = keywordList.slice(0, 12);
    const pageKeywords = appId
      ? [appName || title, ...shortTailKeywords].slice(0, 12)
      : shortTailKeywords;
    setMetaByName("keywords", pageKeywords.join(", "));
    setMetaByName(
      "robots",
      noIndex
        ? "noindex,follow"
        : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    );

    // Set title
    document.title = title;
    setMetaByName("description", description);

    const ogImage = appId
      ? `${origin}/icons/${encodeURIComponent(appId)}.png`
      : `${origin}/icons/og-image.png`;

    // Open Graph tags
    setMetaByProperty("og:title", title);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:site_name", "Appify");
    setMetaByProperty("og:image", ogImage);
    setMetaByProperty("og:image:width", "1200");
    setMetaByProperty("og:image:height", "630");
    setMetaByProperty("og:image:alt", appId ? title : "Appify");
    setMetaByProperty("og:locale", langToOgLocale(lang));

    // Open Graph locale alternates
    document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((el) => el.remove());
    hreflangConfig
      .map(({ lang: l }) => l)
      .filter((l) => l !== "x-default" && l !== lang)
      .forEach((altLang) => {
        const meta = document.createElement("meta") as HTMLMetaElement;
        meta.setAttribute("property", "og:locale:alternate");
        meta.setAttribute("content", langToOgLocale(altLang));
        document.head.appendChild(meta);
      });

    // Twitter tags
    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", title);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", ogImage);
    setMetaByName("twitter:url", canonicalUrl);

    // Add hreflang tags (remove old ones first)
    document
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((el) => el.remove());
    hreflangConfig.forEach(({ lang: hreflang }) => {
      const link = document.createElement("link") as HTMLLinkElement;
      link.rel = "alternate";
      link.hreflang = hreflang;
      const targetLang = hreflang === "x-default" ? "en" : hreflang;
      link.href = `${origin}${buildLocalizedPathname(pathname, targetLang)}`;
      document.head.appendChild(link);
    });

    // Remove previous JSON-LD scripts managed by this component
    document
      .querySelectorAll(
        "script[data-app-detail-page], script[data-app-faq-schema], script[data-website-schema], script[data-organization-schema]",
      )
      .forEach((el) => el.remove());

    // WebSite schema for homepage
    if (!appId && !noIndex) {
      const websiteScript = document.createElement("script");
      websiteScript.type = "application/ld+json";
      websiteScript.setAttribute("data-website-schema", "true");
      websiteScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Appify",
        url: origin,
        description: "All-in-one App Platform with Powerful Apps",
        publisher: {
          "@type": "Organization",
          name: "Appify",
          url: origin,
        },
        potentialAction: {
          "@type": "SearchAction",
          target: `${origin}/{search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      });
      document.head.appendChild(websiteScript);
    }

    // Organization schema
    if (!noIndex) {
      const orgScript = document.createElement("script");
      orgScript.type = "application/ld+json";
      orgScript.setAttribute("data-organization-schema", "true");
      orgScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Appify",
        url: origin,
        sameAs: [],
      });
      document.head.appendChild(orgScript);
    }

    // App detail schemas
    if (appId && !noIndex) {
      const appSchema = document.createElement("script");
      appSchema.type = "application/ld+json";
      appSchema.setAttribute("data-app-detail-page", "true");
      appSchema.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: appName || title.replace(/\s+-\s+Appify$/, ""),
        description: description,
        url: canonicalUrl,
        image: ogImage,
        applicationCategory: "ProductivityApplication",
        operatingSystem: "iOS",
        ...(appStoreUrl ? { downloadUrl: appStoreUrl } : {}),
        inLanguage: lang,
      });
      document.head.appendChild(appSchema);

      if (faqs && faqs.length > 0) {
        const faqSchema = document.createElement("script");
        faqSchema.type = "application/ld+json";
        faqSchema.setAttribute("data-app-faq-schema", "true");
        faqSchema.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        });
        document.head.appendChild(faqSchema);
      }
    }

    return () => {
      // Split queries because meta[property^="og:"] is invalid (colon in attribute name)
      const selectors = [
        'link[rel="canonical"]',
        'meta[name="robots"]',
        'meta[name="keywords"]',
        'meta[name="description"]',
        'meta[name="twitter:card"]',
        'meta[name="twitter:title"]',
        'meta[name="twitter:description"]',
        'meta[name="twitter:image"]',
        'meta[name="twitter:url"]',
        "script[data-app-detail-page]",
        "script[data-app-faq-schema]",
        "script[data-website-schema]",
        "script[data-organization-schema]",
        'link[rel="alternate"][hreflang]',
      ];
      const ogMetaSelectors = [
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:type"]',
        'meta[property="og:url"]',
        'meta[property="og:site_name"]',
        'meta[property="og:image"]',
        'meta[property="og:image:width"]',
        'meta[property="og:image:height"]',
        'meta[property="og:image:alt"]',
        'meta[property="og:locale"]',
        'meta[property="og:locale:alternate"]',
      ];
      [...selectors, ...ogMetaSelectors].forEach((sel) => {
        document.querySelectorAll(sel).forEach((el) => el.remove());
      });
    };
  }, [title, description, lang, appId, appName, appStoreUrl, faqs, noIndex]);

  return null;
}
