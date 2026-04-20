# Appify Landing Page - App Detail Pages Design

## Overview

为每个APP创建独立的多语言落地页，采用 `/[lang]/[app-id]/` URL结构。

**URL Examples:**
- `/en/work-hours-tracker/`
- `/zh/work-hours-tracker/`
- `/ja/image-to-pdf/`

---

## Page Structure

### 1. Hero Section
- APP icon (80x80)
- APP name (多语言)
- Tagline/slogan (多语言)
- Primary CTA: "Download on App Store" 按钮
- Secondary: QR code modal trigger
- Background: gradient or glassmorphism

### 2. Features Section
- 3-4 core features with icon + title + description
- Grid layout: 2 columns desktop, 1 column mobile
- Each feature has icon (SVG), title, description (all multilingual)

### 3. Stats Section
- App Store rating (stars + count)
- Download count badge
- Social proof elements

### 4. Screenshots Section
- Horizontal scroll/carousel
- 3-5 APP screenshots
- Mobile frame mockups

### 5. FAQ Section
- Accordion style
- 4-6 common questions (per app, multilingual)
- JSON-LD FAQPage structured data

### 6. Download Section
- Large QR code (180x180)
- App Store download button
- "Learn more" link to app website

### 7. Footer
- Back to Appify home
- Copyright
- Social links

---

## Technical Architecture

### Routes
```
/[lang]/[app-id]/          # e.g., /en/work-hours-tracker/
```

### Supported Apps
- `work-hours-tracker`
- `image-to-pdf`
- `image-converter`
- `money-tracker`

### Supported Languages (16)
en, zh, zh-TW, ja, ko, vi, id, ar, fr, de, es, pt, it, ru, th

---

## Component Structure

```
src/
  pages/
    AppPage.tsx              # Main app page wrapper
  components/
    AppHero.tsx
    AppFeatures.tsx
    AppStats.tsx
    AppScreenshots.tsx
    AppFAQ.tsx
    AppDownload.tsx
    AppFooter.tsx
  data/
    apps.ts                  # Existing - app data
    appPages/
      workHoursTracker.ts    # Per-app content (features, FAQ, screenshots)
      imageToPdf.ts
      imageConverter.ts
      moneyTracker.ts
```

---

## SEO Implementation

### Meta Tags per App Page
- Title: `{AppName} - {Tagline} | Appify`
- Description: App-specific description
- Keywords: App-specific keywords
- Canonical URL: `https://appify.erp4.cn/{lang}/{app-id}/`

### JSON-LD Structured Data
1. **SoftwareApplication** - App info, rating, price
2. **FAQPage** - FAQ questions for SEO

### hreflang Tags
All app pages reference their counterparts in other languages:
```html
<link rel="alternate" hreflang="en" href=".../en/work-hours-tracker/">
<link rel="alternate" hreflang="zh" href=".../zh/work-hours-tracker/">
...
<link rel="alternate" hreflang="x-default" href=".../en/work-hours-tracker/">
```

---

## Data Structure

### App Page Content (per app)
```typescript
interface AppPageData {
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

interface Feature {
  icon: string;  // SVG path or component name
  title: Record<string, string>;
  description: Record<string, string>;
}

interface FAQ {
  question: Record<string, string>;
  answer: Record<string, string>;
}
```

---

## Implementation Order

1. Create app page data files (per-app multilingual content)
2. Create AppPage route component with language detection
3. Build Hero component
4. Build Features component
5. Build Stats component
6. Build Screenshots component
7. Build FAQ component (with JSON-LD)
8. Build Download component
9. Build Footer component
10. Update App.tsx with routes
11. Add SEO meta tags and hreflang
12. Build and test

---

## Navigation Flow

### From Homepage (Appify)
- Click AppCard → Navigate to `/{currentLang}/{appId}/`
- Footer links → Navigate to `/{lang}/`

### From App Page
- Logo click → `/[currentLang]/` (back to home)
- Language switcher → switch to same app in different language

---

## UI/UX Guidelines

### Visual Style
- Consistent with Appify homepage design language
- Primary color: #14B8A6
- Dark theme background: #0F172A
- Card backgrounds: #1E293B
- Accent: #F97316

### Animations
- Smooth page transitions
- Scroll-triggered fade-in for sections
- Hover effects on interactive elements

### Responsive Breakpoints
- Mobile: < 640px (single column, larger touch targets)
- Tablet: 640px - 1024px
- Desktop: > 1024px