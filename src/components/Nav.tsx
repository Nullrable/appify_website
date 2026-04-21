import { useState } from 'react';
import { languages } from '../data/apps';

interface NavProps {
  currentLang: string;
  onLangChange: (lang: string) => void;
}

export default function Nav({ currentLang, onLangChange }: NavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const currentLangData = languages.find(l => l.code === currentLang) || languages[0];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href={`/${currentLang}/`} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-teal-600 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-xl">A</span>
          </div>
          <span className="font-heading font-bold text-xl text-white">Appify</span>
        </a>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card hover:bg-card/80 transition-colors"
          >
            <span>{currentLangData.flag}</span>
            <span className="text-sm">{currentLangData.name}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-card rounded-xl border border-white/10 shadow-lg overflow-hidden max-h-80 overflow-y-auto">
              {languages.map(lang => (
                <a
                  key={lang.code}
                  href={`/${lang.code}/`}
                  onClick={() => { onLangChange(lang.code); setIsOpen(false); }}
                  className={`flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors ${
                    lang.code === currentLang ? 'bg-primary/20' : ''
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="text-sm">{lang.name}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}