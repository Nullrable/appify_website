import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import { getSectionLabels, type SectionId } from '../data/sectionLabels';
import Footer from './Footer';

interface SectionPlaceholderProps {
  app: App;
  lang: string;
  section: SectionId;
}

export default function SectionPlaceholder({
  app,
  lang,
  section,
}: SectionPlaceholderProps) {
  const name = app.name[lang] || app.name['en'];
  const t = getSectionLabels(lang);

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <section className="relative overflow-hidden flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-accent/10" />

        <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link to={`/${lang}/`} className="hover:text-primary transition-colors">
              Appify
            </Link>
            <span>/</span>
            <Link
              to={`/${lang}/${app.id}/`}
              className="hover:text-primary transition-colors"
            >
              {name}
            </Link>
            <span>/</span>
            <span className="text-gray-400">{t[section]}</span>
          </nav>

          <div className="flex items-center gap-5 mb-8">
            <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden flex-shrink-0">
              <img
                src={app.iconPath}
                alt={name}
                className="w-16 h-16 object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-3xl md:text-4xl text-white">
                {t[section]}
              </h1>
              <p className="text-gray-400 mt-1">{name}</p>
            </div>
          </div>

          <div className="bg-card rounded-3xl p-8 md:p-10 border border-white/10">
            <h2 className="font-heading font-semibold text-xl text-white mb-3">
              {t.comingSoon}
            </h2>
            <p className="text-gray-400 mb-8">{t.comingSoonDesc}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/${lang}/${app.id}/`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-2xl border border-white/20 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                {t.backToApp}
              </Link>

              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.27 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
