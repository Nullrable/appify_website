import { Link } from 'react-router-dom';
import { apps } from '../data/apps';

interface FooterProps {
  lang: string;
}

export default function Footer({ lang }: FooterProps) {
  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            to={`/${lang}/`}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-sm">A</span>
            </div>
            <span className="font-heading font-semibold text-white">Appify</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {apps.map(app => (
              <Link
                key={app.id}
                to={`/${lang}/${app.id}/`}
                className="text-sm text-gray-400 hover:text-primary transition-colors"
              >
                {app.name[lang] || app.name['en']}
              </Link>
            ))}
          </div>

          <p className="text-sm text-gray-500">
            © 2026 Appify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}