interface AppScreenshotsProps {
  screenshots: string[];
  lang?: string;
}

const sectionTitles: Record<string, string> = {
  en: 'Screenshots',
  zh: '截图',
  'zh-TW': '截圖',
  ja: 'スクリーンショット',
  ko: '스크린샷',
  vi: 'Ảnh chụp màn hình',
  id: 'Tangkapan layar',
  ar: 'لقطات الشاشة',
  fr: 'Captures d\'écran',
  de: 'Screenshots',
  es: 'Capturas de pantalla',
  pt: 'Capturas de tela',
  it: 'Screenshot',
  ru: 'Скриншоты',
  th: 'ภาพหน้าจอ',
};

export default function AppScreenshots({ screenshots, lang = 'en' }: AppScreenshotsProps) {
  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  const title = sectionTitles[lang] || sectionTitles['en'];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-3xl text-white text-center mb-12">
          {title}
        </h2>

        <div className="overflow-x-auto pb-4 -mx-6 px-6">
          <div className="flex gap-6 snap-x snap-mandatory">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <div className="bg-card rounded-2xl p-3 border border-white/5">
                  <div className="relative aspect-[9/19.5] bg-bg rounded-xl overflow-hidden">
                    <img
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
