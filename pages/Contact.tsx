
import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '../App';

const contactTranslations = {
  fi: {
    title: "Ota yhteyttä",
    subtitle: "Onko sinulla kysyttävää palveluistamme? Ystävälliset hoitokoordinaattorimme ovat täällä auttamassa.",
    hq: "Helsingin Pääkonttori",
    available: "Avoinna Ma-Pe, 08:00 - 18:00",
    sent_title: "Viesti Lähetetty!",
    sent_desc: "Kiitos yhteydenotostasi. Tiimimme ottaa sinuun yhteyttä 24 tunnin kuluessa.",
    another_msg: "Lähetä uusi viesti",
    sending: "Lähetetään..."
  },
  en: {
    title: "Get in Touch",
    subtitle: "Have questions about our services or want to schedule a visit? Our friendly care coordinators are here to help.",
    hq: "Helsinki HQ",
    available: "Available Mon-Fri, 08:00 - 18:00",
    sent_title: "Message Sent!",
    sent_desc: "Thank you for reaching out. Our team will contact you within 24 hours.",
    another_msg: "Send Another Message",
    sending: "Sending..."
  }
};

const Contact: React.FC = () => {
  const { lang, t } = useLanguage();
  const ct = contactTranslations[lang];
  const [formStatus, setFormStatus] = React.useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{ct.title}</h1>
            <p className="text-lg text-slate-600 mb-12">{ct.subtitle}</p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t('location')}</h4>
                  <p className="text-slate-600">Mannerheimintie 10, 00100 Helsinki, Finland</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t('call_us')}</h4>
                  <p className="text-slate-600">+358 09 123 4567</p>
                  <p className="text-xs text-slate-400">{ct.available}</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center text-rose-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">{t('email_us')}</h4>
                  <p className="text-slate-600">contact@pohjolacare.fi</p>
                </div>
              </div>
            </div>

            <div className="mt-12 h-64 bg-slate-200 rounded-3xl relative overflow-hidden flex items-center justify-center border border-slate-200">
               <img src="https://picsum.photos/seed/helsinkimap/800/400" className="absolute inset-0 w-full h-full object-cover grayscale" alt="Map" />
               <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-slate-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                    <span className="font-bold text-sm">{ct.hq}</span>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send size={40} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{ct.sent_title}</h3>
                <p className="text-slate-600 mb-8">{ct.sent_desc}</p>
                <button
                  onClick={() => setFormStatus('idle')}
                  className="bg-teal-600 text-white px-8 py-3 rounded-full font-bold hover:bg-teal-700 transition-colors"
                >
                  {ct.another_msg}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('full_name')}</label>
                    <input
                      required
                      type="text"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="Jane Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('phone_number')}</label>
                    <input
                      required
                      type="tel"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="+358..."
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('email_address')}</label>
                  <input
                    required
                    type="email"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('interest_service')}</label>
                  <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all">
                    <option>{t('home_care')}</option>
                    <option>{t('assisted_living')}</option>
                    <option>{t('medical_support')}</option>
                    <option>Muu</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('message')}</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                    placeholder="..."
                  ></textarea>
                </div>
                <button
                  disabled={formStatus === 'sending'}
                  className="w-full bg-teal-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-50"
                >
                  {formStatus === 'sending' ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <MessageCircle size={22} />
                      <span>{t('send_message')}</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
