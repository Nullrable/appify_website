import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import type { App } from '../data/apps';

interface AppModalProps {
  app: App;
  lang: string;
  onClose: () => void;
}

const translations: Record<string, { download: string; learnMore: string; scanQR: string }> = {
  en: { download: 'Download on App Store', learnMore: 'Learn more →', scanQR: 'Scan QR Code' },
  zh: { download: '在 App Store 下载', learnMore: '了解更多 →', scanQR: '扫描二维码' },
  'zh-TW': { download: '在 App Store 下載', learnMore: '了解更多 →', scanQR: '掃描二維碼' },
  ja: { download: 'App Storeでダウンロード', learnMore: '詳細を見る →', scanQR: 'QRコードをスキャン' },
  ko: { download: 'App Store에서 다운로드', learnMore: '자세히 보기 →', scanQR: 'QR 코드 스캔' },
  vi: { download: 'Tải về trên App Store', learnMore: 'Tìm hiểu thêm →', scanQR: 'Quét mã QR' },
  id: { download: 'Unduh di App Store', learnMore: 'Pelajari lebih lanjut →', scanQR: 'Pindai Kode QR' },
  ar: { download: 'تحميل على App Store', learnMore: 'اعرف المزيد →', scanQR: 'مسح رمز الاستجابة السريعة' },
  fr: { download: 'Télécharger sur App Store', learnMore: 'En savoir plus →', scanQR: 'Scanner le code QR' },
  de: { download: 'Im App Store herunterladen', learnMore: 'Mehr erfahren →', scanQR: 'QR-Code scannen' },
  es: { download: 'Descargar en App Store', learnMore: 'Más información →', scanQR: 'Escanear código QR' },
  pt: { download: 'Baixar na App Store', learnMore: 'Saiba mais →', scanQR: 'Escanear código QR' },
  it: { download: 'Scarica su App Store', learnMore: 'Scopri di più →', scanQR: 'Scansiona il codice QR' },
  ru: { download: 'Скачать в App Store', learnMore: 'Узнать больше →', scanQR: 'Сканировать QR-код' },
  th: { download: 'ดาวน์โหลดบน App Store', learnMore: 'ดูเพิ่มเติม →', scanQR: 'สแกน QR โค้ด' },
};

export default function AppModal({ app, lang, onClose }: AppModalProps) {
  const name = app.name[lang] || app.name['en'];
  const t = translations[lang] || translations['en'];

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative bg-card rounded-3xl p-8 max-w-sm w-full border border-white/10 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 overflow-hidden">
            <img src={app.iconPath} alt={name} className="w-20 h-20 object-contain" />
          </div>

          <h2 className="font-heading font-bold text-2xl text-white mb-2">{name}</h2>

          <div className="bg-white p-4 rounded-2xl my-6">
            <QRCodeSVG
              value={app.appStoreUrl}
              size={180}
              level="M"
              includeMargin
            />
          </div>
          <p className="text-sm text-gray-400 mb-4">{t.scanQR}</p>

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

          <Link
            to={`/${lang}/${app.id}/`}
            className="mt-4 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            {t.learnMore}
          </Link>
        </div>
      </div>
    </div>
  );
}