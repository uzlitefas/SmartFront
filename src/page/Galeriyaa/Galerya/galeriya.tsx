"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const galleryData = [
  {
    id: 1,
    title: "1-sinf xonasi",
    description: "Zamonaviy jihozlangan, yorug‘ va qulay sinf xonasi.",
    image:
      "https://storage.kun.uz/source/7/p_7t6kn_xUtvWJ4eFaIpvdMJ6TStLej1.jpg",
  },
  {
    id: 2,
    title: "Maktab kutubxonasi",
    description: "O‘quvchilar uchun boy adabiyotlar va tinch muhit.",
    image:
      "https://arm.navoiy-uni.uz/wp-content/uploads/2020/08/eSYwKe5vcf9-jdQDLCxP4fC4Vjhch8vA-e1598937476763.jpg",
  },
  {
    id: 3,
    title: "Sport zali",
    description: "Jismoniy tarbiya mashg‘ulotlari uchun katta sport zali.",
    image:
      "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    id: 4,
    title: "Maktab tashqi ko‘rinishi",
    description: "Zamonaviy arxitekturaga ega maktab binosi.",
    image:
      "https://data.daryo.uz/media/2023/17.022023/Otabek/photo_2023-03-16_23-57-59%20(2).jpg",
  },
  {
    id: 5,
    title: "Boshlang‘ich sinf",
    description: "Kichik yoshdagi bolalar uchun qulay va xavfsiz xona.",
    image:
      "https://storage.kun.uz/source/9/mc9uUXdzsof1zSxGCSOkeodNbsZHhriF.jpg",
  },
  {
    id: 6,
    title: "Tadbirlar zali",
    description: "Bayram va tadbirlar o‘tkaziladigan katta zal.",
    image:
      "https://avatars.mds.yandex.net/get-altay/5584339/2a0000017c8408bd9e1fa0727ec3f22c1ae9/XL",
  },
];

// 🔹 Container animatsiya
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// 🔹 Card animatsiya
const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function SchoolGallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Maktab galereyasi
        </h1>
        <p className="text-gray-600 text-xs sm:text-sm">
          Maktabimiz hayotidan eng yaxshi lavhalar
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
            whileHover={{
              scale: 1.04,
              rotateX: 4,
              rotateY: -4,
            }}
            onClick={() => setActive(item)}
            className="group cursor-pointer rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition"
          >
            {/* IMAGE */}
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* TEXT */}
            <div className="p-3 sm:p-4">
              <h3 className="font-semibold text-sm sm:text-base mb-0.5">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed line-clamp-2">
                {item.description}
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
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white max-w-xl w-full rounded-2xl overflow-hidden relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 text-lg font-bold"
              >
                ✕
              </button>

              <img
                src={active.image}
                alt={active.title}
                className="w-full h-64 sm:h-72 object-cover"
              />

              <div className="p-4 sm:p-5">
                <h3 className="text-base sm:text-lg font-bold mb-1">
                  {active.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {active.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
