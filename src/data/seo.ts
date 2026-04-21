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
    title: "5 Powerful iOS Apps 2026 | Appify - All-in-one App Platform",
    description:
      "5 top-rated free iOS apps for work & life in 2026. Track hours, manage money, convert images — all in one platform. Download free!",
    keywords: seoKeywords["en"],
    ogTitle: "5 Powerful iOS Apps 2026 | Appify - All-in-one App Platform",
    ogDescription:
      "5 top-rated free iOS apps for work & life in 2026. Track hours, manage money, convert images — all in one platform. Download free!",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show",
      description: "All-in-one App Platform with 5 powerful iOS apps",
    },
  },
  zh: {
    title: "Appify - 一站式应用平台 | 5款强大iOS应用",
    description:
      "发现5款强大的iOS应用：工时追踪器、图片转PDF、图片格式转换、Money Tracker、CleanPhoto。提升您的工作效率。立即在App Store免费下载。",
    keywords: seoKeywords["zh"],
    ogTitle: "Appify - 一站式应用平台",
    ogDescription: "发现5款强大的iOS应用，提升您的工作效率",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/zh/",
      description: "一站式应用平台，包含5款强大iOS应用",
    },
  },
  "zh-TW": {
    title: "Appify - 一站式應用平台 | 5款強大iOS應用",
    description:
      "發現5款強大的iOS應用：工時追蹤器、圖片轉PDF、圖片格式轉換、Money Tracker、CleanPhoto。提升您的工作效率。立即在App Store免費下載。",
    keywords: seoKeywords["zh-TW"],
    ogTitle: "Appify - 一站式應用平台",
    ogDescription: "發現5款強大的iOS應用，提升您的工作效率",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/zh-TW/",
      description: "一站式應用平台，包含5款強大iOS應用",
    },
  },
  ja: {
    title:
      "Appify - オールインワンアプリプラットフォーム | 5つの強力なiOSアプリ",
    description:
      "5つの強力なiOSアプリを発見：勤怠管理、画像PDF変換、画像フォーマット変換、Money Tracker、CleanPhoto。今すぐ生産性を向上させましょう。App Storeで無料ダウンロード。",
    keywords: seoKeywords["ja"],
    ogTitle: "Appify - オールインワンアプリプラットフォーム",
    ogDescription:
      "生産性を上げる5つの強力なiOSアプリを発見。App Storeで無料ダウンロード。",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ja/",
      description:
        "5つの強力なiOSアプリを含むオールインワンアプリプラットフォーム",
    },
  },
  ko: {
    title: "Appify - 올인원 앱 플랫폼 | 5개의 강력한 iOS 앱",
    description:
      "5개의 강력한 iOS 앱을 발견하세요: 근무 시간 추적기, 이미지 PDF 변환, 이미지 형식 변환, Money Tracker, CleanPhoto. 지금 생산성을 높이세요. App Store에서 무료 다운로드.",
    keywords: seoKeywords["ko"],
    ogTitle: "Appify - 올인원 앱 플랫폼",
    ogDescription:
      "생산성을 높이는 5개의 강력한 iOS 앱을 발견하세요. App Store에서 무료 다운로드.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ko/",
      description: "5개의 강력한 iOS 앱이 포함된 올인원 앱 플랫폼",
    },
  },
  vi: {
    title:
      "Appify - Nền tảng Ứng dụng Tất cả trong Một | 5 Ứng dụng iOS Mạnh mẽ",
    description:
      "Khám phá 5 ứng dụng iOS mạnh mẽ: Theo dõi Giờ làm việc, Chuyển đổi Hình ảnh sang PDF, Chuyển đổi Định dạng Hình ảnh, Money Tracker, CleanPhoto. Tăng năng suất của bạn ngay hôm nay. Tải miễn phí trên App Store.",
    keywords: seoKeywords["vi"],
    ogTitle: "Appify - Nền tảng Ứng dụng Tất cả trong Một",
    ogDescription:
      "Khám phá 5 ứng dụng iOS mạnh mẽ để tăng năng suất. Tải miễn phí trên App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/vi/",
      description:
        "Nền tảng ứng dụng tất cả trong một với 5 ứng dụng iOS mạnh mẽ",
    },
  },
  id: {
    title: "Appify - Platform Aplikasi All-in-one | 5 Aplikasi iOS Powerful",
    description:
      "Temukan 5 aplikasi iOS powerful: Pelacak Jam Kerja, Konversi Gambar ke PDF, Konverter Format Gambar, Money Tracker, CleanPhoto. Tingkatkan produktivitas Anda hari ini. Unduh gratis di App Store.",
    keywords: seoKeywords["id"],
    ogTitle: "Appify - Platform Aplikasi All-in-one",
    ogDescription:
      "Temukan 5 aplikasi iOS powerful untuk meningkatkan produktivitas. Unduh gratis di App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/id/",
      description:
        "Platform aplikasi all-in-one dengan 5 aplikasi iOS powerful",
    },
  },
  ar: {
    title: "Appify - منصة التطبيقات الشاملة | 5 تطبيقات iOS قوية",
    description:
      "اكتشف 5 تطبيقات iOS قوية: متتبع ساعات العمل، تحويل الصور إلى PDF، محول تنسيق الصور، Money Tracker، CleanPhoto. عزز إنتاجيتك اليوم. تحميل مجاني على App Store.",
    keywords: seoKeywords["ar"],
    ogTitle: "Appify - منصة التطبيقات الشاملة",
    ogDescription:
      "اكتشف 5 تطبيقات iOS قوية لتعزيز إنتاجيتك. تحميل مجاني على App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ar/",
      description: "منصة التطبيقات الشاملة مع 5 تطبيقات iOS قوية",
    },
  },
  fr: {
    title:
      "Appify - Plateforme d'Applications Tout-en-Un | 5 Applications iOS Puissantes",
    description:
      "Découvrez 5 applications iOS puissantes: Suivi des Heures de Travail, Conversion d'Image en PDF, Convertisseur de Format d'Image, Money Tracker, CleanPhoto. Boostez votre productivité aujourd'hui. Téléchargement gratuit sur App Store.",
    keywords: seoKeywords["fr"],
    ogTitle: "Appify - Plateforme d'Applications Tout-en-Un",
    ogDescription:
      "Découvrez 5 applications iOS puissantes pour stimuler votre productivité. Téléchargement gratuit sur App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/fr/",
      description:
        "Plateforme d'applications tout-en-un avec 5 applications iOS puissantes",
    },
  },
  de: {
    title: "Appify - All-in-one-App-Plattform | 5 Leistungsstarke iOS-Apps",
    description:
      "Entdecken Sie 5 leistungsstarke iOS-Apps: Arbeitsstunden-Tracker, Bild-zu-PDF-Konverter, Bildformat-Konverter, Money Tracker, CleanPhoto. Steigern Sie heute Ihre Produktivität. Kostenloser Download im App Store.",
    keywords: seoKeywords["de"],
    ogTitle: "Appify - All-in-one-App-Plattform",
    ogDescription:
      "Entdecken Sie 5 leistungsstarke iOS-Apps zur Steigerung Ihrer Produktivität. Kostenloser Download im App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/de/",
      description: "All-in-one-App-Plattform mit 5 leistungsstarken iOS-Apps",
    },
  },
  es: {
    title:
      "Appify - Plataforma de Aplicaciones Todo en Uno | 5 Aplicaciones iOS Potentes",
    description:
      "Descubre 5 aplicaciones iOS potentes: Rastreador de Horas de Trabajo, Convertidor de Imagen a PDF, Convertidor de Formato de Imagen, Money Tracker, CleanPhoto. Aumenta tu productividad hoy. Descarga gratis en App Store.",
    keywords: seoKeywords["es"],
    ogTitle: "Appify - Plataforma de Aplicaciones Todo en Uno",
    ogDescription:
      "Descubre 5 aplicaciones iOS potentes para aumentar tu productividad. Descarga gratis en App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/es/",
      description:
        "Plataforma de aplicaciones todo en uno con 5 aplicaciones iOS potentes",
    },
  },
  pt: {
    title:
      "Appify - Plataforma de Aplicativos Tudo em Um | 5 Aplicativos iOS Poderosos",
    description:
      "Descubra 5 aplicativos iOS poderosos: Rastreador de Horas de Trabalho, Conversor de Imagem para PDF, Conversor de Formato de Imagem, Money Tracker, CleanPhoto. Aumente sua produtividade hoje. Download grátis na App Store.",
    keywords: seoKeywords["pt"],
    ogTitle: "Appify - Plataforma de Aplicativos Tudo em Um",
    ogDescription:
      "Descubra 5 aplicativos iOS poderosos para aumentar sua produtividade. Download grátis na App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/pt/",
      description:
        "Plataforma de aplicativos tudo em um com 5 aplicativos iOS poderosos",
    },
  },
  it: {
    title: "Appify - Piattaforma App Tutto in Uno | 5 App iOS Potenti",
    description:
      "Scopri 5 app iOS potenti: Tracker Ore di Lavoro, Convertitore da Immagine a PDF, Convertitore di Formato Immagine, Money Tracker, CleanPhoto. Aumenta la tua produttività oggi. Download gratuito su App Store.",
    keywords: seoKeywords["it"],
    ogTitle: "Appify - Piattaforma App Tutto in Uno",
    ogDescription:
      "Scopri 5 app iOS potenti per aumentare la tua produttività. Download gratuito su App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/it/",
      description: "Piattaforma app tutto in uno con 5 app iOS potenti",
    },
  },
  ru: {
    title:
      "Appify - Платформа Приложений Всё в Одном | 5 Мощных iOS-Приложения",
    description:
      "Откройте 5 мощных iOS-приложений: Трекер Рабочих Часов, Конвертер Изображений в PDF, Конвертер Форматов Изображений, Money Tracker, CleanPhoto. Повысьте вашу продуктивность сегодня. Бесплатное скачивание в App Store.",
    keywords: seoKeywords["ru"],
    ogTitle: "Appify - Платформа Приложений Всё в Одном",
    ogDescription:
      "Откройте 5 мощных iOS-приложений для повышения продуктивности. Бесплатное скачивание в App Store.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/ru/",
      description:
        "Платформа приложений всё в одном с 5 мощными iOS-приложениями",
    },
  },
  th: {
    title: "Appify - แพลตฟอร์มแอปแบบครบในหนึ่ง | 5 แอป iOS ที่ทรงพลัง",
    description:
      "ค้นพบ 5 แอป iOS ที่ทรงพลัง: ติดตามชั่วโมงทำงาน, แปลงรูปภาพเป็น PDF, แปลงรูปแบบรูปภาพ, Money Tracker, CleanPhoto. เพิ่มประสิทธิภาพการทำงานของคุณวันนี้. ดาวน์โหลดฟรีใน App Store",
    keywords: seoKeywords["th"],
    ogTitle: "Appify - แพลตฟอร์มแอปแบบครบในหนึ่ง",
    ogDescription:
      "ค้นพบ 5 แอป iOS ที่ทรงพลังเพื่อเพิ่มประสิทธิภาพการทำงาน. ดาวน์โหลดฟรีใน App Store",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Appify",
      url: "https://appify.show/th/",
      description: "แพลตฟอร์มแอปแบบครบในหนึ่งพร้อม 5 แอป iOS ที่ทรงพลัง",
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
