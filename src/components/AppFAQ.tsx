import { useState } from 'react';
import type { FAQ } from '../data/appPages/types';

const sectionTitles: Record<string, string> = {
  en: 'FAQ',
  zh: '常见问题',
  'zh-TW': '常見問題',
  ja: 'よくある質問',
  ko: '자주 묻는 질문',
  vi: 'Câu hỏi thường gặp',
  id: 'Pertanyaan Umum',
  ar: 'الأسئلة الشائعة',
  fr: 'FAQ',
  de: 'Häufige Fragen',
  es: 'Preguntas frecuentes',
  pt: 'Perguntas frequentes',
  it: 'Domande frequenti',
  ru: 'Часто задаваемые вопросы',
  th: 'คำถามที่พบบ่อย',
};

interface AppFAQProps {
  faqs: FAQ[];
  lang: string;
}

export default function AppFAQ({ faqs, lang }: AppFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const getLocalizedText = (record: Record<string, string>, fallback = 'en') => {
    return record[lang] || record[fallback] || '';
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const title = sectionTitles[lang] || sectionTitles['en'];

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="px-6 py-16 md:py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-bold text-3xl text-white text-center mb-12">
          {title}
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl border border-white/5 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-semibold text-white pr-4">
                  {getLocalizedText(faq.question)}
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-400 leading-relaxed">
                    {getLocalizedText(faq.answer)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
