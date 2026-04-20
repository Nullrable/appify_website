# Appify Landing Page Design Specification

Date: 2026-04-20

## Overview

A multi-language landing page showcasing 4 iOS apps for lead generation. Built with Vite + React + TypeScript, deployed at appify.erp4.cn.

## 4 Apps

| App | Domain | App Store URL | Description |
|-----|--------|--------------|-------------|
| Work Hours Tracker | worktracker.erp4.cn | apps.apple.com/us/app/work-hours-tracker/id6760966627 | Track work hours, calculate overtime, 18-country labor law presets, 16 languages |
| Image to PDF | imagepdf.erp4.cn | apps.apple.com/us/app/image-to-pdf-pdf-conveter/id6760633814 | Convert images to PDF |
| Image Converter | imageconverter.erp4.cn | apps.apple.com/us/app/image-converter-photo-pdf/id6760528510 | Convert image formats |
| Money Tracker | moenytrackerx.erp4.cn | (pending) | Expense and income tracking |

## Languages

16 languages: en, zh, zh-TW, ja, ko, vi, id, ar, fr, de, es, pt, it, ru, th + x-default

## Architecture

### URL Structure
- `/en/` - English (default)
- `/zh/` - Simplified Chinese
- `/zh-TW/` - Traditional Chinese
- `/ja/` - Japanese
- `/ko/` - Korean
- `/vi/` - Vietnamese
- `/id/` - Indonesian
- `/ar/` - Arabic
- `/fr/` - French
- `/de/` - German
- `/es/` - Spanish
- `/pt/` - Portuguese
- `/it/` - Italian
- `/ru/` - Russian
- `/th/` - Thai

### Multi-language Implementation
- Static HTML generation with Vite
- Each language version is a separate entry point/page
- URL-based language switching (no query params for SEO)
- hreflang tags for all language versions

### SEO Requirements
- Canonical URL for each page
- hreflang links to all language versions
- JSON-LD structured data (SoftwareApplication schema)
- XML sitemap per language
- robots.txt allowing all crawlers
- Meta tags: title, description, keywords per language
- No client-side redirects (SEO unfriendly)
- OG tags for social sharing

### Performance Requirements
- Critical CSS inline in initial HTML
- Font preconnect to Google Fonts
- Image lazy loading (except above-fold)
- WebP images where possible
- Target: LCP < 2.5s, FID < 100ms, CLS < 0.1

## Design System

### Color Palette
- Background: `#0F172A` (dark navy)
- Primary: `#14B8A6` (teal/cyan)
- Primary Dark: `#0D9488`
- Accent: `#F97316` (orange)
- Text Primary: `#F9FAFB`
- Text Secondary: `#94A3B8`
- Card Background: `#1E293B`
- Card Border: `rgba(255, 255, 255, 0.1)`

### Typography
- Font Family: DM Sans + Space Grotesk (Google Fonts)
- Headings: Space Grotesk, bold
- Body: DM Sans, regular/medium

### Layout
- Max width: 1200px
- Card grid: 2 columns on desktop, 1 column on mobile
- Card gap: 24px
- Section padding: 80px vertical on desktop, 48px on mobile

### Components

#### Navigation
- Fixed top, blurred background
- Logo left, language switcher right
- Language switcher: dropdown with flag icons

#### Hero Section
- Large heading with gradient text effect
- Subheading with app count
- Brief description

#### App Card
- Icon (rounded corners)
- App name (localized)
- Short description (localized)
- Hover effect: subtle glow + scale
- Click: opens detail modal

#### App Detail Modal
- Large QR code (generated from URL)
- App name
- Download button (App Store badge)
- Close button
- Click outside to close

#### Footer
- Copyright
- Links to individual app sites
- Privacy policy links

## Technical Stack

- Vite + React 19 + TypeScript
- i18n: react-i18next or custom solution
- QR Code: qrcode.react or similar
- CSS: Tailwind CSS or custom CSS
- Deployment: Static files

## App Data Structure

```typescript
interface App {
  id: string;
  name: Record<Language, string>;
  description: Record<Language, string>;
  appStoreUrl: string;
  websiteUrl: string;
  iconPath: string;
}
```

## Deliverables

1. Landing page with 16 language versions
2. App detail modal with QR code
3. SEO optimization (meta, structured data, sitemap)
4. Responsive design (desktop + mobile)
5. Fast first-screen rendering