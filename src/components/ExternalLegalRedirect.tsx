import { Link } from "react-router-dom";
import type { App } from "../data/apps";
import { getSectionLabels, type SectionId } from "../data/sectionLabels";
import Footer from "./Footer";

interface ExternalLegalRedirectProps {
  app: App;
  lang: string;
  section: SectionId;
  externalUrl: string;
}

export default function ExternalLegalRedirect({
  app,
  lang,
  section,
  externalUrl,
}: ExternalLegalRedirectProps) {
  const name = app.name[lang] || app.name["en"];
  const t = getSectionLabels(lang);

  let host = "";
  try {
    host = new URL(externalUrl).host;
  } catch {
    host = externalUrl;
  }

  return (
    <div className="min-h-screen bg-bg flex flex-col">
      <section className="relative overflow-hidden flex-1">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-accent/10" />

        <div className="relative max-w-3xl mx-auto px-6 py-16 md:py-24">
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-10">
            <Link
              to={`/${lang}/`}
              className="hover:text-primary transition-colors"
            >
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
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t[section]} for {name} is published on the official {host} site.
              The link below opens that page in a new tab.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
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
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t[section]}
              </a>

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
            </div>
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}