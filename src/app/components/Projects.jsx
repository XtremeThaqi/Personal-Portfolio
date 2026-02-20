"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img1 from "./images/img1.png"; // BLINI Restaurant App
import img2 from "./images/img2.png"; // QuickTasks To-Do App
import img4 from "./images/img4.png"; // TechBit News Portal

export default function Projects() {
  const projects = [
    {
      title: "BLINI Restaurant",
      image: img1,
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: "https://blini.netlify.app",
    },
    {
      title: "QuickTasks",
      image: img2,
      technologies: ["Next.js", "Tailwind CSS"],
      link: "https://quicktaskss.netlify.app",
    },
    {
      title: "TechBit News",
      image: img4,
      technologies: ["HTML", "JavaScript", "Tailwind CSS"],
      link: "https://erblinthaqi-tech.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#0a0a0a] py-24 sm:py-32 px-5 sm:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold text-start tracking-wide text-stone-200"
          >
            My Projects
          </motion.h2>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.15 }}
              className="group bg-[#151515] rounded-3xl overflow-hidden shadow-lg"
            >

              <div className="rounded-lg p-4 sm:p-8 space-y-8">
                <div className="relative rounded-xl overflow-hidden aspect-[16/9] border border-zinc-800/80 ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
              </div>

              {/* Text below */}
              <div className="flex flex-col sm:flex-row items-start sm:items-end px-10 sm:px-5 py-5 gap-5 justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">
                    {project.title}
                  </h3>

                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-xl mx-auto">
                    {project.description}
                  </p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap justify-center gap-3 pt-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="
                        px-4 py-2 text-xs sm:text-sm font-medium
                        bg-zinc-900/70 text-zinc-300 rounded-xl
                        border border-zinc-800/50
                      "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-3 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-move-up-right size-5 sm:size-8 text-dark-200 cz-color-1710618 cz-color-15460325"><path d="M13 5H19V11" className="cz-color-1710618 cz-color-15460325"></path><path d="M19 5L5 19" className="cz-color-1710618 cz-color-15460325"></path></svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}