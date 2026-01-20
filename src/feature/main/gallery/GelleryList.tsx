import { galleryData } from "@/constants";
import type { GalleryItem } from "@/types/main";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

export default function GalleryList() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-12">
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
            <div className="relative h-52 sm:h-56 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
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
