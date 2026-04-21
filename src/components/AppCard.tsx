import type { App } from '../data/apps';

interface AppCardProps {
  app: App;
  lang: string;
  onClick: () => void;
}

export default function AppCard({ app, lang, onClick }: AppCardProps) {
  const name = app.name[lang] || app.name['en'];
  const description = app.description[lang] || app.description['en'];

  return (
    <button
      onClick={onClick}
      className="group relative bg-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 text-left w-full"
    >
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
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

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </button>
  );
}