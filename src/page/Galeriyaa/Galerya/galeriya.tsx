"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Galereya ma'lumotlari (O‘zbekcha, Ruscha, Inglizcha)
const galleryData = [
  {
    id: 1,
    title: { uz: "1-sinf xonasi", ru: "Класс 1", en: "1st Grade Classroom" },
    description: {
      uz: "Zamonaviy jihozlangan, yorug‘ va qulay sinf xonasi.",
      ru: "Современно оборудованный, светлый и удобный класс.",
      en: "Modern, bright, and comfortable classroom.",
    },
    image:
      "https://storage.kun.uz/source/7/p_7t6kn_xUtvWJ4eFaIpvdMJ6TStLej1.jpg",
  },
  {
    id: 2,
    title: {
      uz: "Maktab kutubxonasi",
      ru: "Школьная библиотека",
      en: "School Library",
    },
    description: {
      uz: "O‘quvchilar uchun boy adabiyotlar va tinch muhit.",
      ru: "Богатая литература и спокойная атмосфера для учеников.",
      en: "Rich literature and peaceful environment for students.",
    },
    image:
      "https://arm.navoiy-uni.uz/wp-content/uploads/2020/08/eSYwKe5vcf9-jdQDLCxP4fC4Vjhch8vA-e1598937476763.jpg",
  },
  {
    id: 3,
    title: { uz: "Sport zali", ru: "Спортзал", en: "Gym" },
    description: {
      uz: "Jismoniy tarbiya mashg‘ulotlari uchun katta sport zali.",
      ru: "Большой спортзал для занятий физкультурой.",
      en: "Large gym for physical education activities.",
    },
    image:
      "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    id: 4,
    title: {
      uz: "Maktab tashqi ko‘rinishi",
      ru: "Внешний вид школы",
      en: "School Exterior",
    },
    description: {
      uz: "Zamonaviy arxitekturaga ega maktab binosi.",
      ru: "Школьное здание с современной архитектурой.",
      en: "School building with modern architecture.",
    },
    image:
      "https://data.daryo.uz/media/2023/17.022023/Otabek/photo_2023-03-16_23-57-59%20(2).jpg",
  },
  {
    id: 5,
    title: {
      uz: "Boshlang‘ich sinf",
      ru: "Начальный класс",
      en: "Primary Classroom",
    },
    description: {
      uz: "Kichik yoshdagi bolalar uchun qulay va xavfsiz xona.",
      ru: "Удобное и безопасное помещение для младших детей.",
      en: "Comfortable and safe room for young children.",
    },
    image:
      "https://storage.kun.uz/source/9/mc9uUXdzsof1zSxGCSOkeodNbsZHhriF.jpg",
  },
  {
    id: 6,
    title: { uz: "Tadbirlar zali", ru: "Зал мероприятий", en: "Event Hall" },
    description: {
      uz: "Bayram va tadbirlar o‘tkaziladigan katta zal.",
      ru: "Большой зал для праздников и мероприятий.",
      en: "Large hall for celebrations and events.",
    },
    image:
      "https://avatars.mds.yandex.net/get-altay/5584339/2a0000017c8408bd9e1fa0727ec3f22c1ae9/XL",
  },
];

// Container animatsiya
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

// Card animatsiya
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function SchoolGallery({ lang = "uz" }) {
  const [active, setActive] = useState(null);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 dark:bg-gray-900 dark:text-gray-100">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {lang === "uz"
            ? "Maktab galereyasi"
            : lang === "ru"
              ? "Галерея школы"
              : "School Gallery"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
          {lang === "uz"
            ? "Maktabimiz hayotidan eng yaxshi lavhalar"
            : lang === "ru"
              ? "Лучшие моменты из жизни нашей школы"
              : "Best snapshots from our school life"}
        </p>
      </motion.div>

      {/* GALLERY GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryData.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            whileHover={{ scale: 1.04 }}
            onClick={() => setActive(item)}
            className="cursor-pointer rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition"
          >
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title[lang]}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-sm sm:text-base mb-1">
                {item.title[lang]}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                {item.description[lang]}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* MODAL */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-800 max-w-xl w-full rounded-2xl overflow-hidden relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-lg font-bold"
              >
                ✕
              </button>

              <img
                src={active.image}
                alt={active.title[lang]}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">{active.title[lang]}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {active.description[lang]}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
