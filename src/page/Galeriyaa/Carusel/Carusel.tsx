"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: {
      uz: "Maktab binosi",
      ru: "Здание школы",
      en: "School Building",
    },
    desc: {
      uz: "Zamonaviy va qulay maktab binosi",
      ru: "Современное и удобное здание школы",
      en: "Modern and comfortable school building",
    },
    img: "/public/603359e94b5b0.jpg",
  },
  {
    title: {
      uz: "O‘quv jarayoni",
      ru: "Учебный процесс",
      en: "Learning Process",
    },
    desc: {
      uz: "Dars mashg‘ulotlaridan lavhalar",
      ru: "Моменты уроков",
      en: "Scenes from lessons",
    },
    img: "/public/1724666379photo_2024-08-26_14-661.jpg",
  },
  {
    title: {
      uz: "Kutubxona",
      ru: "Библиотека",
      en: "Library",
    },
    desc: {
      uz: "Boy va zamonaviy kutubxona",
      ru: "Богатая и современная библиотека",
      en: "Rich and modern library",
    },
    img: "/public/efDUyO16140765617821_l.jpg",
  },
  {
    title: {
      uz: "Sport maydoni",
      ru: "Спортивная площадка",
      en: "Sports Area",
    },
    desc: {
      uz: "Sport bilan shug‘ullanish uchun qulay sharoit",
      ru: "Удобные условия для занятий спортом",
      en: "Comfortable conditions for sports activities",
    },
    img: "/public/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    title: {
      uz: "Tadbirlar",
      ru: "Мероприятия",
      en: "Events",
    },
    desc: {
      uz: "Bayram va muhim tadbirlardan lavhalar",
      ru: "Моменты праздников и важных мероприятий",
      en: "Scenes from celebrations and important events",
    },
    img: "/public/nav6.jpg",
  },
];

const slideAnim = {
  enter: (d: number) => ({
    x: d > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (d: number) => ({
    x: d < 0 ? 80 : -80,
    opacity: 0,
  }),
};

export default function SchoolCarousel({ lang = "uz" }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDir(1);
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const next = () => {
    setDir(1);
    setIndex((i) => (i + 1) % slides.length);
  };

  const prev = () => {
    setDir(-1);
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="w-full flex justify-center py-12 bg-white dark:bg-gray-900"
      aria-label="School photo carousel"
    >
      <div className="relative w-full max-w-6xl rounded-3xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="relative h-[250px] sm:h-[350px] lg:h-[420px]">
          <AnimatePresence custom={dir} mode="wait">
            <motion.img
              key={index}
              src={slides[index].img}
              custom={dir}
              variants={slideAnim}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover will-change-transform rounded-3xl"
              alt={slides[index].title[lang]}
              draggable={false}
              loading="lazy"
            />
          </AnimatePresence>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/90 via-black/60 to-transparent" />

          <div className="absolute bottom-0 left-0 p-8 max-w-xl text-white drop-shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
              {slides[index].title[lang]}
            </h2>
            <p className="mt-2 text-md sm:text-xl font-medium text-white/90 max-w-md">
              {slides[index].desc[lang]}
            </p>
          </div>
        </div>

        <button
          aria-label="Previous slide"
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-indigo-600 hover:text-indigo-900
                     rounded-full p-2 backdrop-blur-md
                     transition duration-200 ease-in-out
                     flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
          style={{ boxShadow: "none" }}
        >
          <ChevronLeft size={18} />
        </button>

        <button
          aria-label="Next slide"
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2
                     bg-white/80 hover:bg-white text-indigo-600 hover:text-indigo-900
                     rounded-full p-2 backdrop-blur-md
                     transition duration-200 ease-in-out
                     flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-400"
          style={{ boxShadow: "none" }}
        >
          <ChevronRight size={18} />
        </button>

        <div className="flex justify-center gap-4 mt-8 pb-6">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-3 rounded-full transition-all duration-300
                ${
                  i === index
                    ? "w-10 bg-indigo-600 shadow-lg shadow-indigo-400/60"
                    : "w-3 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
