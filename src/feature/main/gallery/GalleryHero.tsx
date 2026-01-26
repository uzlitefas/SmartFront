"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

type Feature = {
  title: string;
  text: string;
};

export default function GalleryHero() {
  const { t } = useTranslation();

  const features = t("galleryHero.features", {
    returnObjects: true,
  }) as Feature[];

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-b
          from-slate-50 to-white
          dark:from-slate-900 dark:to-slate-950
        "
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 pt-20 pb-12 text-center">
        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-bold tracking-tight
            text-slate-900 dark:text-slate-100
          "
        >
          {t("galleryHero.title")}{" "}
          <span
            className="
              bg-gradient-to-r
              from-blue-600 to-indigo-600
              dark:from-blue-400 dark:to-indigo-400
              bg-clip-text text-transparent
            "
          >
            {t("galleryHero.highlight")}
          </span>
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="
            mt-6 max-w-3xl mx-auto
            text-slate-600 dark:text-slate-400
            text-sm sm:text-base md:text-lg
            leading-relaxed
          "
        >
          {t("galleryHero.subtitle")}
        </motion.p>

        {/* FEATURES */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.15, delayChildren: 0.3 },
            },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="
                rounded-2xl
                bg-white dark:bg-slate-900
                shadow-sm dark:shadow-none
                border border-slate-100 dark:border-slate-800
                p-5 text-left
              "
            >
              <h3
                className="
                  font-semibold
                  text-sm sm:text-base
                  text-slate-900 dark:text-slate-100
                  mb-1
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  text-xs sm:text-sm
                  text-slate-600 dark:text-slate-400
                  leading-relaxed
                "
              >
                {feature.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
