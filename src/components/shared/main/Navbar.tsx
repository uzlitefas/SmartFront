import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "@/constants";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import ToggleI18n from "./Toggle-i18n";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const navVariants: Variants = {
    hidden: { y: -40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm"
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-2xl font-bold text-transparent">
            Online Maktab
          </span>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <AnimatedThemeToggler />
              <ToggleI18n />
            </div>
            <div className="lg:hidden">
              <Button
                variant="default"
                size="icon"
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.aside
            className="fixed left-0 right-0 top-16 bottom-0 z-40 lg:hidden bg-background"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 32,
              mass: 0.9,
            }}
          >
            <div className="flex h-full flex-col">
              <div className="w-full border-b border-border bg-background/95 backdrop-blur-sm">
                <nav className="flex-1 p-5 space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ y: -6, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 30,
                          delay: index * 0.04,
                        },
                      }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-4 py-3 text-lg font-medium transition-colors hover:bg-accent"
                      >
                        {t(item.key)}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="flex items-center justify-between p-5 border-t border-border">
                  <AnimatedThemeToggler />
                  <ToggleI18n />
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
