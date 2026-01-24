"use client";

import { feature5 } from "@/constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function GalleryHero() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 pb-12 text-center">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900"
        >
          {t("galleryHero.title")}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t("galleryHero.highlight")}
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6 max-w-3xl mx-auto text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed"
        >
          {t("galleryHero.subtitle")}
        </motion.p>

        {/* FEATURES */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {feature5.map((item) => (
            <motion.div
              key={item.text}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="rounded-2xl bg-white shadow-sm border border-slate-100 p-5 text-left"
            >
              <h3 className="font-semibold text-sm sm:text-base text-slate-900 mb-1">
                {t(`galleryHero.features.${item.title}.title`)}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {t(`galleryHero.features.${item.text}.text`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
