import { Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import type { App } from '../data/apps';

const translations: Record<string, { downloadNow: string; scanQR: string; scanDesc: string; download: string; learnMore: string }> = {
  en: { downloadNow: 'Download Now', scanQR: 'Scan QR Code', scanDesc: 'Scan the QR code or click the button to download on the App Store', download: 'Download on App Store', learnMore: 'Learn more' },
  zh: { downloadNow: '立即下载', scanQR: '扫描二维码', scanDesc: '扫描二维码或点击按钮在 App Store 下载', download: '在 App Store 下载', learnMore: '了解更多' },
  'zh-TW': { downloadNow: '立即下載', scanQR: '掃描二維碼', scanDesc: '掃描二維碼或點擊按鈕在 App Store 下載', download: '在 App Store 下載', learnMore: '了解更多' },
  ja: { downloadNow: '今すぐダウンロード', scanQR: 'QRコードをスキャン', scanDesc: 'QRコードをスキャンするか、ボタンをクリックしてApp Storeでダウンロード', download: 'App Storeでダウンロード', learnMore: '詳細を見る' },
  ko: { downloadNow: '지금 다운로드', scanQR: 'QR 코드 스캔', scanDesc: 'QR 코드를 스캔하거나 버튼을 클릭하여 App Store에서 다운로드', download: 'App Store에서 다운로드', learnMore: '자세히 보기' },
  vi: { downloadNow: 'Tải ngay', scanQR: 'Quét mã QR', scanDesc: 'Quét mã QR hoặc nhấp vào nút để tải về trên App Store', download: 'Tải về trên App Store', learnMore: 'Tìm hiểu thêm' },
  id: { downloadNow: 'Unduh sekarang', scanQR: 'Pindai Kode QR', scanDesc: 'Pindai kode QR atau klik tombol untuk mengunduh di App Store', download: 'Unduh di App Store', learnMore: 'Pelajari lebih lanjut' },
  ar: { downloadNow: 'التحميل الآن', scanQR: 'مسح رمز الاستجابة السريعة', scanDesc: 'امسح رمز الاستجابة السريعة أو انقر على الزر للتحميل من App Store', download: 'تحميل على App Store', learnMore: 'اعرف المزيد' },
  fr: { downloadNow: 'Télécharger maintenant', scanQR: 'Scanner le code QR', scanDesc: 'Scannez le code QR ou cliquez sur le bouton pour télécharger sur App Store', download: 'Télécharger sur App Store', learnMore: 'En savoir plus' },
  de: { downloadNow: 'Jetzt herunterladen', scanQR: 'QR-Code scannen', scanDesc: 'Scannen Sie den QR-Code oder klicken Sie auf die Schaltfläche zum Herunterladen im App Store', download: 'Im App Store herunterladen', learnMore: 'Mehr erfahren' },
  es: { downloadNow: 'Descargar ahora', scanQR: 'Escanear código QR', scanDesc: 'Escanee el código QR o haga clic en el botón para descargar en App Store', download: 'Descargar en App Store', learnMore: 'Más información' },
  pt: { downloadNow: 'Baixar agora', scanQR: 'Escanear código QR', scanDesc: 'Escaneie o código QR ou clique no botão para baixar na App Store', download: 'Baixar na App Store', learnMore: 'Saiba mais' },
  it: { downloadNow: 'Scarica ora', scanQR: 'Scansiona il codice QR', scanDesc: "Scansiona il codice QR o clicca sul pulsante per scaricare su App Store", download: 'Scarica su App Store', learnMore: 'Scopri di più' },
  ru: { downloadNow: 'Скачать сейчас', scanQR: 'Сканировать QR-код', scanDesc: 'Отсканируйте QR-код или нажмите кнопку, чтобы скачать в App Store', download: 'Скачать в App Store', learnMore: 'Узнать больше' },
  th: { downloadNow: 'ดาวน์โหลดเลย', scanQR: 'สแกน QR โค้ด', scanDesc: 'สแกน QR โค้ดหรือกดปุ่มเพื่อดาวน์โหลดบน App Store', download: 'ดาวน์โหลดบน App Store', learnMore: 'ดูเพิ่มเติม' },
};

interface AppDownloadProps {
  app: App;
  lang: string;
}

export default function AppDownload({ app, lang }: AppDownloadProps) {
  const t = translations[lang] || translations['en'];

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gradient-to-br from-primary/20 via-card to-accent/20 rounded-3xl p-8 md:p-12 border border-white/10 text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            {t.downloadNow}
          </h2>
          <p className="text-gray-300 mb-8">
            {t.scanDesc}
          </p>

          <div className="bg-white p-6 rounded-3xl inline-block mb-8 shadow-2xl">
            <QRCodeSVG
              value={app.appStoreUrl}
              size={200}
              level="H"
              includeMargin
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              className="flex items-center gap-2 px-6 py-4 text-gray-300 hover:text-white transition-colors"
            >
              {t.learnMore}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
