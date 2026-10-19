"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import img1 from "./images/img1.png";
import img2 from "./images/img2.jpg";
import img4 from "./images/img4.jpg";

const projects = [
  {
    id: "techphone",
    title: "TechPhone Store",
    description: "A smartphone store with customer accounts, a shopping cart, and an admin dashboard.",
    technologies: ["PHP", "MySQL", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Smartphone_store",
    demo: "https://smartphone-store.rf.gd",
  },
  {
    id: "blini",
    title: "BLINI Restaurant",
    description: "A responsive restaurant website featuring an interactive menu and smooth page transitions.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    repository: "https://github.com/XtremeThaqi/Restaurant-App",
    demo: "https://blini.netlify.app",
    image: img1,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "A lightweight desktop app for creating, completing, and organizing tasks.",
    technologies: ["Python", "Tkinter"],
    repository: "https://github.com/XtremeThaqi/taskflow",
    image: img2,
  },
  {
    id: "techinsights",
    title: "TechInsights",
    description: "A technology news interface with article browsing and category filtering.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Technology-News",
    demo: "https://erblinthaqi-tech.netlify.app",
    image: img4,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-[#0a0a0a] py-24 sm:py-32 px-5 sm:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="projects-heading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-3xl sm:text-4xl md:text-5xl font-bold text-stone-200"
        >
          Selected Work
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <motion.article
              key={project.id}
              aria-labelledby={`${project.id}-title`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              className="group min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-[#151515] transition-colors hover:border-zinc-600"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#101010]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1c1111] via-[#111] to-[#080808]"
                    aria-label="TechPhone Store project"
                  >
                    <span aria-hidden="true" className="select-none text-6xl sm:text-7xl font-bold tracking-tighter text-red-500/80">
                      TP<span className="text-zinc-500">.</span>
                    </span>
                  </div>
                )}
              </div>

              <div className="p-5 sm:p-6">
                <h3 id={`${project.id}-title`} className="text-xl sm:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <ul aria-label={`${project.title} technologies`} className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-lg border border-zinc-800 bg-[#1c1c1c] px-3 py-1.5 text-xs font-medium text-zinc-300">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-5 text-sm font-medium">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
                    className="inline-flex min-h-11 items-center gap-2 text-zinc-300 transition-colors hover:text-white"
                  >
                    <FaGithub aria-hidden="true" /> Source code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} live demo (opens in a new tab)`}
                      className="inline-flex min-h-11 items-center gap-2 text-red-400 transition-colors hover:text-red-300"
                    >
                      Live demo <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
