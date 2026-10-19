"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHome, FiTool, FiUser } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";

const navigation = [
  { id: "home", name: "Home", icon: FiHome },
  { id: "projects", name: "Work", icon: CgWorkAlt },
  { id: "about", name: "About", icon: FiUser },
  { id: "skills", name: "Skills", icon: FiTool },
  { id: "contact", name: "Contact", icon: MdMail },
];

export default function Nav() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const current = [...navigation].reverse().find(({ id }) => {
        const section = document.getElementById(id);
        return section && section.getBoundingClientRect().top <= 180;
      });
      setActiveTab(current?.id ?? "home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      aria-label="Main navigation"
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.9 }}
      className="fixed top-0 left-0 right-0 p-4 sm:p-6 z-50 pointer-events-none"
    >
      <div className="w-fit max-w-full mx-auto flex items-center gap-1 md:gap-8 lg:gap-12 px-2 md:px-8 py-2 border border-[#2c2c2c] bg-zinc-900/70 backdrop-blur-md rounded-2xl pointer-events-auto">
        {navigation.map(({ id, name, icon: Icon }) => (
          <motion.a
            key={id}
            href={`#${id}`}
            aria-label={name}
            aria-current={activeTab === id ? "location" : undefined}
            onClick={() => setActiveTab(id)}
            whileTap={{ scale: 0.95 }}
            className="relative min-w-11 min-h-11 flex items-center justify-center text-white/90 hover:text-white rounded-lg"
          >
            <Icon aria-hidden="true" className="text-2xl md:hidden" />
            <span className="hidden md:inline text-base lg:text-lg font-medium">{name}</span>
            {activeTab === id && (
              <motion.span
                layoutId="activeTabUnderline"
                className="absolute bottom-0 left-2 right-2 h-0.5 bg-red-500 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 40 }}
              />
            )}
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
}
