"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiMysql } from "react-icons/si";

export default function Skills() {
  const skills = [
    {
      icon: <FaFigma className="w-8 h-8 text-red-500" />,
      name: "Figma",
      description: "Design Tool",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaReact className="w-8 h-8 text-[#61DAFB]" />,
      name: "React",
      description: "JavaScript Library",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <RiNextjsFill className="w-8 h-8 text-white" />,
      name: "NextJS",
      description: "React framework",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <RiTailwindCssFill className="w-8 h-8 text-[#06B6D4]" />,
      name: "Tailwind",
      description: "CSS framework",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" />,
      name: "JavaScript",
      description: "Programming Language",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" />,
      name: "HTML5",
      description: "Markup Language",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" />,
      name: "CSS3",
      description: "Styling Language",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <TbBrandFramerMotion className="w-8 h-8 text-[#FF0050]" />,
      name: "Framer Motion",
      description: "Animation Library",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaPhp className="w-8 h-8 text-[#777BB4]" />,
      name: "PHP",
      description: "Server-side Language",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
      name: "MySQL",
      description: "Relational Database",
      bgColor: "bg-[#1E1E1E]",
    },
    {
      icon: <FaLaravel className="w-8 h-8 text-[#FF2D20]" />,
      name: "Laravel",
      description: "PHP Framework",
      bgColor: "bg-[#1E1E1E]",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-black via-zinc-950 to-black text-white" id="skills">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-start mb-16 tracking-tight">
          Current technologies
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative rounded-2xl border border-[#1f1f1f] bg-gradient-to-b from-[#141414] to-[#0f0f0f] hover:border-[#2c2c2c] transition-all duration-300"
            >
              <div className="flex items-center gap-5 p-3">
                <div
                  className={`size-14 rounded-xl flex items-center justify-center 
                              ${skill.bgColor} border border-[#2a2a2a] group-hover:border-[#3a3a3a] transition-all duration-300`}
                >
                  {skill.icon}
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {skill.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {skill.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}