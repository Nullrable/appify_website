import { useEffect } from 'react';
import { hreflangConfig } from '../data/seo';

interface SEOProps {
  title: string;
  description: string;
  lang: string;
  appId?: string;
}

export default function SEO({ title, description, lang, appId }: SEOProps) {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add hreflang tags (remove old ones first)
    document.querySelectorAll('link[hreflang]').forEach(el => el.remove());
    hreflangConfig.forEach(({ lang: hreflang, href }) => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hreflang;
      link.href = href.replace('/en/', `/${lang}/`).replace(`/zh/`, `/${lang}/`);
      document.head.appendChild(link);
    });

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
      document.querySelectorAll('script[data-app-detail-page]').forEach(el => el.remove());
    };
  }, [title, description, lang, appId]);

  return null;
}