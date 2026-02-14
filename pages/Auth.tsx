
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ShieldCheck, ArrowRight } from 'lucide-react';
import { useLanguage } from '../App';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = React.useState(true);
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className="w-full max-w-lg">
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex mb-12 relative overflow-hidden">
           <div className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-teal-600 rounded-xl transition-all duration-300 transform ${isLogin ? 'translate-x-0' : 'translate-x-full'}`}></div>
           <button
             onClick={() => setIsLogin(true)}
             className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors ${isLogin ? 'text-white' : 'text-slate-400'}`}
           >
             {t('signin')}
           </button>
           <button
             onClick={() => setIsLogin(false)}
             className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors ${!isLogin ? 'text-white' : 'text-slate-400'}`}
           >
             {t('signup')}
           </button>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? 'login' : 'signup'}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? t('welcome_back') : t('create_account')}
              </h2>
              <p className="text-slate-500 mb-10">
                {isLogin ? 'Kirjaudu sisään hallintaportaaliin.' : 'Liity Pohjola Care -perheeseen tänään.'}
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {!isLogin && (
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">{t('full_name')}</label>
                    <div className="relative">
                      <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="text"
                        className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                        placeholder="Juho Virtanen"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('email_address')}</label>
                  <div className="relative">
                    <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="email"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="juho@example.fi"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">{t('password')}</label>
                  <div className="relative">
                    <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input
                      required
                      type="password"
                      className="w-full pl-12 pr-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  {isLogin && (
                    <div className="text-right mt-2">
                       <a href="#" className="text-xs font-semibold text-teal-600 hover:underline">{t('forgot_password')}</a>
                    </div>
                  )}
                </div>

                {!isLogin && (
                  <div className="flex items-start space-x-3 py-2">
                    <input type="checkbox" className="mt-1 accent-teal-600" id="terms" required />
                    <label htmlFor="terms" className="text-xs text-slate-500 leading-relaxed">
                      {t('agree_terms')}
                    </label>
                  </div>
                )}

                <button
                  type="button"
                  className="w-full bg-teal-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2"
                >
                  <span>{isLogin ? t('signin') : t('signup')}</span>
                  <ArrowRight size={20} />
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-center text-sm text-slate-400">
                  Suojattu NordSafe™-järjestelmällä
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Auth;
