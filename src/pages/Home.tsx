import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import AppCard from '../components/AppCard';
import AppModal from '../components/AppModal';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { apps } from '../data/apps';
import { seoMeta } from '../data/seo';

export default function Home() {
  const { lang: urlLang } = useParams<{ lang: string }>();
  const currentLang = urlLang || 'en';
  const [selectedApp, setSelectedApp] = useState<typeof apps[0] | null>(null);

  const currentSeo = seoMeta[currentLang] || seoMeta['en'];

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        lang={currentLang}
      />
      <div className="min-h-screen bg-bg">
        <Nav currentLang={currentLang} onLangChange={() => {}} />

        <main>
          <Hero lang={currentLang} />

          <section className="px-6 pb-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {apps.map(app => (
                <AppCard
                  key={app.id}
                  app={app}
                  lang={currentLang}
                  onClick={() => setSelectedApp(app)}
                />
              ))}
            </div>
          </section>
        </main>

        <Footer lang={currentLang} />

        {selectedApp && (
          <AppModal
            app={selectedApp}
            lang={currentLang}
            onClose={() => setSelectedApp(null)}
          />
        )}
      </div>
    </>
  );
}
