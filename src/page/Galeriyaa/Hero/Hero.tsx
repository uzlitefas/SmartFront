"use client";

import { motion } from "framer-motion";

type Lang = "uz" | "en" | "ru";

const content = {
  uz: {
    title: "Kelajakni",
    highlight: "bilim",
    subtitle: "bilan quramiz",
    description:
      "Maktabimiz — sifatli ta’lim, tajribali ustozlar va qulay muhit uyg‘unlashgan zamonaviy bilim maskani.",
    features: [
      {
        title: "Sifatli ta’lim",
        text: "Zamonaviy dasturlar va metodikalar asosida.",
      },
      {
        title: "Tajribali ustozlar",
        text: "Yuqori malakali va fidoyi o‘qituvchilar.",
      },
      {
        title: "Qulay muhit",
        text: "Xavfsiz va qulay ta’lim muhiti.",
      },
    ],
  },

  en: {
    title: "We build the future",
    highlight: "with knowledge",
    subtitle: "",
    description:
      "Our school is a modern educational center combining quality education, experienced teachers, and a comfortable environment.",
    features: [
      {
        title: "Quality Education",
        text: "Modern programs and effective methodologies.",
      },
      {
        title: "Experienced Teachers",
        text: "Highly qualified and dedicated instructors.",
      },
      {
        title: "Comfortable Environment",
        text: "Safe and supportive learning atmosphere.",
      },
    ],
  },

  ru: {
    title: "Мы строим будущее",
    highlight: "знаниями",
    subtitle: "",
    description:
      "Наша школа — это современный образовательный центр, объединяющий качественное обучение, опытных педагогов и комфортную среду.",
    features: [
      {
        title: "Качественное образование",
        text: "Современные программы и эффективные методики обучения.",
      },
      {
        title: "Опытные преподаватели",
        text: "Высококвалифицированные и преданные своему делу учителя.",
      },
      {
        title: "Комфортная среда",
        text: "Безопасная и благоприятная атмосфера для обучения.",
      },
    ],
  },
};

export default function SchoolHero({ lang = "uz" }: { lang?: Lang }) {
  const t = content[lang];

  return (
    <section className="relative px-4 sm:px-6 lg:px-10 py-20">
      {/* Outer background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950" />

      {/* UNIQUE CONTAINER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="
          relative max-w-7xl mx-auto
          rounded-[2rem]
          bg-white/80 dark:bg-slate-900/80
          backdrop-blur-xl
          shadow-xl
          border border-slate-200 dark:border-slate-800
          px-6 sm:px-10 lg:px-16
          py-16
        "
      >
        {/* Title */}
        <h1
          className="
            font-extrabold tracking-tight text-center
            text-slate-900 dark:text-white
            text-[clamp(2rem,5vw,3.75rem)]
          "
        >
          {t.title}{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t.highlight}
          </span>{" "}
          {t.subtitle}
        </h1>

        {/* Description */}
        <p
          className="
            mt-6 max-w-3xl mx-auto text-center
            text-slate-600 dark:text-slate-300
            text-[clamp(0.95rem,2.5vw,1.125rem)]
            leading-relaxed
          "
        >
          {t.description}
        </p>

        {/* Features */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
          }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.features.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 25 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220 }}
              className="
                rounded-2xl
                bg-slate-50 dark:bg-slate-800
                border border-slate-200 dark:border-slate-700
                p-6
                shadow-sm hover:shadow-md
              "
            >
              <h3 className="font-semibold text-slate-900 dark:text-white text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
