
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Shield, Users, ArrowRight, CheckCircle2, Activity, Coffee } from 'lucide-react';
import { useLanguage } from '../App';

const content = {
  fi: {
    badge: 'Luotettavaa hoitoa koko Suomessa',
    title1: 'Empaattista',
    title2: 'hoitoa',
    title3: 'läheisillesi.',
    hero_desc: 'Pohjola Care tarjoaa korkealaatuista kotihoitoa ja palveluasumista, jotka on suunniteltu vastaamaan Suomen ikääntyvän väestön yksilöllisiin tarpeisiin.',
    cta_primary: 'Varaa konsultaatio',
    cta_secondary: 'Tutustu palveluihin',
    families_served: '500+ Perhettä palveltu',
    why_title: 'Miksi valita Pohjola Care',
    why_subtitle: 'Arvomme ovat luottamus, turvallisuus ja arvokkuus',
    why_desc: 'Ymmärrämme, että hoitokumppanin valinta on merkittävä päätös. Siksi perheet ympäri Suomen luottavat meihin.',
    core_services_title: 'Keskeiset palvelumme',
    core_services_desc: 'Yksilölliset hoitosuunnitelmat, jotka kunnioittavat itsenäisyyttä samalla tarjoten tarvittavaa tukea.',
    view_all: 'Katso kaikki palvelut',
    cta_box_title: 'Valmiina tarjoamaan parasta hoitoa?',
    cta_box_desc: 'Varaa ilmainen ja sitoumukseton konsultaatio hoitokoordinaattoriemme kanssa jo tänään.',
    cta_box_btn: 'Ota yhteyttä tiimiimme'
  },
  en: {
    badge: 'Trusted care across Finland',
    title1: 'Compassionate',
    title2: 'Care',
    title3: 'for Your Loved Ones.',
    hero_desc: 'Pohjola Care provides premium home-based support and assisted living services designed for the unique needs of the elderly in our Finnish community.',
    cta_primary: 'Book a Consultation',
    cta_secondary: 'Explore Services',
    families_served: '500+ Families Served',
    why_title: 'Why Choose Pohjola Care',
    why_subtitle: 'Built on Values of Trust, Safety, and Dignity',
    why_desc: "We understand that choosing a care provider is a deeply personal decision. Here's why families across Finland trust us.",
    core_services_title: 'Our Core Services',
    core_services_desc: 'Tailored care plans that respect the independence of our seniors while providing the support they need.',
    view_all: 'View all services',
    cta_box_title: 'Ready to provide the best care?',
    cta_box_desc: "Schedule a free, no-obligation consultation with our care coordinators today. Let's build a brighter future for your family together.",
    cta_box_btn: 'Contact Our Team'
  }
};

const Home: React.FC = () => {
  const { lang, t } = useLanguage();
  const c = content[lang];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-[#f0f4f4]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-sm font-semibold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-teal-600 animate-pulse"></span>
                <span>{c.badge}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
                {c.title1} <span className="text-teal-600">{c.title2}</span> {c.title3}
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                {c.hero_desc}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-teal-600 text-white px-10 py-4 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group"
                >
                  <span>{c.cta_primary}</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-slate-700 border border-slate-200 px-10 py-4 rounded-full font-semibold hover:bg-slate-50 transition-all flex items-center justify-center"
                >
                  {c.cta_secondary}
                </Link>
              </div>

              <div className="mt-12 flex items-center space-x-8">
                 <div className="flex -space-x-3">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white" src={`https://picsum.photos/seed/${i+10}/100/100`} alt="Client" />
                    ))}
                 </div>
                 <div className="text-sm">
                    <p className="font-bold text-slate-900">{c.families_served}</p>
                    <div className="flex text-yellow-500">
                      {'★★★★★'.split('').map((s, i) => <span key={i}>{s}</span>)}
                    </div>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/scandicare/800/1000"
                  alt="Elderly care"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden sm:block max-w-[200px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-800">24/7 Support</span>
                </div>
                <p className="text-xs text-slate-500 italic">"The care and respect shown to my mother was exceptional." - Anna K.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-4">{c.why_title}</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6">{c.why_subtitle}</h3>
            <p className="text-slate-600">{c.why_desc}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Heart className="text-rose-500" size={32} />,
                title: lang === 'fi' ? "Myötätuntoinen tiimi" : "Compassionate Staff",
                desc: lang === 'fi' ? "Tiimimme ei ole vain koulutettu; heidät on valittu lämpönsä ja todellisen auttamishalunsa perusteella." : "Our team isn't just highly trained; they are selected for their warmth and genuine desire to help others."
              },
              {
                icon: <Shield className="text-teal-600" size={32} />,
                title: lang === 'fi' ? "Turvallisuus ensin" : "Safety First",
                desc: lang === 'fi' ? "Tarkat taustatarkistukset ja jatkuva seuranta takaavat turvallisen ympäristön jokaiselle asukkaalle." : "Rigorous background checks and continuous monitoring ensure a safe environment for every resident."
              },
              {
                icon: <Users className="text-blue-600" size={32} />,
                title: lang === 'fi' ? "Yhteisöllisyys" : "Community Focused",
                desc: lang === 'fi' ? "Edistämme sosiaalista vuorovaikutusta ja kulttuuritoimintaa, jotka pitävät seniorimme aktiivisina." : "We promote social interaction and cultural activities that keep our seniors active and engaged."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-gray-50 p-10 rounded-3xl transition-all"
              >
                <div className="mb-6">{pillar.icon}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{pillar.title}</h4>
                <p className="text-slate-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Service Grid Preview */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-slate-900 mb-6">{c.core_services_title}</h2>
              <p className="text-slate-600">{c.core_services_desc}</p>
            </div>
            <Link to="/services" className="text-teal-600 font-bold hover:underline inline-flex items-center space-x-2">
              <span>{c.view_all}</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('home_care'), icon: <Users size={24}/>, color: "bg-teal-50 text-teal-600" },
              { title: t('medical_support'), icon: <Activity size={24}/>, color: "bg-rose-50 text-rose-600" },
              { title: t('assisted_living'), icon: <Shield size={24}/>, color: "bg-blue-50 text-blue-600" },
              { title: t('daily_assistance'), icon: <Coffee size={24}/>, color: "bg-amber-50 text-amber-600" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow cursor-pointer group">
                <div className={`${item.color} w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h5 className="font-bold text-slate-900">{item.title}</h5>
                <p className="text-sm text-slate-500 mt-2">{lang === 'fi' ? 'Yksilöllistä tukea päivittäisiin tarpeisiin.' : 'Personalized support tailored to individual daily needs.'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-teal-900 rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-800 rounded-full -translate-y-1/2 translate-x-1/2 opacity-30"></div>
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-5xl font-bold mb-8">{c.cta_box_title}</h2>
              <p className="text-teal-100 text-lg mb-12 max-w-2xl mx-auto">
                {c.cta_box_desc}
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-teal-900 px-12 py-5 rounded-full font-bold text-lg hover:bg-teal-50 transition-colors"
              >
                {c.cta_box_btn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
