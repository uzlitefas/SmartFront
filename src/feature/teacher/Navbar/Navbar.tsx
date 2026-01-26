"use client";

import { Home, User, Users, PlusSquare, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "Profile" },
  { icon: Users, label: "Students" },
  { icon: PlusSquare, label: "Add Task" },
  { icon: LogOut, label: "Logout" },
];

export default function TeacherNavbar() {
  const [visible, setVisible] = useState(true);

  // 📱 Scroll bo‘lsa – yashir, tepaga chiqsa – ko‘rsat
  useEffect(() => {
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScroll || current < 10);
      lastScroll = current;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= 📱 MOBILE FLOATING NAV ================= */}
      <motion.div
        animate={{
          y: visible ? 0 : 120,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="
          fixed bottom-4 left-1/2 -translate-x-1/2 z-50
          flex md:hidden
          pointer-events-auto
        "
        style={{
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div
          className="
            flex gap-3
            bg-black/80 backdrop-blur-xl
            px-4 py-3
            rounded-2xl shadow-2xl
          "
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  text-white
                  hover:bg-blue-500
                  transition
                "
              >
                <Icon size={22} />
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* ================= 📲 TABLET + DESKTOP SIDE NAV ================= */}
      <div
        className="
          fixed z-50
          hidden md:flex
          left-4 top-1/2 -translate-y-1/2
        "
      >
        <div
          className="
            flex flex-col gap-4
            bg-black/80 backdrop-blur-xl
            p-3 rounded-2xl shadow-2xl
          "
        >
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="
                  group relative
                  w-12 h-12
                  flex items-center justify-center
                  rounded-xl
                  text-white
                  hover:bg-blue-500
                  transition
                "
              >
                <Icon size={22} />

                {/* Tooltip – faqat katta ekran */}
                <span
                  className="
                    absolute left-16
                    hidden lg:block
                    opacity-0 group-hover:opacity-100
                    transition
                    bg-black text-white text-sm
                    px-3 py-1 rounded-lg
                    whitespace-nowrap
                  "
                >
                  {item.label}
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </>
  );
}
