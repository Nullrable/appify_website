import { useState } from 'react';
import type { App } from '../data/apps';
import AppModal from './AppModal';

const translations: Record<string, { download: string; qrCode: string }> = {
  en: { download: 'Download on App Store', qrCode: 'QR Code' },
  zh: { download: '在 App Store 下载', qrCode: '二维码' },
  'zh-TW': { download: '在 App Store 下載', qrCode: '二維碼' },
  ja: { download: 'App Storeでダウンロード', qrCode: 'QRコード' },
  ko: { download: 'App Store에서 다운로드', qrCode: 'QR 코드' },
  vi: { download: 'Tải về trên App Store', qrCode: 'Mã QR' },
  id: { download: 'Unduh di App Store', qrCode: 'Kode QR' },
  ar: { download: 'تحميل على App Store', qrCode: 'رمز الاستجابة السريعة' },
  fr: { download: 'Télécharger sur App Store', qrCode: 'Code QR' },
  de: { download: 'Im App Store herunterladen', qrCode: 'QR-Code' },
  es: { download: 'Descargar en App Store', qrCode: 'Código QR' },
  pt: { download: 'Baixar na App Store', qrCode: 'Código QR' },
  it: { download: 'Scarica su App Store', qrCode: 'Codice QR' },
  ru: { download: 'Скачать в App Store', qrCode: 'QR-код' },
  th: { download: 'ดาวน์โหลดบน App Store', qrCode: 'QR โค้ด' },
};

interface AppHeroProps {
  app: App;
  lang: string;
  tagline: string;
}

export default function AppHero({ app, lang, tagline }: AppHeroProps) {
  const [showQR, setShowQR] = useState(false);
  const name = app.name[lang] || app.name['en'];
  const t = translations[lang] || translations['en'];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-bg to-accent/10" />
        <div className="absolute inset-0 backdrop-blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden shadow-2xl shadow-primary/20">
              <img
                src={app.iconPath}
                alt={name}
                className="w-28 h-28 md:w-36 md:h-36 object-contain"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-4">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              {tagline}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-teal-600 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.27 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t.download}
              </a>

              <button
                onClick={() => setShowQR(true)}
                className="flex items-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h2M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
                {t.qrCode}
              </button>
            </div>
          </div>
        </div>
      </section>

      {showQR && (
        <AppModal app={app} lang={lang} onClose={() => setShowQR(false)} />
      )}
    </>
  );
}
