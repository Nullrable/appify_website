# Appify Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a multi-language landing page for 4 iOS apps with QR code download and SEO optimization.

**Architecture:** Static site with Vite + React, URL-based language routing (/en/, /zh/, etc.), QR code generation for app downloads.

**Tech Stack:** Vite + React 19 + TypeScript, Tailwind CSS, qrcode.react, i18next

---

## File Structure

```
src/
  main.tsx                    # Entry point
  App.tsx                     # Root component with routing
  index.css                   # Global styles
  components/
    Nav.tsx                   # Navigation with language switcher
    Hero.tsx                  # Hero section
    AppCard.tsx               # Individual app card
    AppModal.tsx              # App detail modal with QR
    Footer.tsx               # Footer
  i18n/
    translations.ts          # All 16 language translations
  data/
    apps.ts                  # App data (names, URLs, icons)
  pages/
    [lang]/index.tsx         # Language page wrapper
public/
  icons/                     # App icons
  sitemap.xml
  robots.txt
```

---

## Task 1: Project Setup

**Files:**
- Modify: `package.json` - add dependencies
- Modify: `vite.config.ts` - configure multi-page
- Modify: `tailwind.config.js` - create if not exists

- [ ] **Step 1: Install dependencies**

Run:
```bash
npm install tailwindcss postcss autoprefixer qrcode.react i18next react-i18next
npm install -D @types/qrcode.react
npx tailwindcss init -p
```

- [ ] **Step 2: Configure Tailwind**

Modify `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0F172A',
        primary: '#14B8A6',
        'primary-dark': '#0D9488',
        accent: '#F97316',
        card: '#1E293B',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 3: Add Tailwind to index.css**

Modify `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-bg text-gray-100 font-sans antialiased;
  }
}
```

---

## Task 2: SEO Data (集中管理)

**Files:**
- Create: `src/data/seo.ts`

```typescript
// SEO keywords per language - long-tail keywords for GEO
const seoKeywords: Record<string, string[]> = {
  en: [
    'best iOS apps 2026', 'free productivity apps', 'work hours tracker app',
    'image to PDF converter', 'expense tracker app', 'time tracking app',
    'iPhone app download', 'App Store productivity tools', 'iOS utility apps',
  ],
  zh: [
    'iOS应用推荐', '免费效率工具', '工时记录app', '图片转PDF', '记账app',
    'iPhone应用下载', 'App Store效率工具', '打工打卡app', '时薪计算',
  ],
  // ... 其他语言
};

// SEO meta content per language
interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  jsonLd: object;
}

const seoMeta: Record<string, SEOMeta> = {
  en: {
    title: 'Appify - All-in-one App Platform | 4 Powerful iOS Apps',
    description: 'Discover 4 powerful iOS apps: Work Hours Tracker, Image to PDF, Image Converter, Money Tracker. Boost your productivity today. Free download on App Store.',
    keywords: seoKeywords['en'],
    ogTitle: 'Appify - All-in-one App Platform',
    ogDescription: 'Discover 4 powerful iOS apps to boost your productivity.',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Appify',
      url: 'https://appify.erp4.cn',
      description: 'All-in-one App Platform with 4 powerful iOS apps',
    },
  },
  zh: {
    title: 'Appify - 一站式应用平台 | 4款强大iOS应用',
    description: '发现4款强大的iOS应用：工时追踪器、图片转PDF、图片格式转换、Money Tracker。提升您的工作效率。立即在App Store免费下载。',
    keywords: seoKeywords['zh'],
    ogTitle: 'Appify - 一站式应用平台',
    ogDescription: '发现4款强大的iOS应用，提升您的工作效率',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Appify',
      url: 'https://appify.erp4.cn/zh/',
      description: '一站式应用平台，包含4款强大iOS应用',
    },
  },
  // ... 其他语言
};

export { seoMeta, seoKeywords };

// 生成 hreflang 标签配置
export const hreflangConfig = [
  { lang: 'en', href: 'https://appify.erp4.cn/en/' },
  { lang: 'zh', href: 'https://appify.erp4.cn/zh/' },
  { lang: 'zh-TW', href: 'https://appify.erp4.cn/zh-TW/' },
  { lang: 'ja', href: 'https://appify.erp4.cn/ja/' },
  { lang: 'ko', href: 'https://appify.erp4.cn/ko/' },
  { lang: 'vi', href: 'https://appify.erp4.cn/vi/' },
  { lang: 'id', href: 'https://appify.erp4.cn/id/' },
  { lang: 'ar', href: 'https://appify.erp4.cn/ar/', dir: 'rtl' },
  { lang: 'fr', href: 'https://appify.erp4.cn/fr/' },
  { lang: 'de', href: 'https://appify.erp4.cn/de/' },
  { lang: 'es', href: 'https://appify.erp4.cn/es/' },
  { lang: 'pt', href: 'https://appify.erp4.cn/pt/' },
  { lang: 'it', href: 'https://appify.erp4.cn/it/' },
  { lang: 'ru', href: 'https://appify.erp4.cn/ru/' },
  { lang: 'th', href: 'https://appify.erp4.cn/th/' },
  { lang: 'x-default', href: 'https://appify.erp4.cn/en/' },
];
```

**Note:** 添加完整的 16 种语言 SEO 数据（此处略）

---

## Task 3: App Data

**Files:**
- Create: `src/data/apps.ts`

```typescript
export interface App {
  id: string;
  name: Record<string, string>;
  description: Record<string, string>;
  appStoreUrl: string;
  websiteUrl: string;
  iconPath: string;
}

export const apps: App[] = [
  {
    id: 'work-hours-tracker',
    name: {
      en: 'Work Hours Tracker',
      zh: '工时追踪器',
      'zh-TW': '工時追蹤器',
      ja: '工数トラッカー',
      ko: '근무시간 트래커',
      vi: 'Theo dõi giờ làm',
      id: 'Pelacak Jam Kerja',
      ar: 'تعقب ساعات العمل',
      fr: 'Suivi des heures',
      de: 'Arbeitszeit-Tracker',
      es: 'Rastreador de horas',
      pt: 'Rastreador de horas',
      it: 'Tracciatore ore',
      ru: 'Учёт рабочего времени',
      th: 'ติดตามชั่วโมงทำงาน',
    },
    description: {
      en: 'Track work hours, calculate overtime, 18-country labor law presets, 16 languages',
      zh: '追踪工时、计算加班、18国劳动法预设、支持16种语言',
      'zh-TW': '追蹤工時、計算加班、18國勞動法預設、支援16種語言',
      ja: '労働時間追跡、残業計算、18カ国の労働法プリセット、16言語対応',
      ko: '근무시간 추적, 야근 계산, 18개국 노동법 프리셋, 16개 언어 지원',
      vi: 'Theo dõi giờ làm, tính tăng ca, cài đặt luật lao động 18 quốc gia, 16 ngôn ngữ',
      id: 'Lacak jam kerja, hitung lembur, preset hukum tenaga kerja 18 negara, 16 bahasa',
      ar: 'تتبع ساعات العمل، حساب الوقت الإضافي، إعدادات قانون العمل لـ 18 دولة، 16 لغة',
      fr: 'Suivez les heures de travail, calculez les heures supplémentaires, 18 présélections de lois laborales',
      de: 'Arbeitszeit verfolgen, Überstunden berechnen, Arbeitsgesetz-Voreinstellungen für 18 Länder',
      es: 'Rastrea horas de trabajo, calcula horas extra, ajustes de ley laboral para 18 países',
      pt: 'Acompanhe horas de trabalho, calcule horas extras, predefinições de lei trabalhista para 18 países',
      it: 'Traccia ore di lavoro, calcola straordinari, preset leggi sul lavoro per 18 paesi',
      ru: 'Отслеживайте рабочее время, рассчитывайте переработки, предустановки для 18 стран',
      th: 'ติดตามชั่วโมงทำงาน คำนวณล่วงเวลา การตั้งค่ากฎหมายแรงงาน 18 ประเทศ',
    },
    appStoreUrl: 'https://apps.apple.com/us/app/work-hours-tracker/id6760966627',
    websiteUrl: 'https://worktracker.erp4.cn/',
    iconPath: '/icons/work-hours-tracker.png',
  },
  {
    id: 'image-to-pdf',
    name: {
      en: 'Image to PDF',
      zh: '图片转PDF',
      'zh-TW': '圖片轉PDF',
      ja: '画像からPDF',
      ko: '이미지からPDF',
      vi: 'Hình ảnh sang PDF',
      id: 'Gambar ke PDF',
      ar: 'صورة إلى PDF',
      fr: 'Image en PDF',
      de: 'Bild zu PDF',
      es: 'Imagen a PDF',
      pt: 'Imagem para PDF',
      it: 'Immagine in PDF',
      ru: 'Изображение в PDF',
      th: 'รูปภาพเป็น PDF',
    },
    description: {
      en: 'Convert images to PDF with high quality, batch processing supported',
      zh: '高质量图片转PDF，支持批量处理',
      'zh-TW': '高品質圖片轉PDF，支援批量處理',
      ja: '高品質な画像からPDFへの変換、バッチ処理対応',
      ko: '고품질 이미지 PDF 변환, 일괄 처리 지원',
      vi: 'Chuyển đổi hình ảnh sang PDF chất lượng cao, hỗ trợ xử lý hàng loạt',
      id: 'Konversi gambar ke PDF berkualitas tinggi, mendukung pemrosesan massal',
      ar: 'تحويل الصور إلى PDF بجودة عالية، يدعم المعالجة الدفعية',
      fr: 'Convertissez des images en PDF de haute qualité, traitement par lots pris en charge',
      de: 'Bilder in PDF konvertieren mit hoher Qualität, Stapelverarbeitung unterstützt',
      es: 'Convierta imágenes a PDF de alta calidad, procesamiento por lotes soportado',
      pt: 'Converta imagens para PDF com alta qualidade, processamento em lote suportado',
      it: 'Converti immagini in PDF di alta qualità, elaborazione in batch supportata',
      ru: 'Конвертируйте изображения в PDF высокого качества, поддержка пакетной обработки',
      th: 'แปลงรูปภาพเป็น PDF คุณภาพสูง รองรับการประมวลผลเป็นชุด',
    },
    appStoreUrl: 'https://apps.apple.com/us/app/image-to-pdf-pdf-conveter/id6760633814',
    websiteUrl: 'https://imagepdf.erp4.cn/',
    iconPath: '/icons/image-to-pdf.png',
  },
  {
    id: 'image-converter',
    name: {
      en: 'Image Converter',
      zh: '图片格式转换',
      'zh-TW': '圖片格式轉換',
      ja: '画像フォーマット変換',
      ko: '이미지 포맷 변환',
      vi: 'Chuyển đổi định dạng hình ảnh',
      id: 'Konverter Gambar',
      ar: 'محول الصور',
      fr: 'Convertisseur d\'images',
      de: 'Bildkonverter',
      es: 'Convertidor de imágenes',
      pt: 'Conversor de imagens',
      it: 'Convertitore di immagini',
      ru: 'Конвертер изображений',
      th: 'ตัวแปลงรูปภาพ',
    },
    description: {
      en: 'Convert between PNG, JPG, HEIC, WebP and more formats',
      zh: 'PNG、JPG、HEIC、WebP 等格式互转',
      'zh-TW': 'PNG、JPG、HEIC、WebP 等格式互轉',
      ja: 'PNG、JPG、HEIC、WebPなどの相互変換',
      ko: 'PNG, JPG, HEIC, WebP 등 포맷 상호 변환',
      vi: 'Chuyển đổi giữa PNG, JPG, HEIC, WebP và các định dạng khác',
      id: 'Konversi antara PNG, JPG, HEIC, WebP dan format lainnya',
      ar: 'التحويل بين PNG و JPG و HEIC و WebP والتنسيقات الأخرى',
      fr: 'Convertissez entre PNG, JPG, HEIC, WebP et plus de formats',
      de: 'Konvertieren Sie zwischen PNG, JPG, HEIC, WebP und anderen Formaten',
      es: 'Convierte entre PNG, JPG, HEIC, WebP y más formatos',
      pt: 'Converta entre PNG, JPG, HEIC, WebP e mais formatos',
      it: 'Converti tra PNG, JPG, HEIC, WebP e altri formati',
      ru: 'Конвертируйте между PNG, JPG, HEIC, WebP и другими форматами',
      th: 'แปลงระหว่าง PNG, JPG, HEIC, WebP และรูปแบบอื่นๆ',
    },
    appStoreUrl: 'https://apps.apple.com/us/app/image-converter-photo-pdf/id6760528510',
    websiteUrl: 'https://imageconverter.erp4.cn/',
    iconPath: '/icons/image-converter.png',
  },
  {
    id: 'money-tracker',
    name: {
      en: 'Money Tracker',
      zh: 'Money Tracker',
      'zh-TW': 'Money Tracker',
      ja: 'Money Tracker',
      ko: 'Money Tracker',
      vi: 'Theo dõi chi tiêu',
      id: 'Pelacak Uang',
      ar: 'تعقب الأموال',
      fr: 'Suivi des dépenses',
      de: 'Geld-Tracker',
      es: 'Rastreador de dinero',
      pt: 'Rastreador de dinheiro',
      it: 'Tracciatore di denaro',
      ru: 'Трекер расходов',
      th: 'ติดตามเงิน',
    },
    description: {
      en: 'Beautiful, privacy-first expense and income tracking app',
      zh: '美观且注重隐私的收支追踪应用',
      'zh-TW': '美觀且注重隱私的收支追蹤應用',
      ja: '美しくプライバシー優先の支出・収入追跡アプリ',
      ko: '아름답고 프라이버시 우선의 지출 및 수입 추적 앱',
      vi: 'Ứng dụng theo dõi chi tiêu và thu nhập đẹp, ưu tiên quyền riêng tư',
      id: 'Aplikasi pelacakan pengeluaran dan pendapatan yang indah, prioritas privasi',
      ar: 'تطبيق تعقب النفقات والدخل الجميل والأولوية للخصوصية',
      fr: 'Belle application de suivi des dépenses et des revenus, priorité à la vie privée',
      de: 'Schöne App zur Ausgaben- und Einkommensverfolgung, Datenschutz zuerst',
      es: 'Hermosa aplicación de seguimiento de gastos e ingresos, privacidad primero',
      pt: 'Aplicativo bonito de rastreamento de despesas e receitas, privacidade primeiro',
      it: 'Bell\'app per il monitoraggio di spese e redditi, privacy prima di tutto',
      ru: 'Красивое приложение для отслеживания расходов и доходов, конфиденциальность прежде всего',
      th: 'แอปติดตามรายรับรายจ่ายที่สวยงาม เน้นความเป็นส่วนตัว',
    },
    appStoreUrl: 'https://apps.apple.com/us/app/money-tracker/id1234567890', // Placeholder
    websiteUrl: 'https://moneytrackerx.erp4.cn/',
    iconPath: '/icons/money-tracker.png',
  },
];

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'zh', name: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', name: '繁體中文', flag: '🇹🇼' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭' },
];
```

---

## Task 3: Navigation Component

**Files:**
- Create: `src/components/Nav.tsx`

```tsx
import { useState } from 'react';
import { languages } from '../data/apps';

interface NavProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

export default function Nav({ currentLang, onLangChange }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLangData = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={`/${currentLang}/`} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-white">Appify</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <span>{currentLangData.flag}</span>
            <span className="text-sm">{currentLangData.name}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-card rounded-xl border border-white/10 shadow-lg overflow-hidden">
              {languages.map(lang => (
                <a
                  key={lang.code}
                  href={`/${lang.code}/`}
                  onClick={() => { onLangChange(lang.code); setIsOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                    lang.code === currentLang ? 'bg-primary/20' : ''
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
```

---

## Task 4: Hero Component

**Files:**
- Create: `src/components/Hero.tsx`

```tsx
interface HeroProps {
  lang: string;
}

const heroContent: Record<string, { title: string; subtitle: string }> = {
  en: { title: 'All-in-one App Platform', subtitle: '4 powerful tools to boost your productivity' },
  zh: { title: '一站式应用平台', subtitle: '4款强大工具提升您的工作效率' },
  'zh-TW': { title: '一站式應用平台', subtitle: '4款強大工具提升您的工作效率' },
  ja: { title: 'オールインワンアプリプラットフォーム', subtitle: '生産性を高める4つの強力なツール' },
  ko: { title: '올인원 앱 플랫폼', subtitle: '생산성을 높이는 4가지 강력한 도구' },
  vi: { title: 'Nền tảng ứng dụng tất cả trong một', subtitle: '4 công cụ mạnh mẽ để tăng năng suất của bạn' },
  id: { title: 'Platform Aplikasi All-in-one', subtitle: '4 alat kuat untuk meningkatkan produktivitas Anda' },
  ar: { title: 'منصة التطبيقات الشاملة', subtitle: '4 أدوات قوية لتعزيز إنتاجيتك' },
  fr: { title: 'Plateforme d\'applications tout-en-un', subtitle: '4 outils puissants pour stimuler votre productivité' },
  de: { title: 'All-in-one-App-Plattform', subtitle: '4 leistungsstarke Tools zur Steigerung Ihrer Produktivität' },
  es: { title: 'Plataforma de aplicaciones todo en uno', subtitle: '4 herramientas poderosas para aumentar tu productividad' },
  pt: { title: 'Plataforma de aplicativos tudo em um', subtitle: '4 ferramentas poderosas para impulsionar sua produtividade' },
  it: { title: 'Piattaforma app tutto-in-uno', subtitle: '4 strumenti potenti per aumentare la tua produttività' },
  ru: { title: 'Платформа приложений "все в одном"', subtitle: '4 мощных инструмента для повышения вашей продуктивности' },
  th: { title: 'แพลตฟอร์มแอปแบบครบวงจร', subtitle: '4 เครื่องมือที่ทรงพลังเพื่อเพิ่มประสิทธิภาพของคุณ' },
};

export default function Hero({ lang }: HeroProps) {
  const content = heroContent[lang] || heroContent['en'];

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            {content.title}
          </span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {content.subtitle}
        </p>
      </div>
    </section>
  );
}
```

---

## Task 5: App Card Component

**Files:**
- Create: `src/components/AppCard.tsx`

```tsx
import { App } from '../data/apps';

interface AppCardProps {
  app: App;
  lang: string;
  onClick: () => void;
}

export default function AppCard({ app, lang, onClick }: AppCardProps) {
  const name = app.name[lang] || app.name['en'];
  const description = app.description[lang] || app.description['en'];

  return (
    <button
      onClick={onClick}
      className="group relative bg-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-left w-full"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
          <img
            src={app.iconPath}
            alt={name}
            className="w-12 h-12 object-contain"
            loading="lazy"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-heading font-semibold text-lg text-white mb-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}
```

---

## Task 6: App Modal Component

**Files:**
- Create: `src/components/AppModal.tsx`

```tsx
import { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { App } from '../data/apps';

interface AppModalProps {
  app: App;
  lang: string;
  onClose: () => void;
}

export default function AppModal({ app, lang, onClose }: AppModalProps) {
  const name = app.name[lang] || app.name['en'];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-card rounded-3xl p-8 max-w-sm w-full border border-white/10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 overflow-hidden">
            <img src={app.iconPath} alt={name} className="w-20 h-20 object-contain" />
          </div>

          <h2 className="font-heading font-bold text-2xl text-white mb-2">{name}</h2>

          <div className="bg-white p-4 rounded-2xl my-6">
            <QRCodeSVG
              value={app.appStoreUrl}
              size={180}
              level="M"
              includeMargin
            />
          </div>

          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.27 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>

          <a
            href={app.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            Learn more →
          </a>
        </div>
      </div>
    </div>
  );
}
```

---

## Task 7: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`

```tsx
import { apps } from '../data/apps';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">A</span>
            </div>
            <span className="font-heading font-semibold text-white">Appify</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {apps.map(app => (
              <a
                key={app.id}
                href={app.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                {app.name[lang] || app.name['en']}
              </a>
            ))}
          </div>

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

## Task 8: Main App Component

**Files:**
- Modify: `src/App.tsx`

```tsx
import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import AppCard from './components/AppCard';
import AppModal from './components/AppModal';
import Footer from './components/Footer';
import { apps } from './data/apps';

export default function App() {
  const [currentLang, setCurrentLang] = useState('en');
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);

  return (
    <div className="min-h-screen bg-bg">
      <Nav currentLang={currentLang} onLangChange={setCurrentLang} />

      <main>
        <Hero lang={currentLang} />

        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {apps.map(app => (
              <AppCard
                key={app.id}
                app={app}
                lang={currentLang}
                onClick={() => setSelectedApp(app)}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer lang={currentLang} />

      {selectedApp && (
        <AppModal
          app={selectedApp}
          lang={currentLang}
          onClose={() => setSelectedApp(null)}
        />
      )}
    </div>
  );
}
```

---

## Task 9: SEO and Public Files

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`
- Modify: `index.html` - add hreflang tags, structured data

- [ ] **Step 1: Create robots.txt**

```txt
User-agent: *
Allow: /

Sitemap: https://appify.erp4.cn/sitemap.xml
```

- [ ] **Step 2: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://appify.erp4.cn/en/</loc>
    <lastmod>2026-04-20</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://appify.erp4.cn/zh/</loc>
    <lastmod>2026-04-20</lastmod>
    <priority>0.9</priority>
  </url>
  <!-- Add all 16 languages -->
</urlset>
```

- [ ] **Step 3: Update index.html**

Add JSON-LD structured data, hreflang tags, OG tags

---

## Task 10: App Icons

**Files:**
- Copy from existing projects: `public/icons/`

Need to copy the 4 app icons from existing projects to `public/icons/`

---

## Task 11: Build and Test

- [ ] **Step 1: Run build**

```bash
npm run build
```

- [ ] **Step 2: Test with preview**

```bash
npm run preview
```

- [ ] **Step 3: Verify in browser**

Open http://localhost:4173 and test:
- Language switching works
- App cards clickable
- Modal shows QR code
- Responsive on mobile