import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ToggleI18n from "./Toggle-i18n";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import { navItems } from "@/constants";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, type Variants } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { x: "100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  const linkVariants: Variants = {
    hidden: { x: 20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.1 },
    }),
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-sm transition-colors"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              Online Maktab
            </motion.span>

            <div className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={linkVariants}
                >
                  <Link
                    to={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground font-medium"
                  >
                    {t(item.id)}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <AnimatedThemeToggler />
            <ToggleI18n />
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              onClick={() => setOpen(true)}
              className="p-2"
            >
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                <Menu size={24} />
              </motion.div>
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed inset-0 z-40 md:hidden pointer-events-none"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <motion.div className="fixed top-0 right-0 h-screen w-screen bg-background shadow-2xl pointer-events-auto flex flex-col">
              <div className="flex items-center justify-between p-5 border-b border-border">
                <motion.span
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Online Maktab
                </motion.span>
                <motion.button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded hover:bg-gray-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>
              </div>

              <nav className="flex-1 overflow-y-auto p-5 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    custom={index}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{
                      x: 0,
                      opacity: 1,
                      transition: { delay: index * 0.1 + 0.1 },
                    }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {t(item.id)}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-5 border-t border-border flex items-center justify-between">
                <AnimatedThemeToggler />
                <ToggleI18n />
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
