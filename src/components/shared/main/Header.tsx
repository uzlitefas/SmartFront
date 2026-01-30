import { motion } from "framer-motion";
import { Phone, BookOpen, Image, Globe } from "lucide-react";

type HeaderType = "contact" | "news" | "courses" | "gallery";

interface HeaderProps {
  type: HeaderType;
}

const Header = ({ type }: HeaderProps) => {
  const headerData = {
    contact: {
      title: "Aloqa Bo'limi",
      description:
        "Biz bilan bog'lanish va yordam so'rash uchun shu yerga tashrif buyuring.",
      icon: Phone,
    },
    news: {
      title: "Yangiliklar Bo'limi",
      description: "So'nggi yangiliklar, e'lonlar va yangilanishlarni o'qing.",
      icon: Globe,
    },
    courses: {
      title: "Kurslar",
      description: "Turli kurslar va ta'lim materiallarini o'rganing.",
      icon: BookOpen,
    },
    gallery: {
      title: "Galareya",
      description: "Rasmlar va vizual materiallar bilan tanishing.",
      icon: Image,
    },
  };

  const data = headerData[type] || headerData.contact;

  return (
    <header className="md:pt-20 md:pb-10 pt-15 pb-5 relative w-full overflow-hidden text-white">
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--primary)" }}
      ></div>

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.1))",
        }}
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center md:items-start gap-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col md:flex-row items-center md:items-center gap-6"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <data.icon size={50} className="text-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight drop-shadow-lg">
              {data.title}
            </h1>
            <p className="mt-3 text-lg sm:text-xl md:text-2xl opacity-90 max-w-xl drop-shadow-md">
              {data.description}
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute top-10 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, ease: "easeOut" }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-1/3 w-64 h-64 bg-white/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
      ></motion.div>
    </header>
  );
};

export default Header;
