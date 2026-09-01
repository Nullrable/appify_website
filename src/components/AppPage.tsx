import type { App } from "../data/apps";
import AppHero from "./AppHero";
import AppFeatures from "./AppFeatures";
import AppScreenshots from "./AppScreenshots";
import AppFAQ from "./AppFAQ";
import AppLearnMore from "./AppLearnMore";
import AppDownload from "./AppDownload";
import Footer from "./Footer";

interface AppPageProps {
  app: App;
  pageData: {
    features: import("../data/appPages/types").Feature[];
    screenshots: string[];
    faqs: import("../data/appPages/types").FAQ[];
    stats: {
      rating: number;
      ratingCount: string;
      downloads: string;
    };
  };
  lang: string;
}

export default function AppPage({ app, pageData, lang }: AppPageProps) {
  const getLocalizedText = (
    record: Record<string, string>,
    fallback = "en",
  ) => {
    return record[lang] || record[fallback] || "";
  };

  const firstFeature = pageData.features[0];
  const tagline = firstFeature
    ? getLocalizedText(firstFeature.description)
    : "";

  return (
    <div className="min-h-screen bg-bg">
      <AppHero app={app} lang={lang} tagline={tagline} />
      <AppFeatures features={pageData.features} lang={lang} />
      <AppScreenshots screenshots={pageData.screenshots} lang={lang} />
      <AppFAQ faqs={pageData.faqs} lang={lang} />
      <AppLearnMore app={app} lang={lang} />
      <AppDownload app={app} lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
