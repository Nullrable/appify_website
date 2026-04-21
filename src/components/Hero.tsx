interface HeroProps {
  lang: string;
}

const heroContent: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: "All-in-one App Platform",
    subtitle: "5 powerful tools to boost your productivity",
  },
  zh: { title: "一站式应用平台", subtitle: "5款强大工具提升您的工作效率" },
  "zh-TW": { title: "一站式應用平台", subtitle: "5款強大工具提升您的工作效率" },
  ja: {
    title: "オールインワンアプリプラットフォーム",
    subtitle: "生産性を高める5つの強力なツール",
  },
  ko: {
    title: "올인원 앱 플랫폼",
    subtitle: "생산성을 높이는 5가지 강력한 도구",
  },
  vi: {
    title: "Nền tảng ứng dụng tất cả trong một",
    subtitle: "5 công cụ mạnh mẽ để tăng năng suất của bạn",
  },
  id: {
    title: "Platform Aplikasi All-in-one",
    subtitle: "5 alat kuat untuk meningkatkan produktivitas Anda",
  },
  ar: {
    title: "منصة التطبيقات الشاملة",
    subtitle: "5 أدوات قوية لتعزيز إنتاجيتك",
  },
  fr: {
    title: "Plateforme d'applications tout-en-un",
    subtitle: "5 outils puissants pour stimuler votre productivité",
  },
  de: {
    title: "All-in-one-App-Plattform",
    subtitle: "5 leistungsstarke Tools zur Steigerung Ihrer Produktivität",
  },
  es: {
    title: "Plataforma de aplicaciones todo en uno",
    subtitle: "5 herramientas poderosas para aumentar tu productividad",
  },
  pt: {
    title: "Plataforma de aplicativos tudo em um",
    subtitle: "5 ferramentas poderosas para impulsionar sua produtividade",
  },
  it: {
    title: "Piattaforma app tutto-in-uno",
    subtitle: "5 strumenti potenti per aumentare la tua produttività",
  },
  ru: {
    title: 'Платформа приложений "все в одном"',
    subtitle: "5 мощных инструмента для повышения вашей продуктивности",
  },
  th: {
    title: "แพลตฟอร์มแอปแบบครบวงจร",
    subtitle: "5 เครื่องมือที่ทรงพลังเพื่อเพิ่มประสิทธิภาพของคุณ",
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
