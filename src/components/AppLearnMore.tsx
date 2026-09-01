import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import { getSectionLabels, SECTION_IDS } from '../data/sectionLabels';
import AppModal from './AppModal';

interface AppLearnMoreProps {
  app: App;
  lang: string;
}

const sectionIcons: Record<string, string> = {
  about:
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  blog: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
  terms:
    'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  privacy:
    'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
};

const qrIcon =
  'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z';

export default function AppLearnMore({ app, lang }: AppLearnMoreProps) {
  const [showQR, setShowQR] = useState(false);
  const t = getSectionLabels(lang);

  const cardClass =
    'group flex items-start gap-4 p-5 bg-card rounded-2xl border border-white/10 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300 text-left w-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

  return (
    <>
      <section className="px-6 py-16 md:py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-white mb-3">
              {t.learnMoreTitle}
            </h2>
            <p className="text-gray-400">{t.learnMoreDesc}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => setShowQR(true)} className={cardClass}>
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={qrIcon}
                  />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block font-heading font-semibold text-white group-hover:text-primary transition-colors">
                  {t.downloadQR}
                </span>
                <span className="block text-sm text-gray-400 mt-0.5">
                  {t.downloadQRDesc}
                </span>
              </span>
            </button>

            {SECTION_IDS.map((section) => (
              <Link
                key={section}
                to={`/${lang}/${app.id}/${section}/`}
                className={cardClass}
              >
                <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={sectionIcons[section]}
                    />
                  </svg>
                </span>
                <span className="min-w-0">
                  <span className="block font-heading font-semibold text-white group-hover:text-primary transition-colors">
                    {t[section]}
                  </span>
                  <span className="block text-sm text-gray-400 mt-0.5">
                    {t[`${section}Desc`]}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {showQR && (
        <AppModal app={app} lang={lang} onClose={() => setShowQR(false)} />
      )}
    </>
  );
}
