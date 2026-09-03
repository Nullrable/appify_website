import { useParams, Navigate } from "react-router-dom";
import { apps } from "../data/apps";
import { hreflangConfig } from "../data/seo";
import { getSectionLabels, isSectionId } from "../data/sectionLabels";
import SectionPlaceholder from "../components/SectionPlaceholder";
import ExternalLegalRedirect from "../components/ExternalLegalRedirect";
import LegalContent from "../components/LegalContent";
import BlogContent from "../components/BlogContent";
import BlogList from "../components/BlogList";
import FeatureContent from "../components/FeatureContent";
import FeatureList from "../components/FeatureList";
import SEO from "../components/SEO";
import {
  contentEntries,
  getContent,
  hasMultiContent,
} from "../generated/content";

const ALL_SEO_LANGS = hreflangConfig
  .map(({ lang }) => lang)
  .filter((lang) => lang !== "x-default");

// Languages where (appId, section, slug) content NATIVELY exists (no English
// fallback). Must mirror scripts/prerender-seo.mjs so client-side SEO tags
// agree with the pre-rendered ones after hydration.
function nativeContentLangs(
  appId: string,
  section: string,
  slug: string,
): string[] {
  const present = new Set(
    contentEntries
      .filter(
        (e) =>
          e.appId === appId &&
          e.article.section === section &&
          e.article.slug === slug,
      )
      .map((e) => e.article.lang),
  );
  return ALL_SEO_LANGS.filter((l) => present.has(l));
}

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
          // Indexable with a canonical pointing at the authoritative external
          // URL. noindex must never be mixed with a cross-domain canonical -
          // Google would not consolidate signals on a noindex page.
          canonicalUrl={externalUrl}
          hreflangLangs={[]}
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

  // Sections that support multiple posts (features, blog) resolve slug-aware
  // content; legal and about sections are slug-less (single page per
  // language).
  const isMulti = section === "features" || section === "blog";
  const activeSlug = isMulti ? slug : undefined;

  // Terms and Privacy can be authored in English only and reused across all
  // languages - the page for /:lang/:appId/terms/ shows the English body even
  // when :lang is not "en". getContent falls back to English for every
  // section, mirroring the prerender script.
  const legalSections: Array<"terms" | "privacy"> = ["terms", "privacy"];
  const isLegal = legalSections.includes(section as "terms" | "privacy");
  const article =
    isLegal || isMulti || section === "about"
      ? getContent(appId, section, lang, activeSlug ?? "index")
      : undefined;

  // Multilingual SEO rules (mirrors scripts/prerender-seo.mjs):
  // - hreflang cluster only contains languages where this content natively
  //   exists, so alternates never point at fallback or missing pages.
  // - A fallback-rendered page (English body under a non-English URL)
  //   canonicalizes to the English URL.
  const articleSlug = activeSlug ?? "index";
  const nativeLangs = article
    ? nativeContentLangs(appId, section, articleSlug)
    : [];
  const nativeCanonicalUrl = nativeLangs.includes(lang)
    ? undefined
    : `/en/${appId}/${section}${activeSlug ? `/${activeSlug}` : ""}/`;

  if (article && isLegal) {
    return (
      <>
        <SEO
          title={
            lang === "en"
              ? `${article.title} - Appify`
              : `${t[section]} - ${appName} - Appify`
          }
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          canonicalUrl={nativeCanonicalUrl}
          hreflangLangs={nativeLangs}
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

  if (article && section === "about") {
    return (
      <>
        <SEO
          title={`${article.title} - Appify`}
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          canonicalUrl={nativeCanonicalUrl}
          hreflangLangs={nativeLangs}
        />
        <BlogContent app={app} lang={lang} article={article} section="about" />
      </>
    );
  }

  if (article && section === "features") {
    return (
      <>
        <SEO
          title={`${article.title} - Appify`}
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          canonicalUrl={nativeCanonicalUrl}
          hreflangLangs={nativeLangs}
        />
        <FeatureContent app={app} lang={lang} article={article} />
      </>
    );
  }

  if (article && section === "blog") {
    return (
      <>
        <SEO
          title={`${article.title} - Appify`}
          description={article.description}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          canonicalUrl={nativeCanonicalUrl}
          hreflangLangs={nativeLangs}
        />
        <BlogContent app={app} lang={lang} article={article} />
      </>
    );
  }

  // Multi-content index: list all posts when individual posts exist.
  if (isMulti && !activeSlug && hasMultiContent(appId, section, lang)) {
    const listNativeLangs = ALL_SEO_LANGS.filter((l) =>
      contentEntries.some(
        (e) =>
          e.appId === appId &&
          e.article.section === section &&
          e.article.lang === l &&
          e.article.slug !== "index",
      ),
    );
    const seoTitle =
      section === "features"
        ? `${t.features} - ${appName} - Appify`
        : `${t.blog} - ${appName} - Appify`;
    const seoDesc = section === "features" ? t.featuresDesc : t.blogDesc;
    return (
      <>
        <SEO
          title={seoTitle}
          description={seoDesc}
          lang={lang}
          appId={appId}
          appName={appName}
          appStoreUrl={app.appStoreUrl}
          canonicalUrl={
            listNativeLangs.includes(lang)
              ? undefined
              : `/en/${appId}/${section}/`
          }
          hreflangLangs={listNativeLangs}
        />
        {section === "features" ? (
          <FeatureList app={app} lang={lang} />
        ) : (
          <BlogList app={app} lang={lang} />
        )}
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
