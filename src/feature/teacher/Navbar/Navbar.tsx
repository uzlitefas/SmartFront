"use client";

import { useState } from "react";
import { Home, User, Users, PlusSquare, LogOut, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { icon: Home, label: "Home" },
  { icon: User, label: "Profile" },
  { icon: Users, label: "Students" },
  { icon: PlusSquare, label: "Add Task" },
  { icon: LogOut, label: "Logout" },
];

export default function TeacherNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🍔 Mobile menu button (faqat mobil) */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-xl bg-black/80 text-white"
      >
        <Menu size={22} />
      </button>

      {/* Overlay (mobil) */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Navbar */}
      <div
        className={`
    fixed z-50
    left-4 top-1/2 -translate-y-1/2
    md:left-0
    transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  `}
      >
        <div className="w-24 flex items-center justify-center">
          <div className="flex flex-col gap-4 bg-black/80 backdrop-blur-xl p-3 rounded-2xl shadow-2xl">
            {/* ❌ close (faqat mobil) */}
            <button
              onClick={() => setOpen(false)}
              className="md:hidden text-white mb-2"
            >
              <X size={20} />
            </button>

            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative flex items-center justify-center w-12 h-12 rounded-xl text-white hover:bg-blue-500 transition-all duration-300"
                >
                  <Icon size={22} />

                  {/* Tooltip (desktop only) */}
                  <span className="hidden md:block absolute left-16 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
