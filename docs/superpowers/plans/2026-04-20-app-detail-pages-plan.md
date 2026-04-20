# App Detail Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create multi-language landing pages for 4 iOS apps with URL structure `/[lang]/[app-id]/`

**Architecture:** React Router with language-prefixed routes, each app has its own page data file, reusable components for common sections.

**Tech Stack:** React Router v6, TypeScript, Tailwind CSS v4, qrcode.react

---

## File Structure

```
src/
  data/
    apps.ts                      # Existing - app basic data
    appPages/
      workHoursTracker.ts        # App-specific content (features, FAQ, screenshots)
      imageToPdf.ts
      imageConverter.ts
      moneyTracker.ts
  components/
    AppHero.tsx
    AppFeatures.tsx
    AppStats.tsx
    AppScreenshots.tsx
    AppFAQ.tsx
    AppDownload.tsx
    AppFooter.tsx
  pages/
    AppPage.tsx                  # Main app page with routing logic
App.tsx                          # Modified - add routes
```

---

## Task 1: Create App Page Data Files

Create multilingual content for each app.

**Files:**
- Create: `src/data/appPages/workHoursTracker.ts`
- Create: `src/data/appPages/imageToPdf.ts`
- Create: `src/data/appPages/imageConverter.ts`
- Create: `src/data/appPages/moneyTracker.ts`

- [ ] **Step 1: Create workHoursTracker.ts**

```typescript
import type { AppPageData } from './types';

export const workHoursTracker: AppPageData = {
  appId: 'work-hours-tracker',
  features: [
    {
      icon: 'clock',
      title: {
        en: 'One-Tap Clock In/Out',
        zh: '一键打卡',
        // ... all 16 languages
      },
      description: {
        en: 'Start tracking with a single tap. No more manual entry.',
        zh: '一键开始追踪，无需手动输入。',
        // ... all 16 languages
      },
    },
    {
      icon: 'calculator',
      title: {
        en: 'Automatic Wage Calculation',
        zh: '自动工资计算',
        // ... all 16 languages
      },
      description: {
        en: 'Hourly wage calculated based on your rate and overtime rules.',
        zh: '根据您的时薪和加班规则自动计算。',
        // ... all 16 languages
      },
    },
    // 2-3 more features
  ],
  screenshots: [
    '/images/work-hours-tracker/screenshot-1.png',
    '/images/work-hours-tracker/screenshot-2.png',
    '/images/work-hours-tracker/screenshot-3.png',
  ],
  faqs: [
    {
      question: {
        en: 'How does overtime calculation work?',
        zh: '加班计算如何工作？',
        // ... all 16 languages
      },
      answer: {
        en: 'The app automatically calculates overtime based on your selected country labor law presets.',
        zh: '应用会根据您选择的国家劳动法预设自动计算加班。',
        // ... all 16 languages
      },
    },
    // 4-5 more FAQs
  ],
  stats: {
    rating: 4.8,
    ratingCount: '1,000+',
    downloads: '50,000+',
  },
};
```

- [ ] **Step 2: Create imageToPdf.ts** (similar structure)

- [ ] **Step 3: Create imageConverter.ts** (similar structure)

- [ ] **Step 4: Create moneyTracker.ts** (similar structure)

- [ ] **Step 5: Create types.ts**

```typescript
export interface AppPageData {
  appId: string;
  features: Feature[];
  screenshots: string[];
  faqs: FAQ[];
  stats: {
    rating: number;
    ratingCount: string;
    downloads: string;
  };
}

export interface Feature {
  icon: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export interface FAQ {
  question: Record<string, string>;
  answer: Record<string, string>;
}
```

---

## Task 2: Create AppPage Route Component

**Files:**
- Create: `src/pages/AppPage.tsx`

- [ ] **Step 1: Create AppPage.tsx**

```typescript
import { useParams } from 'react-router-dom';
import { apps } from '../data/apps';
import { workHoursTracker } from '../data/appPages/workHoursTracker';
import { imageToPdf } from '../data/appPages/imageToPdf';
import { imageConverter } from '../data/appPages/imageConverter';
import { moneyTracker } from '../data/appPages/moneyTracker';
import AppHero from '../components/AppHero';
import AppFeatures from '../components/AppFeatures';
import AppStats from '../components/AppStats';
import AppScreenshots from '../components/AppScreenshots';
import AppFAQ from '../components/AppFAQ';
import AppDownload from '../components/AppDownload';
import AppFooter from '../components/AppFooter';

const appPageDataMap: Record<string, typeof workHoursTracker> = {
  'work-hours-tracker': workHoursTracker,
  'image-to-pdf': imageToPdf,
  'image-converter': imageConverter,
  'money-tracker': moneyTracker,
};

export default function AppPage() {
  const { lang = 'en', appId } = useParams<{ lang: string; appId: string }>();
  const pageData = appPageDataMap[appId || ''];
  const appData = apps.find(a => a.id === appId);

  if (!pageData || !appData) {
    return <div>App not found</div>;
  }

  return (
    <div className="min-h-screen bg-bg">
      <AppHero app={appData} lang={lang} pageData={pageData} />
      <AppFeatures pageData={pageData} lang={lang} />
      <AppStats stats={pageData.stats} />
      <AppScreenshots screenshots={pageData.screenshots} />
      <AppFAQ faqs={pageData.faqs} lang={lang} />
      <AppDownload app={appData} />
      <AppFooter lang={lang} />
    </div>
  );
}
```

---

## Task 3: Create AppHero Component

**Files:**
- Create: `src/components/AppHero.tsx`

- [ ] **Step 1: Create AppHero.tsx**

```typescript
import { useState } from 'react';
import type { App } from '../data/apps';
import type { AppPageData } from '../data/appPages/types';
import AppModal from './AppModal';

interface AppHeroProps {
  app: App;
  lang: string;
  pageData: AppPageData;
}

export default function AppHero({ app, lang, pageData }: AppHeroProps) {
  const [showQR, setShowQR] = useState(false);
  const name = app.name[lang] || app.name['en'];

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* App Icon */}
        <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
          <img src={app.iconPath} alt={name} className="w-20 h-20 object-contain" />
        </div>

        {/* App Name */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
          {name}
        </h1>

        {/* Tagline from features first item */}
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          {pageData.features[0]?.description[lang] || pageData.features[0]?.description['en']}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.27 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>

          <button
            onClick={() => setShowQR(true)}
            className="flex items-center gap-2 px-6 py-4 bg-card text-white font-medium rounded-2xl hover:bg-card/80 transition-colors border border-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
            Scan QR Code
          </button>
        </div>
      </div>

      {showQR && (
        <AppModal app={app} lang={lang} onClose={() => setShowQR(false)} />
      )}
    </section>
  );
}
```

---

## Task 4: Create AppFeatures Component

**Files:**
- Create: `src/components/AppFeatures.tsx`

- [ ] **Step 1: Create AppFeatures.tsx**

```typescript
import type { AppPageData } from '../data/appPages/types';

const iconMap: Record<string, JSX.Element> = {
  clock: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  calculator: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
  chart: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
  shield: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  // Add more icons as needed
};

interface AppFeaturesProps {
  pageData: AppPageData;
  lang: string;
}

export default function AppFeatures({ pageData, lang }: AppFeaturesProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pageData.features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-6 border border-white/10"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-4">
                {iconMap[feature.icon] || iconMap['clock']}
              </div>
              <h3 className="font-heading font-semibold text-xl text-white mb-2">
                {feature.title[lang] || feature.title['en']}
              </h3>
              <p className="text-gray-400">
                {feature.description[lang] || feature.description['en']}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Task 5: Create AppStats Component

**Files:**
- Create: `src/components/AppStats.tsx`

- [ ] **Step 1: Create AppStats.tsx**

```typescript
interface AppStatsProps {
  stats: {
    rating: number;
    ratingCount: string;
    downloads: string;
  };
}

export default function AppStats({ stats }: AppStatsProps) {
  return (
    <section className="py-12 px-6 border-y border-white/10">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-6 h-6 ${i < Math.floor(stats.rating) ? 'text-yellow-400' : 'text-gray-600'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl font-bold text-white">{stats.rating}</p>
            <p className="text-gray-400 text-sm">{stats.ratingCount} reviews</p>
          </div>

          {/* Downloads */}
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-1">{stats.downloads}</p>
            <p className="text-gray-400 text-sm">Downloads</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## Task 6: Create AppScreenshots Component

**Files:**
- Create: `src/components/AppScreenshots.tsx`

- [ ] **Step 1: Create AppScreenshots.tsx**

```typescript
interface AppScreenshotsProps {
  screenshots: string[];
}

export default function AppScreenshots({ screenshots }: AppScreenshotsProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
          Screenshots
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {screenshots.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 snap-center"
            >
              <div className="bg-card rounded-2xl p-4 border border-white/10">
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full rounded-xl"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Task 7: Create AppFAQ Component

**Files:**
- Create: `src/components/AppFAQ.tsx`

- [ ] **Step 1: Create AppFAQ.tsx**

```typescript
import { useState } from 'react';
import type { AppPageData } from '../data/appPages/types';

interface AppFAQProps {
  faqs: AppPageData['faqs'];
  lang: string;
}

export default function AppFAQ({ faqs, lang }: AppFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading text-3xl font-bold text-white text-center mb-12">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-white/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between"
              >
                <span className="font-medium text-white">
                  {faq.question[lang] || faq.question['en']}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">
                    {faq.answer[lang] || faq.answer['en']}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## Task 8: Create AppDownload Component

**Files:**
- Create: `src/components/AppDownload.tsx`

- [ ] **Step 1: Create AppDownload.tsx**

```typescript
import { QRCodeSVG } from 'qrcode.react';
import type { App } from '../data/apps';

interface AppDownloadProps {
  app: App;
}

export default function AppDownload({ app }: AppDownloadProps) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-md mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold text-white mb-8">
          Download Now
        </h2>

        {/* QR Code */}
        <div className="bg-white p-6 rounded-3xl inline-block mb-8">
          <QRCodeSVG
            value={app.appStoreUrl}
            size={180}
            level="M"
            includeMargin
          />
        </div>

        {/* Download Button */}
        <a
          href={app.appStoreUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.27 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          Download on App Store
        </a>

        {/* Learn More Link */}
        <a
          href={app.websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-4 text-sm text-gray-400 hover:text-primary transition-colors"
        >
          Learn more →
        </a>
      </div>
    </section>
  );
}
```

---

## Task 9: Create AppFooter Component

**Files:**
- Create: `src/components/AppFooter.tsx`

- [ ] **Step 1: Create AppFooter.tsx**

```typescript
import { Link } from 'react-router-dom';

interface AppFooterProps {
  lang: string;
}

export default function AppFooter({ lang }: AppFooterProps) {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            to={`/${lang}/`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">A</span>
            </div>
            <span className="font-heading font-semibold text-white">Appify</span>
          </Link>

          <p className="text-sm text-gray-500">
            © 2026 Appify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## Task 10: Update App.tsx with Routes

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Update App.tsx with React Router**

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppPage from './pages/AppPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:lang/" element={<Home />} />
        <Route path="/:lang/:appId/" element={<AppPage />} />
      </Routes>
    </BrowserRouter>
  );
}
```

- [ ] **Step 2: Create Home.tsx** (move existing App.tsx content)

Rename current `src/App.tsx` content to `src/pages/Home.tsx`

---

## Task 11: Add SEO and JSON-LD to AppPage

**Files:**
- Modify: `src/pages/AppPage.tsx` - add useEffect for SEO
- Create: `src/components/SEO.tsx` - reusable SEO component

- [ ] **Step 1: Create SEO component**

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  lang: string;
  appId: string;
  alternateUrls: string[];
}

export default function SEO({ title, description, lang, appId, alternateUrls }: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Add hreflang tags
    alternateUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = url.split('/')[4] || 'en';
      link.href = url;
      document.head.appendChild(link);
    });

    // Add JSON-LD
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      name: title,
      description: description,
      url: location.href,
    });
    document.head.appendChild(script);

    return () => {
      document.head.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    };
  }, [title, description, lang, appId, alternateUrls, location]);

  return null;
}
```

---

## Task 12: Build and Test

- [ ] **Step 1: Run build**

```bash
npm run build
```

Expected: No errors

- [ ] **Step 2: Start dev server**

```bash
npm run dev
```

- [ ] **Step 3: Test routes manually**

Navigate to:
- `/en/work-hours-tracker/` - should show Work Hours Tracker page
- `/zh/image-to-pdf/` - should show Image to PDF page in Chinese
- `/` - should redirect to `/en/` or show home

- [ ] **Step 4: Verify SEO**

Check page source for:
- Title, meta description
- hreflang tags
- JSON-LD structured data