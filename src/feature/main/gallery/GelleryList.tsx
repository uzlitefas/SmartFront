import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { galleryData1 } from "@/constants";

export default function GalleryList() {
  const { t } = useTranslation();
  const [active, setActive] = useState<(typeof galleryData1)[0] | null>(null);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-16 py-14 bg-background">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-12"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          {t("gallery.title")}
        </h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {t("gallery.subtitle")}
        </p>
      </motion.div>

      {/* GRID */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {galleryData1.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            whileHover={{ y: -8, scale: 1.03 }}
            onClick={() => setActive(item)}
            className="group cursor-pointer rounded-3xl bg-card shadow-lg h-full flex flex-col"
          >
            <div className="relative flex-1 overflow-hidden rounded-3xl">
              <img
                src={item.image}
                alt={t(`gallery.items.${item.key}.title`)}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-white font-semibold text-sm sm:text-base">
                  {t(`gallery.items.${item.key}.title`)}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm line-clamp-2">
                  {t(`gallery.items.${item.key}.desc`)}
                </p>
              </div>
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
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center px-4"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", stiffness: 120 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card max-w-xl w-full rounded-3xl overflow-hidden relative"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-3 right-3 z-10 text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>

              <img
                src={active.image}
                alt={t(`gallery.items.${active.key}.title`)}
                className="w-full h-64 sm:h-72 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg font-bold mb-1">
                  {t(`gallery.items.${active.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`gallery.items.${active.key}.desc`)}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
