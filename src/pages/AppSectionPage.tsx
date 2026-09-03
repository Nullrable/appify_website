import { useParams, Navigate } from "react-router-dom";
import { apps } from "../data/apps";
import { getSectionLabels, isSectionId } from "../data/sectionLabels";
import SectionPlaceholder from "../components/SectionPlaceholder";
import ExternalLegalRedirect from "../components/ExternalLegalRedirect";
import LegalContent from "../components/LegalContent";
import BlogContent from "../components/BlogContent";
import BlogList from "../components/BlogList";
import SEO from "../components/SEO";
import { getContent, hasMultiContent } from "../generated/content";

export default function AppSectionPage() {
  const { lang, appId, section, slug } = useParams<{
    lang: string;
    appId: string;
    section: string;
    slug?: string;
  }>();

  if (!lang || !appId || !section || !isSectionId(section)) {
    return <Navigate to={`/${lang || "en"}/${appId || ""}`} replace />;
  }

  const app = apps.find((a) => a.id === appId);

  if (!app) {
    return <Navigate to={`/${lang}/`} replace />;
  }

  const t = getSectionLabels(lang);
  const appName = app.name[lang] || app.name["en"];

  // External legal pages (terms / privacy) are published on the product's
  // own domain rather than authored inside this project. Render a redirect
  // card so the in-app route still exists for shareable URLs but the user
  // is clearly pointed to the authoritative source.
  const externalUrl = app.externalLinks?.[section as "terms" | "privacy"];

  if (externalUrl) {
    return (
      <>
        <SEO
          title={`${t[section]} - ${appName} - Appify`}
          description={`${t[section]} - ${appName}. ${t[section]} is published on the official ${appName} site.`}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          noIndex
        />
        <ExternalLegalRedirect
          app={app}
          lang={lang}
          section={section}
          externalUrl={externalUrl}
        />
      </>
    );
  }

  // For blog section with a slug, render the individual post.
  // For blog section without a slug and multiple posts, render the list.
  const isBlog = section === "blog";
  const activeSlug = isBlog ? slug : undefined;

  // Terms and Privacy can be authored in English only and reused across all
  // languages - the page for /:lang/:appId/terms/ shows the English body even
  // when :lang is not "en".
  const legalSections: Array<"terms" | "privacy"> = ["terms", "privacy"];
  const isLegal = legalSections.includes(section as "terms" | "privacy");
  const article = isLegal || isBlog
    ? getContent(appId, section, lang, activeSlug ?? "index")
    : undefined;

  if (article && isLegal) {
    return (
      <>
        <SEO
          title={`${article.title} - Appify`}
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
        />
        <LegalContent
          app={app}
          lang={lang}
          section={section as "terms" | "privacy"}
          article={article}
        />
      </>
    );
  }

  if (article && isBlog) {
    return (
      <>
        <SEO
          title={`${article.title} - Appify`}
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
        />
        <BlogContent app={app} lang={lang} article={article} />
      </>
    );
  }

  // Blog index: list all posts when individual posts exist.
  if (isBlog && !activeSlug && hasMultiContent(appId, section, lang)) {
    return (
      <>
        <SEO
          title={`${t.blog} - ${appName} - Appify`}
          description={t.blogDesc}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
        />
        <BlogList app={app} lang={lang} />
      </>
    );
  }

  return (
    <>
      <SEO
        title={`${t[section]} - ${appName} - Appify`}
        description={`${t[section]} - ${appName}. ${t.comingSoonDesc}`}
        lang={lang}
        appId={appId}
        appName={appName}
        appStoreUrl={app.appStoreUrl}
        noIndex
      />
      <SectionPlaceholder app={app} lang={lang} section={section} />
    </>
  );
}