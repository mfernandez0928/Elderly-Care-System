
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, CheckCircle, Linkedin, Mail, ShieldCheck, HeartPulse, Sparkles, Building2 } from 'lucide-react';
import { useLanguage } from '../App';

const translations = {
  fi: {
    established: 'Perustettu 1998',
    hero_title1: 'Suomalaista',
    hero_title2: 'Huoletonta Hoitoa',
    hero_title3: 'Sydämellä.',
    hero_desc: 'Pohjola Care on vuonna 1998 perustettu suomalainen perheyritys, jonka tehtävänä on tarjota arvokasta ja yksilöllistä vanhustenhoitoa Helsingissä ja lähialueilla.',
    local_focus: 'Paikallinen Osaaminen',
    local_quote: 'Perustettu Helsingin sydämessä palvelemaan naapureitamme kunnioituksella.',
    story_title: 'Tarinamme ja Perintömme',
    story_p1: 'Pohjola Care sai alkunsa halusta parantaa suomalaisten ikäihmisten elämänlaatua. Olemme kulkeneet pitkän matkan pienestä kotipalveluyrityksestä yhdeksi Suomen luotetuimmista hoidon tarjoajista.',
    story_p2: 'Uskomme, että jokaisella on oikeus arvokkaaseen vanhuuteen omassa kodissaan tai kodinomaisessa ympäristössä. Toimintamme perustuu sisuun, rehellisyyteen ja aitoon välittämiseen.',
    story_p3: 'Tänään palvelemme satoja perheitä intohimolla, yhdistäen perinteisen hoivatyön ja uusimman terveysteknologian.',
    years_exp: 'Vuotta Kokemusta',
    clients_served: 'Asiakasta Autettu',
    mission_title: 'Missiomme',
    mission_desc: 'Tarjota poikkeuksellista, arvokasta ja yksilöllistä hoitoa, joka voimaannuttaa ikäihmisiä elämään täysipainoista elämää.',
    vision_title: 'Visiomme',
    vision_desc: 'Olla Pohjoismaiden luotetuin ja innovatiivisin hoidon tarjoaja, joka asettaa globaalit standardit vanhusten hyvinvoinnille.',
    values_title: 'Perusarvomme',
    values_subtitle: 'Toimintamme pohjautuu vankkoihin arvoihin, jotka ohjaavat jokaista kohtaamista.',
    value1_title: 'Arvokkuus',
    value1_desc: 'Kohtelemme jokaista yksilöä hänen ansaitsemallaan kunnioituksella.',
    value2_title: 'Luottamus',
    value2_desc: 'Olemme tukenasi silloin, kun se merkitsee eniten, ilman kompromisseja.',
    value3_title: 'Elämänlaatu',
    value3_desc: 'Edistämme hyvinvointia ja iloa jokaisessa päivässä.',
    value4_title: 'Ammattitaito',
    value4_desc: 'Jatkuva koulutus ja huippuosaaminen ovat toimintamme keskiössä.',
    standards_title: 'Tinkimättömät laatustandardit',
    standards_desc: 'Laatumme varmistetaan säännöllisillä auditoinneilla ja jatkuvalla kehitystyöllä asukkaidemme parhaaksi.',
    std1: 'Sertifioitu suomalainen hoivapalvelu',
    std2: '24/7 päivystys ja seuranta',
    std3: 'Edistyksellinen terveysteknologia',
    std4: 'Jatkuva henkilöstön koulutus',
    std5: 'KELA-hyväksytyt palvelut',
    std6: 'ISO 9001 laatustandardi',
    leadership_title: 'Asiantunteva Johtomme',
    leadership_subtitle: 'Kokeneet ammattilaisemme varmistavat korkeimman laadun ja myötätunnon.',
    member_bio: 'Omistautunut vanhustenhoidon kehittämiseen yli 20 vuoden kokemuksella.',
    join_title: 'Tule mukaan yhteisöömme',
    join_desc: 'Etsimme jatkuvasti uusia kumppaneita ja osaajia rakentamaan parempaa huomista.',
    partner_btn: 'Kumppanuus',
    careers_btn: 'Urapolku Pohjolassa'
  },
  en: {
    established: 'Established 1998',
    hero_title1: 'Rooted in',
    hero_title2: 'Finnish Care',
    hero_title3: 'Driven by Compassion.',
    hero_desc: 'Pohjola Care is a Finnish family business founded in 1998, dedicated to providing dignified and personalized elderly care in Helsinki and surrounding areas.',
    local_focus: 'Local Focus',
    local_quote: 'Founded in the heart of Helsinki to serve our neighbors with dignity.',
    story_title: 'Our Story & Heritage',
    story_p1: 'Pohjola Care began with a desire to improve the quality of life for Finnish seniors. We have come a long way from a small home service company to one of Finland\'s most trusted care providers.',
    story_p2: 'We believe everyone has the right to a dignified old age in their own home or a home-like environment. Our operations are based on grit, honesty, and genuine care.',
    story_p3: 'Today we serve hundreds of families with passion, combining traditional nursing work with the latest health technology.',
    years_exp: 'Years of Excellence',
    clients_served: 'Clients Supported',
    mission_title: 'Our Mission',
    mission_desc: 'To provide exceptional, dignified, and personalized care that empowers seniors to live fulfilling lives.',
    vision_title: 'Our Vision',
    vision_desc: 'To be the most trusted and innovative care provider in the Nordic region, setting global benchmarks for elderly well-being.',
    values_title: 'Our Foundational Values',
    values_subtitle: 'Our operations are based on solid values that guide every encounter.',
    value1_title: 'Dignity & Respect',
    value1_desc: 'Treating every individual with the respect they deserve.',
    value2_title: 'Trust & Security',
    value2_desc: 'Being there when it matters most, without compromise.',
    value3_title: 'Quality of Life',
    value3_desc: 'Promoting well-being and joy in every day.',
    value4_title: 'Professionalism',
    value4_desc: 'Continuous training and excellence are at the heart of what we do.',
    standards_title: 'Uncompromising Standards of Care',
    standards_desc: 'Our quality is ensured by regular audits and continuous development for the best of our residents.',
    std1: 'Certified Finnish Care Provider',
    std2: '24/7 Response Monitoring',
    std3: 'Advanced Health Tech Integration',
    std4: 'Continuous Staff Training',
    std5: 'KELA Approved Services',
    std6: 'ISO 9001 Quality Standard',
    leadership_title: 'Our Dedicated Leadership',
    leadership_subtitle: 'Expert minds ensuring the highest standards of compassion and care.',
    member_bio: 'Dedicated to developing elderly care with over 20 years of experience.',
    join_title: 'Join Our Growing Community',
    join_desc: 'We are constantly looking for new partners and talent to build a better tomorrow.',
    partner_btn: 'Partner With Us',
    careers_btn: 'Careers at Pohjola'
  }
};

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pb-24">
      <section className="relative py-24 bg-teal-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white text-teal-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              {t.established}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {t.hero_title1} <span className="text-teal-600">{t.hero_title2}</span><br />{t.hero_title3}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.hero_desc}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="https://picsum.photos/seed/carejourney/800/1000" alt="Our Journey" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-teal-100 rounded-full -z-10 blur-2xl"></div>
              <div className="absolute -top-10 -left-10 p-8 bg-white rounded-3xl shadow-xl z-20 hidden md:block max-w-[240px]">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-teal-50 text-teal-600 rounded-lg">
                    <Building2 size={24} />
                  </div>
                  <span className="font-bold text-slate-800">{t.local_focus}</span>
                </div>
                <p className="text-sm text-slate-500 italic">"{t.local_quote}"</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.story_title}</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>{t.story_p1}</p>
                <p>{t.story_p2}</p>
                <p>{t.story_p3}</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-bold text-teal-600 mb-2">25+</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{t.years_exp}</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-teal-600 mb-2">1.2k</p>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{t.clients_served}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all"
            >
              <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-8">
                <Target size={36} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.mission_title}</h2>
              <p className="text-slate-600 leading-relaxed">{t.mission_desc}</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[2.5rem] border border-slate-100 shadow-sm transition-all"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                <Eye size={36} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">{t.vision_title}</h2>
              <p className="text-slate-600 leading-relaxed">{t.vision_desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.values_title}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t.values_subtitle}</p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <HeartPulse />, title: t.value1_title, desc: t.value1_desc },
              { icon: <ShieldCheck />, title: t.value2_title, desc: t.value2_desc },
              { icon: <Sparkles />, title: t.value3_title, desc: t.value3_desc },
              { icon: <Award />, title: t.value4_title, desc: t.value4_desc }
            ].map((v, i) => (
              <motion.div key={i} variants={itemVariants} className="text-center group">
                <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mx-auto mb-6 border border-slate-100 group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  {React.cloneElement(v.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-teal-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-teal-800 skew-x-12 translate-x-1/2 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.standards_title}</h2>
            <p className="text-teal-100 text-lg mb-12 leading-relaxed">{t.standards_desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[t.std1, t.std2, t.std3, t.std4, t.std5, t.std6].map((std, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="font-medium text-teal-50">{std}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.leadership_title}</h2>
            <p className="text-slate-600">{t.leadership_subtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Lauri Korhonen", role: lang === 'fi' ? "Toimitusjohtaja & Perustaja" : "CEO & Founder", img: "https://picsum.photos/seed/lauri/400/500" },
              { name: "Sari Mäkinen", role: lang === 'fi' ? "Ylilääkäri" : "Chief Medical Officer", img: "https://picsum.photos/seed/sari/400/500" },
              { name: "Mikael Lindström", role: lang === 'fi' ? "Operatiivinen johtaja" : "Operations Director", img: "https://picsum.photos/seed/mikael/400/500" },
              { name: "Hanna Järvinen", role: lang === 'fi' ? "Asiakaskokemus" : "Customer Experience", img: "https://picsum.photos/seed/hanna/400/500" },
            ].map((member, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex space-x-3 text-white">
                      <Linkedin size={20} className="hover:text-teal-400 cursor-pointer" />
                      <Mail size={20} className="hover:text-teal-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h4>
                  <p className="text-xs text-teal-600 font-bold uppercase tracking-wider mb-3">{member.role}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{t.member_bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">{t.join_title}</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">{t.join_desc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-teal-600 text-white px-10 py-4 rounded-full font-bold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl">
              {t.partner_btn}
            </button>
            <button className="bg-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all border border-white/20">
              {t.careers_btn}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
