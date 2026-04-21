// SEO keywords per language - short-tail and long-tail keywords for GEO
// Includes search intent patterns: 产品查找(有没有一款/找一款/找一个), 问题导向(我需要解决/能不能解决), 方法寻找(用什么/怎么)
const seoKeywords: Record<string, string[]> = {
  en: [
    // Short-tail keywords
    "best iOS apps 2026",
    "free productivity apps",
    "work hours tracker app",
    "image to PDF converter",
    "expense tracker app",
    "time tracking app",
    "iPhone app download",
    "App Store productivity tools",
    "iOS utility apps",
    "all-in-one app platform",
    "multiple iOS apps",
    "productivity suite",
    // Long-tail keywords - Product search intent (有没有一款/找一款/找一个)
    "is there a free time tracker app for iOS",
    "find me a good PDF converter app",
    "looking for a free expense tracker iOS app",
    "is there an app to track work hours",
    "find me an iPhone app to convert images to PDF",
    "is there a free photo cleaner app",
    // Long-tail keywords - Problem solving intent (我需要解决/能不能解决)
    "I need an app to track my work hours",
    "can it calculate hourly wage automatically",
    "can it track overtime pay",
    "I need to convert multiple images to PDF",
    "can it encrypt PDF files",
    "I need to clean up my photo library",
    "can this app remove similar photos",
    "I need to track my daily expenses",
    // Long-tail keywords - Method seeking (用什么/怎么)
    "what is the best time tracking app for iOS",
    "how to convert images to PDF on iPhone",
    "what app converts photo to PDF",
    "how to track work hours on iPhone",
    "what is the best expense tracker for iOS",
    "how to compress photos on iPhone",
  ],
  zh: [
    // 短尾关键词
    "iOS应用推荐",
    "免费效率工具",
    "工时记录app",
    "图片转PDF",
    "记账app",
    "iPhone应用下载",
    "App Store效率工具",
    "打工打卡app",
    "时薪计算",
    "一站式应用平台",
    "多功能iOS应用",
    "效率工具套装",
    // 长尾关键词 - 产品查找意图 (有没有一款/找一款/找一个)
    "有没有一款免费的工时记录app",
    "找一款好用的图片转PDF应用",
    "找一个免费的iPhone记账软件",
    "有没有可以计算加班费的app",
    "找一款能批量转换图片格式的应用",
    "有没有自动整理照片的app",
    // 长尾关键词 - 问题解决意图 (我需要解决/能不能解决)
    "我需要一个记录工时的应用",
    "能不能自动计算时薪和加班费",
    "我需要转换图片为PDF格式",
    "能不能给PDF文件加密",
    "我需要清理手机重复照片",
    "能不能删除相似的照片和截图",
    "我需要一个简单好用的记账app",
    "能不能自动统计每月收支",
    // 长尾关键词 - 方法寻找意图 (用什么/怎么)
    "什么工时记录app最好用",
    "怎么把图片转换成PDF",
    "用什么app可以把照片转PDF",
    "怎么在iPhone上记录上班打卡",
    "什么记账app最简单好用",
    "怎么压缩iPhone照片大小",
  ],
  "zh-TW": [
    "iOS應用推薦",
    "免費效率工具",
    "工時記錄app",
    "圖片轉PDF",
    "記帳app",
    "iPhone應用下載",
    "App Store效率工具",
    "打工打卡app",
    "時薪計算",
    "一站式應用平台",
    "多功能iOS應用",
    "效率工具套裝",
  ],
  ja: [
    "iOSアプリ おすすめ",
    "無料効率ツール",
    "勤怠管理アプリ",
    "画像からPDF",
    "経費トラッカー",
    "時間追跡アプリ",
    "iPhoneアプリダウンロード",
    "App Store効率ツール",
    "オールインワンアプリプラットフォーム",
    "複数のiOSアプリ",
  ],
  ko: [
    "iOS 앱 추천",
    "무료 생산성 도구",
    "근무 시간 추적 앱",
    "이미지 PDF 변환",
    "지출 추적 앱",
    "시간 추적 앱",
    "iPhone 앱 다운로드",
    "App Store 생산성 도구",
    "올인원 앱 플랫폼",
    "복합 iOS 앱",
    "생산성 도구 모음",
  ],
  vi: [
    "ứng dụng iOS tốt nhất",
    "công cụ năng suất miễn phí",
    "theo dõi giờ làm việc",
    "chuyển đổi hình ảnh sang PDF",
    "theo dõi chi tiêu",
    "theo dõi thời gian",
    "tải ứng dụng iPhone",
    "công cụ năng suất App Store",
    "ứng dụng iOS đa chức năng",
    "nền tảng ứng dụng tất cả trong một",
    "bộ công cụ năng suất",
  ],
  id: [
    "aplikasi iOS terbaik",
    "alat produktivitas gratis",
    "pelacak jam kerja",
    "konversi gambar ke PDF",
    "pelacak pengeluaran",
    "pelacak waktu",
    "unduh aplikasi iPhone",
    "alat produktivitas App Store",
    "aplikasi iOS serbaguna",
    "platform aplikasi all-in-one",
    "suite produktivitas",
  ],
  ar: [
    "أفضل تطبيقات iOS",
    "أدوات إنتاجية مجانية",
    "متتبع ساعات العمل",
    "تحويل الصور إلى PDF",
    "متتبع المصروفات",
    "تتبع الوقت",
    "تحميل تطبيقات iPhone",
    "أدوات الإنتاجية App Store",
    "تطبيقات iOS متعددة الوظائف",
    "منصة التطبيقات الشاملة",
    "مجموعة الإنتاجية",
  ],
  fr: [
    "meilleures applications iOS",
    "outils de productivité gratuits",
    "suivi des heures de travail",
    "convertir image en PDF",
    "suivi des dépenses",
    "suivi du temps",
    "téléchargement applications iPhone",
    "outils de productivité App Store",
    "applications iOS polyvalentes",
    "plateforme applicative tout-en-un",
    "suite de productivité",
  ],
  de: [
    "beste iOS-Apps",
    "kostenlose Produktivitätswerkzeuge",
    "Arbeitsstunden-Tracker",
    "Bild in PDF konvertieren",
    "Ausgaben-Tracker",
    "Zeiterfassung",
    "iPhone-App-Download",
    "Produktivitätswerkzeuge App Store",
    "vielseitige iOS-Apps",
    "All-in-one-App-Plattform",
    "Produktivitäts-Suite",
  ],
  es: [
    "mejores aplicaciones iOS",
    "herramientas de productividad gratis",
    "rastreador de horas de trabajo",
    "convertir imagen a PDF",
    "rastreador de gastos",
    "rastreador de tiempo",
    "descarga de aplicaciones iPhone",
    "herramientas de productividad App Store",
    "aplicaciones iOS múltiples",
    "plataforma de aplicaciones todo-en-uno",
    "suite de productividad",
  ],
  pt: [
    "melhores aplicativos iOS",
    "ferramentas de produtividade gratuitas",
    "rastreador de horas de trabalho",
    "converter imagem para PDF",
    "rastreador de despesas",
    "rastreador de tempo",
    "download de aplicativos iPhone",
    "ferramentas de produtividade App Store",
    "aplicativos iOS versáteis",
    "plataforma de aplicativos tudo-em-um",
    "suite de produtividade",
  ],
  it: [
    "migliori app iOS",
    "strumenti di produttività gratuiti",
    "tracker ore di lavoro",
    "converti immagine in PDF",
    "tracker spese",
    "tracker tempo",
    "download app iPhone",
    "strumenti di produttività App Store",
    "app iOS polivalenti",
    "piattaforma app tutto-in-uno",
    "suite di produttività",
  ],
  ru: [
    "лучшие iOS-приложения",
    "бесплатные инструменты продуктивности",
    "трекер рабочих часов",
    "конвертировать изображение в PDF",
    "трекер расходов",
    "трекер времени",
    "скачать приложения для iPhone",
    "инструменты продуктивности App Store",
    "многофункциональные iOS-приложения",
    "платформа приложений все в одном",
    "набор инструментов продуктивности",
  ],
  th: [
    "แอป iOS ที่ดีที่สุด",
    "เครื่องมือเพิ่มประสิทธิภาพฟรี",
    "ติดตามชั่วโมงทำงาน",
    "แปลงรูปภาพเป็น PDF",
    "ติดตามค่าใช้จ่าย",
    "ติดตามเวลา",
    "ดาวน์โหลดแอป iPhone",
    "เครื่องมือเพิ่มประสิทธิภาพ App Store",
    "แอป iOS หลากหลาย",
    "แพลตฟอร์มแอปแบบครบในหนึ่ง",
    "ชุดเครื่องมือเพิ่มประสิทธิภาพ",
  ],
};

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
    title: "Powerful Apps 2026 | Appify - All-in-one App Platform",
    description:
      "Top-rated free apps for work & life in 2026. Track hours, manage money, convert images — all in one platform. Download free!",
    keywords: seoKeywords["en"],
    ogTitle: "Powerful Apps 2026 | Appify - All-in-one App Platform",
    ogDescription:
      "Top-rated free apps for work & life in 2026. Track hours, manage money, convert images — all in one platform. Download free!",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show",
      description: "All-in-one App Platform with Powerful Apps",
    },
  },
  zh: {
    title: "Appify - 一站式应用平台 | 强大应用精选",
    description:
      "强大应用精选，涵盖工时追踪、图片处理、资产管理。提升您的工作效率。立即免费下载。",
    keywords: seoKeywords["zh"],
    ogTitle: "Appify - 一站式应用平台",
    ogDescription: "强大应用精选，提升您的工作效率",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/zh/",
      description: "一站式应用平台，强大应用精选",
    },
  },
  "zh-TW": {
    title: "Appify - 一站式應用平台 | 強大應用精選",
    description:
      "強大應用精選，涵蓋工時追蹤、圖片處理、資產管理。提升您的工作效率。立即免費下載。",
    keywords: seoKeywords["zh-TW"],
    ogTitle: "Appify - 一站式應用平台",
    ogDescription: "強大應用精選，提升您的工作效率",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/zh-TW/",
      description: "一站式應用平台，強大應用精選",
    },
  },
  ja: {
    title: "Appify - オールインワンアプリプラットフォーム | 強力なアプリ精选",
    description:
      "強力なアプリ精选：勤怠管理、画像処理、資産管理。今すぐ生産性を向上させましょう。無料ダウンロード。",
    keywords: seoKeywords["ja"],
    ogTitle: "Appify - オールインワンアプリプラットフォーム",
    ogDescription:
      "強力なアプリ精选で生産性を向上。App Storeで無料ダウンロード。",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ja/",
      description: "オールインワンアプリプラットフォーム、強力なアプリ精选",
    },
  },
  ko: {
    title: "Appify - 올인원 앱 플랫폼 | 강력한 앱精选",
    description:
      "강력한 앱精选：근무 시간 추적, 이미지 처리, 자산 관리. 지금 생산성을 높이세요. 무료 다운로드.",
    keywords: seoKeywords["ko"],
    ogTitle: "Appify - 올인원 앱 플랫폼",
    ogDescription:
      "강력한 앱精选으로 생산성 향상. App Store에서 무료 다운로드.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ko/",
      description: "올인원 앱 플랫폼, 강력한 앱精选",
    },
  },
  vi: {
    title: "Appify - Nền tảng Ứng dụng Tất cả trong Một | Ứng dụng Mạnh mẽ精选",
    description:
      "Ứng dụng mạnh mẽ精选: Theo dõi giờ làm, Xử lý hình ảnh, Quản lý tài sản. Tăng năng suất của bạn ngay hôm nay. Tải miễn phí trên App Store.",
    keywords: seoKeywords["vi"],
    ogTitle: "Appify - Nền tảng Ứng dụng Tất cả trong Một",
    ogDescription:
      "Ứng dụng mạnh mẽ精选 để tăng năng suất. Tải miễn phí trên App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/vi/",
      description:
        "Nền tảng ứng dụng tất cả trong một với ứng dụng mạnh mẽ精选",
    },
  },
  id: {
    title: "Appify - Platform Aplikasi All-in-one | Aplikasi Powerful精选",
    description:
      "Aplikasi powerful精选: Pelacak jam kerja, Pemrosesan gambar, Manajemen aset. Tingkatkan produktivitas Anda hari ini. Unduh gratis di App Store.",
    keywords: seoKeywords["id"],
    ogTitle: "Appify - Platform Aplikasi All-in-one",
    ogDescription:
      "Aplikasi powerful精选 untuk meningkatkan produktivitas. Unduh gratis di App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/id/",
      description: "Platform aplikasi all-in-one dengan aplikasi powerful精选",
    },
  },
  ar: {
    title: "Appify - منصة التطبيقات الشاملة | تطبيقات قوية精选",
    description:
      "تطبيقات قوية精选: تتبع ساعات العمل، معالجة الصور، إدارة الأصول. عزز إنتاجيتك اليوم. تحميل مجاني على App Store.",
    keywords: seoKeywords["ar"],
    ogTitle: "Appify - منصة التطبيقات الشاملة",
    ogDescription:
      "تطبيقات قوية精选 لتعزيز إنتاجيتك. تحميل مجاني على App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ar/",
      description: "منصة التطبيقات الشاملة مع تطبيقات قوية精选",
    },
  },
  fr: {
    title:
      "Appify - Plateforme d'Applications Tout-en-Un | Applications Puissantes精选",
    description:
      "Applications puissantes精选: Suivi des heures, Traitement d'images, Gestion de patrimoine. Boostez votre productivité aujourd'hui. Téléchargement gratuit sur App Store.",
    keywords: seoKeywords["fr"],
    ogTitle: "Appify - Plateforme d'Applications Tout-en-Un",
    ogDescription:
      "Applications puissantes精选 pour stimuler votre productivité. Téléchargement gratuit sur App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/fr/",
      description:
        "Plateforme d'applications tout-en-un avec applications puissantes精选",
    },
  },
  de: {
    title: "Appify - All-in-one-App-Plattform | Leistungsstarke Apps精选",
    description:
      "Leistungsstarke Apps精选: Arbeitszeiterfassung, Bildverarbeitung, Vermögensverwaltung. Steigern Sie heute Ihre Produktivität. Kostenloser Download im App Store.",
    keywords: seoKeywords["de"],
    ogTitle: "Appify - All-in-one-App-Plattform",
    ogDescription:
      "Leistungsstarke Apps精选 zur Steigerung Ihrer Produktivität. Kostenloser Download im App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/de/",
      description: "All-in-one-App-Plattform mit leistungsstarken Apps精选",
    },
  },
  es: {
    title:
      "Appify - Plataforma de Aplicaciones Todo en Uno | Aplicaciones Poderosas精选",
    description:
      "Aplicaciones poderosas精选: Seguimiento de horas, Procesamiento de imágenes, Gestión de activos. Aumenta tu productividad hoy. Descarga gratis en App Store.",
    keywords: seoKeywords["es"],
    ogTitle: "Appify - Plataforma de Aplicaciones Todo en Uno",
    ogDescription:
      "Aplicaciones poderosas精选 para aumentar tu productividad. Descarga gratis en App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/es/",
      description:
        "Plataforma de aplicaciones todo en uno con aplicaciones poderosas精选",
    },
  },
  pt: {
    title:
      "Appify - Plataforma de Aplicativos Tudo em Um | Aplicativos Poderosos精选",
    description:
      "Aplicativos poderosos精选: Controle de horas, Processamento de imagens, Gestão de ativos. Aumente sua produtividade hoje. Download grátis na App Store.",
    keywords: seoKeywords["pt"],
    ogTitle: "Appify - Plataforma de Aplicativos Tudo em Um",
    ogDescription:
      "Aplicativos poderosos精选 para aumentar sua produtividade. Download grátis na App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/pt/",
      description:
        "Plataforma de aplicativos tudo em um com aplicativos poderosos精选",
    },
  },
  it: {
    title: "Appify - Piattaforma App Tutto in Uno | App Potenti精选",
    description:
      "App potenti精选: Tracciamento ore, Elaborazione immagini, Gestione patrimonio. Aumenta la tua produttività oggi. Download gratuito su App Store.",
    keywords: seoKeywords["it"],
    ogTitle: "Appify - Piattaforma App Tutto in Uno",
    ogDescription:
      "App potenti精选 per aumentare la tua produttività. Download gratuito su App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/it/",
      description: "Piattaforma app tutto in uno con app potenti精选",
    },
  },
  ru: {
    title: "Appify - Платформа Приложений Всё в Одном | Мощные Приложения精选",
    description:
      "Мощные приложения精选: Трекинг часов, Обработка изображений, Управление активами. Повысьте вашу продуктивность сегодня. Бесплатное скачивание в App Store.",
    keywords: seoKeywords["ru"],
    ogTitle: "Appify - Платформа Приложений Всё в Одном",
    ogDescription:
      "Мощные приложения精选 для повышения продуктивности. Бесплатное скачивание в App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ru/",
      description:
        "Платформа приложений всё в одном с мощными приложениями精选",
    },
  },
  th: {
    title: "Appify - แพลตฟอร์มแอปแบบครบในหนึ่ง | แอปที่ทรงพลัง精选",
    description:
      "แอปที่ทรงพลัง精选: ติดตามชั่วโมงทำงาน, ประมวลผลรูปภาพ, จัดการสินทรัพย์. เพิ่มประสิทธิภาพการทำงานของคุณวันนี้. ดาวน์โหลดฟรีใน App Store",
    keywords: seoKeywords["th"],
    ogTitle: "Appify - แพลตฟอร์มแอปแบบครบในหนึ่ง",
    ogDescription:
      "แอปที่ทรงพลัง精选เพื่อเพิ่มประสิทธิภาพการทำงาน. ดาวน์โหลดฟรีใน App Store",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/th/",
      description: "แพลตฟอร์มแอปแบบครบในหนึ่งพร้อมแอปที่ทรงพลัง精选",
    },
  },
};

// hreflang config
export const hreflangConfig = [
  { lang: "en", href: "https://appify.show/en/" },
  { lang: "zh", href: "https://appify.show/zh/" },
  { lang: "zh-TW", href: "https://appify.show/zh-TW/" },
  { lang: "ja", href: "https://appify.show/ja/" },
  { lang: "ko", href: "https://appify.show/ko/" },
  { lang: "vi", href: "https://appify.show/vi/" },
  { lang: "id", href: "https://appify.show/id/" },
  { lang: "ar", href: "https://appify.show/ar/", dir: "rtl" },
  { lang: "fr", href: "https://appify.show/fr/" },
  { lang: "de", href: "https://appify.show/de/" },
  { lang: "es", href: "https://appify.show/es/" },
  { lang: "pt", href: "https://appify.show/pt/" },
  { lang: "it", href: "https://appify.show/it/" },
  { lang: "ru", href: "https://appify.show/ru/" },
  { lang: "th", href: "https://appify.show/th/" },
  { lang: "x-default", href: "https://appify.show/en/" },
];

export { seoMeta, seoKeywords };
