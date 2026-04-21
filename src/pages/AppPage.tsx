import { useParams, Navigate } from 'react-router-dom';
import { apps } from '../data/apps';
import { workHoursTracker } from '../data/appPages/workHoursTracker';
import { imageToPdf } from '../data/appPages/imageToPdf';
import { imageConverter } from '../data/appPages/imageConverter';
import { moneyTracker } from '../data/appPages/moneyTracker';
import { cleanPhoto } from '../data/appPages/cleanPhoto';
import AppPage from '../components/AppPage';
import SEO from '../components/SEO';

const appPageDataMap: Record<string, typeof workHoursTracker> = {
  'work-hours-tracker': workHoursTracker,
  'image-to-pdf': imageToPdf,
  'image-converter': imageConverter,
  'money-tracker': moneyTracker,
  'cleanphoto': cleanPhoto,
};

export default function AppPageRoute() {
  const { lang, appId } = useParams<{ lang: string; appId: string }>();

  if (!lang || !appId) {
    return <Navigate to={`/${lang || 'en'}`} replace />;
  }

  const app = apps.find(a => a.id === appId);
  const pageData = appPageDataMap[appId];

  if (!app || !pageData) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading font-bold text-4xl text-white mb-4">404</h1>
          <p className="text-gray-400 mb-6">App not found</p>
          <a
            href={`/${lang}`}
            className="text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    );
  }

  const localizedTitle = `${app.name[lang] || app.name['en']} - Appify`;
  const localizedDescription = app.description[lang] || app.description['en'];

  return (
    <>
      <SEO
        title={localizedTitle}
        description={localizedDescription}
        lang={lang}
        appId={appId}
      />
      <AppPage app={app} pageData={pageData} lang={lang} />
    </>
  );
}
