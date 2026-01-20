"use client";

import { motion } from "framer-motion";

const translations = {
  uz: {
    title: "Ilovani telefonga yuklab oling",
    desc: "Ilovani yuklab oling va barcha xizmatlardan tez, qulay va xavfsiz foydalaning",
    download: "Yuklab oling",
    google: "Google Play",
    apple: "App Store",
  },
  ru: {
    title: "Скачайте приложение на телефон",
    desc: "Скачайте приложение и пользуйтесь всеми услугами быстро, удобно и безопасно",
    download: "Скачать в",
    google: "Google Play",
    apple: "App Store",
  },
  en: {
    title: "Download the app to your phone",
    desc: "Download the app and use all services quickly, conveniently, and securely",
    download: "Download on",
    google: "Google Play",
    apple: "App Store",
  },
};

export default function DownloadSection() {
  const lang = "uz"; // 🔹 default til
  const t = translations[lang];

  return (
    <section className="relative w-full h-[480px] sm:h-[520px] overflow-hidden rounded-2xl bg-white">
      {/* Background */}
      <img
        src="https://storage.kun.uz/source/4/7M_FGzzvOGpx9r26ZHPjllLU94EfhJwW.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/10" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-2xl px-6 sm:px-10 text-center sm:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            {t.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-white/80 text-sm sm:text-base mb-8"
          >
            {t.desc}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start"
          >
            {/* Google Play */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="https://play.google.com/store"
              target="_blank"
              className="bg-black/90 hover:bg-black rounded-xl px-6 py-4 flex items-center gap-4 shadow-xl"
            >
              <img
                src="https://cdn.vectorstock.com/i/500p/55/50/google-play-brand-logo-symbol-white-design-vector-46345550.jpg"
                className="h-8 w-8"
              />
              <div>
                <p className="text-xs text-white/60">{t.download}</p>
                <p className="text-sm font-semibold text-white">{t.google}</p>
              </div>
            </motion.a>

            {/* App Store */}
            <motion.a
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.apple.com/app-store/"
              target="_blank"
              className="bg-black/90 hover:bg-black rounded-xl px-6 py-4 flex items-center gap-4 shadow-xl"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="h-8 w-8 invert"
              />
              <div>
                <p className="text-xs text-white/60">{t.download}</p>
                <p className="text-sm font-semibold text-white">{t.apple}</p>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
