import { useEffect } from 'react';
import { hreflangConfig, seoKeywords } from '../data/seo';

// Map lang code to Open Graph locale
function langToOgLocale(lang: string): string {
  const localeMap: Record<string, string> = {
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

interface SEOProps {
  title: string;
  description: string;
  lang: string;
  appId?: string;
}

export default function SEO({ title, description, lang, appId }: SEOProps) {
  useEffect(() => {
    // Set document language attribute for accessibility and SEO
    document.documentElement.lang = lang;

    // Set canonical URL
    const canonicalUrl = window.location.href;
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link') as HTMLLinkElement;
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Set meta keywords
    const keywords = seoKeywords[lang] || seoKeywords['en'];
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement | null;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta') as HTMLMetaElement;
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords.join(', '));

    // Set title
    document.title = title;

    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:locale', content: langToOgLocale(lang) },
      { property: 'og:type', content: appId ? 'website' : 'website' },
      { property: 'og:url', content: window.location.href },
      { property: 'og:site_name', content: 'Appify' },
      { property: 'og:image', content: 'https://appify.show/icons/image-to-pdf.png' },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
    ];

    ogTags.forEach(({ property, content }) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta') as HTMLMetaElement;
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta') as HTMLMetaElement;
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add hreflang tags (remove old ones first)
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    hreflangConfig.forEach(({ lang: hreflang, href }) => {
      const link = document.createElement('link') as HTMLLinkElement;
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href.replace('/en/', `/${lang}/`).replace(`/zh/`, `/${lang}/`);
      document.head.appendChild(link);
    });

    // Add WebSite schema for homepage
    if (!appId) {
      const websiteScript = document.createElement('script');
      websiteScript.type = 'application/ld+json';
      websiteScript.setAttribute('data-website-schema', 'true');
      websiteScript.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Appify',
        url: 'https://appify.show',
        description: 'All-in-one App Platform with 4 powerful iOS apps',
        publisher: {
          '@type': 'Organization',
          name: 'Appify',
          url: 'https://appify.show',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://appify.show/{search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      });
      document.head.appendChild(websiteScript);
    }

    // Add Organization schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.setAttribute('data-organization-schema', 'true');
    orgScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Appify',
      url: 'https://appify.show',
      sameAs: [
        'https://apps.apple.com/us/developer/appify',
      ],
    });
    document.head.appendChild(orgScript);

    // Add JSON-LD structured data
    const existingScript = document.querySelector('script[data-app-detail-page]');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-app-detail-page', 'true');
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
      url: window.location.href,
      applicationCategory: 'ProductivityApplication',
      operatingSystem: 'iOS',
    });
    document.head.appendChild(script);

    return () => {
      document.querySelectorAll('link[rel="canonical"], script[data-app-detail-page], script[data-website-schema], script[data-organization-schema]').forEach(el => el.remove());
    };
  }, [title, description, lang, appId]);

  return null;
}