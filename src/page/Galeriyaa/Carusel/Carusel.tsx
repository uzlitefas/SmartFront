"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Maktab binosi",
    desc: "Zamonaviy va qulay maktab binosi",
    img: "https://aniq.uz/photos/603359e94b5b0.jpg",
  },
  {
    title: "O‘quv jarayoni",
    desc: "Dars mashg‘ulotlaridan lavhalar",
    img: "https://xalqtaliminfo.uz/storage/posts/1724666379photo_2024-08-26_14-661.jpg",
  },
  {
    title: "Kutubxona",
    desc: "Boy va zamonaviy kutubxona",
    img: "https://www.gazeta.uz/media/img/2021/02/efDUyO16140765617821_l.jpg",
  },
  {
    title: "Sport maydoni",
    desc: "Sport bilan shug‘ullanish uchun qulay sharoit",
    img: "https://storage.kun.uz/source/8/OkUtquyxI7fscIyox-tiMDhS9ieqKKw7.jpg",
  },
  {
    title: "Tadbirlar",
    desc: "Bayram va muhim tadbirlardan lavhalar",
    img: "https://storage.kun.uz/source/archive_15_05/RASMLAR/RASMLAR/RASMLAR/Rasmlar/Rasmlar/nav6.jpg",
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

export default function SchoolCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  // AUTO SLIDE – 5 sekund
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
    <section className="w-full flex justify-center">
      <div className="w-full max-w-6xl">
        <div className="relative h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden rounded-3xl shadow-xl bg-black">
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
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
            />
          </AnimatePresence>

          {/* GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

          {/* TEXT */}
          <div className="absolute bottom-0 left-0 p-5 sm:p-8 text-white max-w-lg">
            <h2 className="text-lg sm:text-2xl font-semibold">
              {slides[index].title}
            </h2>
            <p className="text-xs sm:text-sm text-white/80 mt-1">
              {slides[index].desc}
            </p>
          </div>

          {/* ARROWS */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2
                       bg-white/70 hover:bg-white text-black
                       rounded-full p-2 backdrop-blur shadow-md"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2
                       bg-white/70 hover:bg-white text-black
                       rounded-full p-2 backdrop-blur shadow-md"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDir(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
