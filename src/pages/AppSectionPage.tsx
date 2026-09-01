import { useParams, Navigate } from 'react-router-dom';
import { apps } from '../data/apps';
import { getSectionLabels, isSectionId } from '../data/sectionLabels';
import SectionPlaceholder from '../components/SectionPlaceholder';
import SEO from '../components/SEO';

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
