interface HeroProps {
  lang: string;
}

const heroContent: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: "All-in-one App Platform",
    subtitle: "Powerful Apps to boost your productivity",
  },
  zh: { title: "一站式应用平台", subtitle: "强大应用精选，提升您的工作效率" },
  "zh-TW": {
    title: "一站式應用平台",
    subtitle: "強大應用精選，提升您的工作效率",
  },
  ja: {
    title: "オールインワンアプリプラットフォーム",
    subtitle: "強力なアプリで見つけた生産性向上",
  },
  ko: {
    title: "올인원 앱 플랫폼",
    subtitle: "생산성을 높이는 강력한 앱",
  },
  vi: {
    title: "Nền tảng ứng dụng tất cả trong một",
    subtitle: "Ứng dụng mạnh mẽ để tăng năng suất của bạn",
  },
  id: {
    title: "Platform Aplikasi All-in-one",
    subtitle: "Aplikasi powerful untuk meningkatkan produktivitas Anda",
  },
  ar: {
    title: "منصة التطبيقات الشاملة",
    subtitle: "تطبيقات قوية لتعزيز إنتاجيتك",
  },
  fr: {
    title: "Plateforme d'applications tout-en-un",
    subtitle: "Applications puissantes pour stimuler votre productivité",
  },
  de: {
    title: "All-in-one-App-Plattform",
    subtitle: "Leistungsstarke Apps zur Steigerung Ihrer Produktivität",
  },
  es: {
    title: "Plataforma de aplicaciones todo en uno",
    subtitle: "Aplicaciones poderosas para aumentar tu productividad",
  },
  pt: {
    title: "Plataforma de aplicativos tudo em um",
    subtitle: "Aplicativos poderosos para impulsionar sua produtividade",
  },
  it: {
    title: "Piattaforma app tutto-in-uno",
    subtitle: "App potenti per aumentare la tua produttività",
  },
  ru: {
    title: 'Платформа приложений "все в одном"',
    subtitle: "Мощные приложения для повышения вашей продуктивности",
  },
  th: {
    title: "แพลตฟอร์มแอปแบบครบวงจร",
    subtitle: "แอปที่ทรงพลังเพื่อเพิ่มประสิทธิภาพของคุณ",
  },
};

export default function Hero({ lang }: HeroProps) {
  const content = heroContent[lang] || heroContent["en"];

  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-teal-400 to-accent bg-clip-text text-transparent">
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
