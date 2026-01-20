import { footerData } from "@/constants";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const [lang, setLang] = useState("uz");
=======
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Footer() {
  const { about, portfolio, social, contact, footerBottom } = footerData;
  const [showTop, setShowTop] = useState(false);
>>>>>>> b22c43d230446631a770324229d009ae47a0dadb

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
<<<<<<< HEAD

    const savedLang = localStorage.getItem("lang");
    if (savedLang) setLang(savedLang);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const { about, portfolio, social, contact, footerBottom } = footerData[lang];

  return (
    <>
      <footer className="relative rounded-2xl px-4 sm:px-8 lg:px-14 py-10 sm:py-14 bg-gradient-to-br from-[#05071A] to-[#0B0F2E] dark:from-black dark:to-neutral-900 text-white">
        {/* Language switch */}
        <div className="absolute top-4 right-4 flex gap-2">
          {["uz", "ru", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs rounded-md uppercase ${
                lang === l ? "bg-white text-black" : "bg-white/20 text-white"
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-3">{about.title}</h3>
            <p className="text-white/70 text-sm mb-5">{about.description}</p>
            <button className="bg-white text-black px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-200">
              {about.buttonText}
            </button>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-4">
=======
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.footer
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          relative
          bg-gradient-to-br from-[#05071A] to-[#0B0F2E]
          text-white
          rounded-2xl
          px-4 sm:px-8 lg:px-14
          py-10 sm:py-14
        "
      >
        <div
          className="
            max-w-7xl mx-auto
            grid grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-10
            text-center sm:text-left
          "
        >
          <motion.div variants={item}>
            <h3 className="text-lg font-semibold mb-3">{about.title}</h3>
            <p className="text-white/70 text-sm mb-5 leading-relaxed">
              {about.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex
                bg-white text-black
                px-5 py-2.5
                rounded-lg
                text-sm font-medium
                hover:bg-gray-200
                transition
              "
            >
              {about.buttonText}
            </motion.button>
          </motion.div>
          <motion.div variants={item}>
            <h4 className="text-xs font-semibold tracking-widest text-white/80 mb-4">
>>>>>>> b22c43d230446631a770324229d009ae47a0dadb
              {portfolio.title}
            </h4>
            <ul className="space-y-3">
              {portfolio.links.map((link, i) => (
<<<<<<< HEAD
                <li key={i}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-4">
=======
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <Link
                    to={link.to}
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h4 className="text-xs font-semibold tracking-widest text-white/80 mb-4">
>>>>>>> b22c43d230446631a770324229d009ae47a0dadb
              {social.title}
            </h4>
            <ul className="space-y-3">
              {social.links.map((link, i) => (
<<<<<<< HEAD
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    className="text-sm text-white/70 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-white/80 mb-4">
=======
                <motion.li key={i} whileHover={{ x: 6 }}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/70 hover:text-white transition"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={item}>
            <h4 className="text-xs font-semibold tracking-widest text-white/80 mb-4">
>>>>>>> b22c43d230446631a770324229d009ae47a0dadb
              {contact.title}
            </h4>
            <p className="text-sm text-white/70">{contact.phone}</p>
            <p className="text-sm text-white/70">{contact.email}</p>
            <p className="text-xs text-white/50 mt-2">{contact.location}</p>
<<<<<<< HEAD
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between text-xs text-white/60">
          <span>{footerBottom.copyright}</span>
          <div className="flex gap-5">
            <Link to="/terms">{footerBottom.terms}</Link>
            <Link to="/privacy">{footerBottom.privacy}</Link>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-5 right-5 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center shadow-xl"
=======
          </motion.div>
        </div>
        <motion.div
          variants={item}
          className="
            mt-10 pt-6
            border-t border-white/10
            flex flex-col sm:flex-row
            gap-3
            items-center justify-between
            text-xs sm:text-sm
            text-white/60
          "
        >
          <span>{footerBottom.copyright}</span>
          <div className="flex gap-5">
            <Link to="/terms" className="hover:text-white transition">
              {footerBottom.terms}
            </Link>
            <Link to="/privacy" className="hover:text-white transition">
              {footerBottom.privacy}
            </Link>
          </div>
        </motion.div>
      </motion.footer>
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
              fixed bottom-5 right-5 sm:bottom-6 sm:right-6
              z-50
              bg-white text-black
              w-10 h-10 sm:w-11 sm:h-11
              rounded-full
              flex items-center justify-center
              shadow-xl
              hover:bg-gray-200
              transition
            "
            aria-label="Scroll to top"
>>>>>>> b22c43d230446631a770324229d009ae47a0dadb
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
