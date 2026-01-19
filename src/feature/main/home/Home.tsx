import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import About from "./About";
import DownloadSection from "@/components/shared/OurApp";
import { VideoModal } from "@/components/hero-sections/video-modal";
import { banner, video } from "@/constants";

export function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const stats = [
    { value: "5 000+", label: t("hero.stats.students") },
    { value: "20+", label: t("hero.stats.courses") },
    { value: "95%", label: t("hero.stats.employment") },
  ];

  return (
    <>
      <motion.section
        className="min-h-screen flex items-center justify-center w-full bg-background transition-colors duration-300"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                className="inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-blue-100/30 text-blue-500 sm:text-blue-600 text-xs sm:text-sm font-semibold dark:bg-blue-900/30 dark:text-blue-400"
                variants={item}
              >
                {t("hero.tagline")}
              </motion.div>

              <motion.h1
                className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-snug sm:leading-tight text-gray-900 dark:text-white"
                variants={item}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="block"
                >
                  {t("hero.titleLine1")}
                </motion.span>
                <motion.span
                  className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  {t("hero.titleLine2")}
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-sm sm:text-xl text-gray-600 dark:text-gray-400"
                variants={item}
              >
                {t("hero.description")}
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                variants={item}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold flex items-center justify-center space-x-1 sm:space-x-2 hover:shadow-lg transition-all duration-200"
                >
                  <span>{t("hero.startCourse")}</span>
                  <ArrowRight size={16} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold flex items-center justify-center space-x-1 sm:space-x-2 bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <span>{t("hero.learnMore")}</span>
                </motion.button>
              </motion.div>

              <motion.div
                className="flex flex-row sm:justify-start justify-between sm:items-center space-y-3 sm:space-y-0 sm:space-x-8 pt-6 sm:pt-8 text-gray-900 dark:text-white"
                variants={container}
              >
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="flex flex-col items-center"
                    variants={item}
                  >
                    <div className="text-2xl sm:text-3xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.figure className="relative" variants={item}>
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <div
                  style={{
                    backgroundImage: `url('${banner}')`,
                  }}
                  className="bg-cover aspect-video bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center"
                >
                  <Button
                    variant="secondary"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-xl"
                    aria-label="Play video"
                  >
                    <div className="absolute text-blue-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                      <VideoModal videoUrl={video} />
                    </div>
                  </Button>
                </div>
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-2xl bg-blue-100 blur-2xl dark:bg-blue-900/30"
                animate={{ rotate: [0, 15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              ></motion.div>
              <motion.div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-cyan-100 blur-2xl dark:bg-cyan-900/30"
                animate={{ rotate: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </motion.figure>
          </div>
        </div>
      </motion.section>
      <About />
      <DownloadSection />
    </>
  );
}
