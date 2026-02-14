
import React, { Suspense, lazy, useState, createContext, useContext } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Heart, User, ShieldCheck, Activity, Coffee, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CareAssistant from './components/CareAssistant';

// Language Context for global state
type Language = 'fi' | 'en';
interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fi: {
    home: 'Koti',
    about: 'Meistä',
    services: 'Palvelut',
    contact: 'Ota yhteyttä',
    signin: 'Kirjaudu',
    signup: 'Rekisteröidy',
    footer_desc: 'Johtava vanhustenhoitopalveluiden tarjoaja Suomessa. Yhdistämme skandinaaviset arvot ja modernin teknologian tarjotaksemme rakkaillesi empaattista hoitoa.',
    quick_links: 'Pikalinkit',
    our_services: 'Palvelumme',
    contact_us: 'Ota yhteyttä',
    rights: 'Kaikki oikeudet pidätetään.',
    privacy: 'Tietosuojaseloste',
    terms: 'Käyttöehdot',
    accessibility: 'Saavutettavuus',
    home_care: 'Kotihoito',
    assisted_living: 'Palveluasuminen',
    medical_support: 'Lääkinnällinen tuki',
    daily_assistance: 'Arjen apu',
    location: 'Sijainti',
    call_us: 'Soita meille',
    email_us: 'Lähetä sähköpostia',
    full_name: 'Koko nimi',
    phone_number: 'Puhelinnumero',
    email_address: 'Sähköpostiosoite',
    message: 'Viesti',
    send_message: 'Lähetä viesti',
    interest_service: 'Kiinnostava palvelu',
    password: 'Salasana',
    forgot_password: 'Unohditko salasanan?',
    welcome_back: 'Tervetuloa takaisin',
    create_account: 'Luo tili',
    agree_terms: 'Hyväksyn palveluehdot ja tietosuojaselosteen.'
  },
  en: {
    home: 'Home',
    about: 'About',
    services: 'Services',
    contact: 'Contact',
    signin: 'Sign In',
    signup: 'Sign Up',
    footer_desc: 'Leading elderly care service provider in Finland. We blend Scandinavian values with modern technology to provide compassionate care for your loved ones.',
    quick_links: 'Quick Links',
    our_services: 'Our Services',
    contact_us: 'Contact Us',
    rights: 'All rights reserved.',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    accessibility: 'Accessibility',
    home_care: 'Home Care',
    assisted_living: 'Assisted Living',
    medical_support: 'Medical Support',
    daily_assistance: 'Daily Assistance',
    location: 'Location',
    call_us: 'Call Us',
    email_us: 'Email Us',
    full_name: 'Full Name',
    phone_number: 'Phone Number',
    email_address: 'Email Address',
    message: 'Message',
    send_message: 'Send Message',
    interest_service: 'Service of Interest',
    password: 'Password',
    forgot_password: 'Forgot password?',
    welcome_back: 'Welcome Back',
    create_account: 'Create Account',
    agree_terms: 'I agree to the Terms of Service and Privacy Policy.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Auth = lazy(() => import('./pages/Auth'));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { name: t('home'), path: '/' },
    { name: t('about'), path: '/about' },
    { name: t('services'), path: '/services' },
    { name: t('contact'), path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white">
              <Heart size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Pohjola <span className="text-teal-600">Care</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-teal-600 ${
                  location.pathname === link.path ? 'text-teal-600 underline underline-offset-8' : 'text-slate-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
              <button 
                onClick={() => setLang('fi')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'fi' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                FI
              </button>
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-white text-teal-600 shadow-sm' : 'text-slate-400 hover:text-slate-600'}`}
              >
                EN
              </button>
            </div>

            <Link
              to="/auth"
              className="bg-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-teal-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              {t('signin')}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-4">
             <div className="flex bg-gray-100 rounded-full p-0.5 border border-gray-200">
              <button onClick={() => setLang('fi')} className={`px-2 py-1 rounded-full text-[10px] font-bold ${lang === 'fi' ? 'bg-white text-teal-600' : 'text-slate-400'}`}>FI</button>
              <button onClick={() => setLang('en')} className={`px-2 py-1 rounded-full text-[10px] font-bold ${lang === 'en' ? 'bg-white text-teal-600' : 'text-slate-400'}`}>EN</button>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-teal-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-slate-700 hover:text-teal-600 hover:bg-gray-50 rounded-lg"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-teal-600 text-white px-6 py-3 rounded-xl font-medium"
                >
                  {t('signin')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center text-white">
                <Heart size={18} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Pohjola Care</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              {t('footer_desc')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-teal-500 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-teal-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('quick_links')}</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-teal-500 transition-colors">{t('home')}</Link></li>
              <li><Link to="/about" className="hover:text-teal-500 transition-colors">{t('about')}</Link></li>
              <li><Link to="/services" className="hover:text-teal-500 transition-colors">{t('services')}</Link></li>
              <li><Link to="/contact" className="hover:text-teal-500 transition-colors">{t('contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('our_services')}</h4>
            <ul className="space-y-4 text-sm">
              <li>{t('home_care')}</li>
              <li>{t('assisted_living')}</li>
              <li>{t('medical_support')}</li>
              <li>{t('daily_assistance')}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">{t('contact_us')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-teal-500 shrink-0" />
                <span>Mannerheimintie 10, 00100 Helsinki, Finland</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-teal-500 shrink-0" />
                <span>+358 09 123 4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-teal-500 shrink-0" />
                <span>info@pohjolacare.fi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 Pohjola Care Oy. {t('rights')}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t('privacy')}</a>
            <a href="#" className="hover:text-white">{t('terms')}</a>
            <a href="#" className="hover:text-white">{t('accessibility')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('fi');

  const t = (key: string) => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-20">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <CareAssistant />
        </div>
      </HashRouter>
    </LanguageContext.Provider>
  );
};

export default App;
