import { Link } from "react-router-dom";
import type { ContentArticle } from "../generated/content";
import type { App } from "../data/apps";
import { getSectionLabels } from "../data/sectionLabels";
import Footer from "./Footer";

interface BlogContentProps {
  app: App;
  lang: string;
  article: ContentArticle;
  // Breadcrumb section; defaults to "blog". "about" reuses this component
  // because it renders the same long-form article layout.
  section?: "blog" | "features" | "about";
}

export default function BlogContent({
  app,
  lang,
  article,
  section = "blog",
}: BlogContentProps) {
  const appName = app.name[lang] || app.name["en"];
  const t = getSectionLabels(lang);

  const formattedDate = article.date
    ? new Date(article.date).toLocaleDateString(lang, {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

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
              {appName}
            </Link>
            <span>/</span>
            <Link
              to={`/${lang}/${app.id}/${section}/`}
              className="hover:text-primary transition-colors"
            >
              {t[section]}
            </Link>
          </nav>

          <header className="mb-10">
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-white">
              {article.title}
            </h1>
            <p className="text-gray-400 mt-3 text-lg">{article.description}</p>
            {formattedDate && (
              <p className="text-gray-500 text-sm mt-3">{formattedDate}</p>
            )}
          </header>

          <article
            className="blog-content text-gray-300 leading-relaxed space-y-4 [&_h1]:font-heading [&_h1]:font-bold [&_h1]:text-3xl [&_h1]:text-white [&_h1]:mt-12 [&_h1]:mb-6 [&_h2]:font-heading [&_h2]:font-semibold [&_h2]:text-2xl [&_h2]:text-white [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-heading [&_h3]:font-semibold [&_h3]:text-xl [&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ul>li]:mb-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_ol>li]:mb-2 [&_strong]:font-semibold [&_strong]:text-white [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary/80 [&_code]:font-mono [&_code]:text-sm [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_hr]:border-white/10 [&_hr]:my-8"
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </div>
      </section>

      <Footer lang={lang} />
    </div>
  );
}
