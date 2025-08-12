"use client"
import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaLaravel
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5", category: "Frontend" },
    { icon: <FaCss3Alt />, name: "CSS3", category: "Frontend" },
    { icon: <RiTailwindCssFill />, name: "Tailwind", category: "Frontend" },
    { icon: <FaJs />, name: "JavaScript", category: "Frontend" },
    { icon: <FaReact />, name: "React", category: "Frontend" },
    { icon: <RiNextjsFill />, name: "Next.js", category: "Frontend" },
    { icon: <TbBrandFramerMotion />, name: "Framer Motion", category: "Frontend" },
    { icon: <FaFigma />, name: "Figma", category: "Design" },
    { icon: <FaPhp />, name: "PHP", category: "Backend" },
    { icon: <SiMysql />, name: "MySQL", category: "Backend" },
    { icon: <FaLaravel />, name: "Laravel", category: "Backend" },
  ];

  return (
    <section className="relative py-20 px-4 bg-black" id="skills">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900/80 to-black/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
            My Toolkit
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05, transition: { duration: 0.3 } }}
              className="group relative p-6 rounded-xl bg-gray-900 border border-gray-800 flex flex-col items-center transition-all"
            >
              <div className="text-4xl mb-3 text-red-500 group-hover:text-white transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-lg font-medium text-white select-none cursor-default">{skill.name}</h3>
              <span className="text-xs text-gray-400 mt-1 select-none cursor-default">{skill.category}</span>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-xl"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}