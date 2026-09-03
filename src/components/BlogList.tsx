import { Link } from 'react-router-dom';
import type { App } from '../data/apps';
import { getSectionLabels } from '../data/sectionLabels';
import { listContentSlugs } from '../generated/content';
import Footer from './Footer';

interface BlogListProps {
  app: App;
  lang: string;
}

function formatDate(date: string, lang: string): string {
  if (!date) return '';
  try {
    return new Date(date).toLocaleDateString(lang, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return date;
  }
}

export default function BlogList({ app, lang }: BlogListProps) {
  const appName = app.name[lang] || app.name['en'];
  const t = getSectionLabels(lang);
  const posts = listContentSlugs(app.id, 'blog', lang);

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
              {appName}
            </Link>
            <span>/</span>
            <span className="text-gray-400">{t.blog}</span>
          </nav>

          <header className="mb-12">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-white">
              {t.blog} - {appName}
            </h1>
            <p className="text-gray-400 mt-3 text-lg">{t.blogDesc}</p>
          </header>

          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  to={`/${lang}/${app.id}/blog/${post.slug}/`}
                  className="block bg-card rounded-2xl p-6 border border-white/10 hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <h2 className="font-heading font-semibold text-xl text-white group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                    {post.description}
                  </p>
                  {post.date && (
                    <p className="text-gray-500 text-xs mt-3">
                      {formatDate(post.date, lang)}
                    </p>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}