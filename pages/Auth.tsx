import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Lock,
  User,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Building,
  Hash,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../App";

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useLanguage();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      // In a real app, you would redirect to dashboard or home
    }, 1500);
  };

  const handleGoogleAuth = () => {
    setIsLoading(true);
    // Simulate Google Login popup
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-xl border border-slate-100 text-center max-w-md w-full"
        >
          <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            {t("auth_success")}
          </h2>
          <p className="text-slate-500 mb-10">
            {isLogin
              ? "Siirrytään hallintapaneeliin..."
              : "Tilisi on luotu. Tervetuloa mukaan!"}
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold hover:bg-teal-700 transition-all"
          >
            {t("home")}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-20 bg-slate-50">
      <div className={`w-full ${isLogin ? "max-w-lg" : "max-w-2xl"}`}>
        <div className="bg-white p-2 rounded-2xl shadow-sm border border-slate-100 flex mb-12 relative overflow-hidden">
          <div
            className={`absolute top-2 bottom-2 w-[calc(50%-8px)] bg-teal-600 rounded-xl transition-all duration-300 transform ${isLogin ? "translate-x-0" : "translate-x-full"}`}
          ></div>
          <button
            onClick={() => setIsLogin(true)}
            className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors ${isLogin ? "text-white" : "text-slate-400"}`}
          >
            {t("signin")}
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`relative z-10 flex-1 py-3 text-sm font-bold transition-colors ${!isLogin ? "text-white" : "text-slate-400"}`}
          >
            {t("signup")}
          </button>
        </div>

        <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={isLogin ? "login" : "signup"}
              initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {isLogin ? t("welcome_back") : t("create_account")}
              </h2>
              <p className="text-slate-500 mb-10">
                {isLogin
                  ? "Kirjaudu sisään hallintaportaaliin."
                  : "Liity Pohjola Care -perheeseen täyttämällä tietosi."}
              </p>

              {/* Social Login */}
              <button
                onClick={handleGoogleAuth}
                className="w-full flex items-center justify-center space-x-3 border border-slate-200 py-4 rounded-2xl font-semibold text-slate-700 hover:bg-slate-50 transition-all mb-8"
              >
                <img
                  src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span>{t("Google")}</span>
              </button>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex-1 h-px bg-slate-100"></div>
                <span className="text-xs font-bold text-slate-300 uppercase tracking-widest">
                  {t("or_continue")}
                </span>
                <div className="flex-1 h-px bg-slate-100"></div>
              </div>

              <form className="space-y-6" onSubmit={handleAuth}>
                {!isLogin && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {t("first_name")}
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            placeholder="Juho"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {t("last_name")}
                        </label>
                        <div className="relative">
                          <User
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            placeholder="Virtanen"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t("phone_number")}
                      </label>
                      <div className="relative">
                        <Phone
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          required
                          type="tel"
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="+358 00 000 0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t("address")}
                      </label>
                      <div className="relative">
                        <MapPin
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                          required
                          type="text"
                          className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                          placeholder="Mannerheimintie 123"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {t("zipcode")}
                        </label>
                        <div className="relative">
                          <Hash
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            placeholder="00100"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          {t("city")}
                        </label>
                        <div className="relative">
                          <Building
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                          />
                          <input
                            required
                            type="text"
                            className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                            placeholder="Helsinki"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t("email_address")}
                  </label>
                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      type="email"
                      className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="juho@example.fi"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    {t("password")}
                  </label>
                  <div className="relative">
                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      required
                      type="password"
                      className="w-full pl-12 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                      placeholder="••••••••"
                    />
                  </div>
                  {isLogin && (
                    <div className="text-right mt-2">
                      <a
                        href="#"
                        className="text-xs font-semibold text-teal-600 hover:underline"
                      >
                        {t("forgot_password")}
                      </a>
                    </div>
                  )}
                </div>

                {!isLogin && (
                  <div className="flex items-start space-x-3 py-2">
                    <input
                      type="checkbox"
                      className="mt-1 accent-teal-600 rounded"
                      id="terms"
                      required
                    />
                    <label
                      htmlFor="terms"
                      className="text-xs text-slate-500 leading-relaxed"
                    >
                      {t("agree_terms")}
                    </label>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-teal-600 text-white py-4.5 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed h-[64px]"
                >
                  {isLoading ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      <span>{isLogin ? t("signin") : t("signup")}</span>
                      <ArrowRight size={20} />
                    </>
                  )}
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
