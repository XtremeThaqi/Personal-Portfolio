"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FiHome, FiTool, FiUser } from "react-icons/fi";
import { MdMail } from "react-icons/md";
import { CgWorkAlt } from "react-icons/cg";

const navigation = [
  { id: "home", name: "Home", icon: FiHome },
  { id: "about", name: "About", icon: FiUser },
  { id: "skills", name: "Skills", icon: FiTool },
  { id: "projects", name: "Work", icon: CgWorkAlt },
  { id: "contact", name: "Contact", icon: MdMail },
];

export default function Nav() {
  const [activeTab, setActiveTab] = useState("home");
  const nav = useRef(null);
  const focusedLink = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      // Use page positions, not navigation order: Work appears before About.
      const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
        .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      const line = (nav.current?.getBoundingClientRect().bottom ?? 100) + 24;
      const current = sections.filter((section) => section.getBoundingClientRect().top <= line).at(-1);
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      setActiveTab(atBottom ? sections.at(-1)?.id ?? "home" : current?.id ?? "home");
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const focusAnchor = () => {
      const id = window.location.hash.slice(1);
      if (navigation.some((item) => item.id === id)) {
        document.getElementById(id)?.focus({ preventScroll: true });
      }
      schedule();
    };
    const breakpoint = window.matchMedia("(min-width: 768px)");
    const restoreFocus = () => {
      const focused = document.activeElement;
      if (focused instanceof HTMLElement && (nav.current?.contains(focused) || (focused === document.body && focusedLink.current))) {
        const id = focused.dataset.navId ?? focusedLink.current;
        const view = breakpoint.matches ? "desktop" : "mobile";
        nav.current.querySelector(`[data-view="${view}"] [data-nav-id="${id}"]`)?.focus({ preventScroll: true });
      }
      schedule();
    };
    const observer = new ResizeObserver(schedule);
    observer.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", focusAnchor);
    window.addEventListener("popstate", schedule);
    breakpoint.addEventListener("change", restoreFocus);
    schedule();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", focusAnchor);
      window.removeEventListener("popstate", schedule);
      breakpoint.removeEventListener("change", restoreFocus);
    };
  }, []);

  return (
    <motion.nav
      ref={nav}
      aria-label="Main navigation"
      onFocusCapture={(event) => { focusedLink.current = event.target.dataset.navId ?? null; }}
      onBlurCapture={(event) => { if (event.relatedTarget && !nav.current?.contains(event.relatedTarget)) focusedLink.current = null; }}
      initial={reduceMotion ? false : { opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: reduceMotion ? 0 : 0.9 }}
      className="fixed top-0 left-0 right-0 p-6 bg-transparent z-50 pointer-events-none"
    >
      <div className="flex justify-center pointer-events-auto">
        <div className="relative flex items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 border-[#2c2c2c] bg-zinc-900/70 backdrop-blur-md border rounded-2xl max-w-full md:max-w-5xl mx-auto">
          <div data-view="desktop" className="hidden md:flex items-center gap-10 lg:gap-14">
            {navigation.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                data-nav-id={item.id}
                aria-current={activeTab === item.id ? "location" : undefined}
                onClick={() => setActiveTab(item.id)}
                className="nav-target relative text-base lg:text-lg font-medium text-white/90 hover:text-white transition-colors duration-200"
              >
                {item.name}
                {activeTab === item.id && (
                  <motion.span
                    aria-hidden="true"
                    layoutId="activeTabUnderline"
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-white/80 rounded-full"
                    initial={false}
                    transition={reduceMotion ? { duration: 0 } : { type: "spring", stiffness: 300, damping: 40 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
          <div data-view="mobile" className="md:hidden flex items-center gap-6">
            {navigation.map(({ id, name, icon: Icon }) => (
              <motion.a
                key={id}
                href={`#${id}`}
                data-nav-id={id}
                aria-label={name}
                aria-current={activeTab === id ? "location" : undefined}
                onClick={() => setActiveTab(id)}
                whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                draggable="false"
                className="nav-target relative text-2xl text-white/80 hover:text-white transition-colors"
              >
                <Icon aria-hidden="true" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
