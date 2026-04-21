interface AppFooterProps {
  lang: string;
}

export default function AppFooter({ lang }: AppFooterProps) {
  return (
    <footer className="px-6 py-12 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <a
          href={`/${lang}`}
          className="text-gray-400 hover:text-primary transition-colors"
        >
          ← Back to Home
        </a>

        <div className="text-center md:text-left">
          <a href={`/${lang}`} className="font-heading font-bold text-xl text-white hover:text-primary transition-colors">
            Appify
          </a>
          <p className="text-sm text-gray-500 mt-1">
            © 2026 Appify. All rights reserved.
          </p>
        </div>

        <div className="w-20" />
      </div>
    </footer>
  );
}
