import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import { getSectionLabels } from '../data/sectionLabels';

interface AppCardProps {
  app: App;
  lang: string;
  onClick: () => void;
}

export default function AppCard({ app, lang, onClick }: AppCardProps) {
  const name = app.name[lang] || app.name['en'];
  const description = app.description[lang] || app.description['en'];
  const t = getSectionLabels(lang);

  return (
    <div className="group relative bg-card rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <button
        onClick={onClick}
        aria-label={name}
        className="block w-full p-6 pb-3 text-left rounded-t-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden flex-shrink-0">
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

        <span className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>

      <div className="px-6 pb-5 pt-1">
        <Link
          to={`/${lang}/${app.id}/`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        >
          {t.learnMore}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
