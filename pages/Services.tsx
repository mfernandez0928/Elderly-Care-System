
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Shield, Stethoscope, Clock, Check, Star } from 'lucide-react';
import { useLanguage } from '../App';

const serviceData = {
  fi: {
    title: "Hoivapakettimme",
    subtitle: "Tarjoamme joustavia hoitosuunnitelmia, jotka on suunniteltu mukautumaan läheistesi tarpeisiin.",
    packages: [
      {
        title: "Kotihoitopalvelut",
        description: "Ammattitaitoista tukea oman kodin rauhassa. Autamme siivouksessa, ruoanlaitossa ja pienissä askareissa.",
        features: ["Henkilökohtainen hygienia", "Aterioiden valmistus", "Kevyt siivous", "Seura ja viriketoiminta"]
      },
      {
        title: "Palveluasumisen Tuki",
        description: "Heille, jotka tarvitsevat enemmän päivittäistä apua. Henkilökuntamme on paikalla 24/7.",
        features: ["Yksityiset asuintilat", "Turvahälytinjärjestelmät", "Ryhmätoiminta", "Ravitsemusneuvonta"]
      },
      {
        title: "Lääkinnällinen Tuki",
        description: "Yhteistyö terveydenhuollon ammattilaisten kanssa kroonisten sairauksien ja lääkityksen hoidossa.",
        features: ["Lääkehoidon seuranta", "Haavanhoito", "Fysioterapian koordinointi", "Lääkärikäyntien tuki"]
      },
      {
        title: "24/7 Arjen Apu",
        description: "Ympärivuorokautinen tehostettu hoito asukkaille, joilla on monimutkaisia tarpeita.",
        features: ["Yövalvonta", "Liikkumisen tuki", "Erikoistunut muistisairas hoito", "Omaishoitajien loma-apu"]
      }
    ],
    testimonial: "Lääkintätiimin ammattimainen koordinointi ja kotihoitajien hellä ote antoivat isällemme uuden alun. Olemme todella kiitollisia Pohjola Carelle.",
    location: "Omainen, Espoo"
  },
  en: {
    title: "Our Care Packages",
    subtitle: "We offer flexible care plans designed to scale with the needs of your loved ones, ensuring they get the right support at every stage.",
    packages: [
      {
        title: "Home Care Services",
        description: "Professional support within the comfort of your own home. We help with cleaning, cooking, and light household chores.",
        features: ["Personal hygiene assistance", "Meal preparation", "Light housekeeping", "Companionship"]
      },
      {
        title: "Assisted Living Support",
        description: "For those who need a bit more hands-on daily help. Our dedicated staff is available on-site at our premium facilities 24/7.",
        features: ["Private living quarters", "Emergency call systems", "Group activities", "On-site nutritionist"]
      },
      {
        title: "Medical Support Coordination",
        description: "Liaising with healthcare professionals to manage chronic conditions, medication, and rehabilitation recovery.",
        features: ["Medication management", "Wound care", "Physical therapy sync", "Doctor appointments coordination"]
      },
      {
        title: "24/7 Daily Assistance",
        description: "Round-the-clock intensive care for seniors with complex needs or those recovering from major surgery.",
        features: ["Night-time monitoring", "Mobility support", "Specialized dementia care", "Relief for family caregivers"]
      }
    ],
    testimonial: "The professional coordination of the medical team and the gentle touch of the home care workers gave our father a second lease on life. Truly grateful for Pohjola Care.",
    location: "Family member, Espoo"
  }
};

const Services: React.FC = () => {
  const { lang } = useLanguage();
  const d = serviceData[lang];

  const icons = [<Home size={32} />, <Shield size={32} />, <Stethoscope size={32} />, <Clock size={32} />];
  const colors = [
    "bg-teal-50 text-teal-600",
    "bg-blue-50 text-blue-600",
    "bg-rose-50 text-rose-600",
    "bg-amber-50 text-amber-600"
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{d.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{d.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {d.packages.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex flex-col md:flex-row gap-8">
                <div className={`${colors[i]} w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                  {icons[i]}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center space-x-3 text-sm text-slate-700">
                        <Check size={18} className="text-teal-600" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <section className="bg-slate-50 rounded-[3rem] p-12 text-center">
           <div className="flex justify-center mb-6">
              {[1,2,3,4,5].map(star => <Star key={star} size={24} className="fill-yellow-400 text-yellow-400 mx-0.5" />)}
           </div>
           <blockquote className="text-2xl font-medium text-slate-800 italic max-w-4xl mx-auto mb-8">
             "{d.testimonial}"
           </blockquote>
           <p className="font-bold text-slate-900">Mika Waltari</p>
           <p className="text-sm text-slate-500">{d.location}</p>
        </section>
      </div>
    </div>
  );
};

export default Services;
