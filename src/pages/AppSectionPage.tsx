import { useParams, Navigate } from 'react-router-dom';
import { apps } from '../data/apps';
import { getSectionLabels, isSectionId } from '../data/sectionLabels';
import SectionPlaceholder from '../components/SectionPlaceholder';
import LegalContent from '../components/LegalContent';
import SEO from '../components/SEO';
import { getContent } from '../generated/content';

export default function AppSectionPage() {
  const { lang, appId, section } = useParams<{
    lang: string;
    appId: string;
    section: string;
  }>();

  if (!lang || !appId || !section || !isSectionId(section)) {
    return <Navigate to={`/${lang || 'en'}/${appId || ''}`} replace />;
  }

  const app = apps.find((a) => a.id === appId);

  if (!app) {
    return <Navigate to={`/${lang}/`} replace />;
  }

  const t = getSectionLabels(lang);
  const appName = app.name[lang] || app.name['en'];

  // Terms and Privacy can be authored in English only and reused across all
  // languages - the page for /:lang/:appId/terms/ shows the English body even
  // when :lang is not "en".
  const legalSections: Array<'terms' | 'privacy'> = ['terms', 'privacy'];
  const isLegal = legalSections.includes(section as 'terms' | 'privacy');
  const article = isLegal
    ? getContent(appId, section, lang) ?? getContent(appId, section, 'en')
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
          section={section as 'terms' | 'privacy'}
          article={article}
        />
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