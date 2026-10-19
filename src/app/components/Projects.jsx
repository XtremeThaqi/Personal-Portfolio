"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import img1 from "./images/img1.png";
import img2 from "./images/img2.jpg";
import img4 from "./images/img4.jpg";

const projects = [
  {
    id: "blini",
    title: "BLINI Restaurant",
    description: "A restaurant website concept with a food menu, opening hours, and animated sections.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    repository: "https://github.com/XtremeThaqi/Restaurant-App",
    demo: "https://blini.netlify.app",
    image: img1,
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "A Python desktop app for adding tasks, marking them complete, and keeping the day organized.",
    technologies: ["Python", "Tkinter"],
    repository: "https://github.com/XtremeThaqi/taskflow",
    image: img2,
  },
  {
    id: "techinsights",
    title: "TechInsights",
    description: "A technology news frontend with article browsing and category filters.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Technology-News",
    demo: "https://erblinthaqi-tech.netlify.app",
    image: img4,
  },
];

export default function Projects() {
  return (
    <section tabIndex={-1}
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
              className="group flex flex-col min-w-0 overflow-hidden rounded-2xl border border-zinc-800 bg-[#151515] transition-colors hover:border-red-500/40"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#101010]">
                <Image
                    src={project.image}
                    alt={project.id === "blini" ? "BLINI Restaurant website preview" : project.id === "taskflow" ? "TaskFlow desktop task manager preview" : "TechInsights technology news website preview"}
                    fill
                    sizes="(min-width: 1280px) 608px, (min-width: 768px) calc((100vw - 88px) / 2), calc(100vw - 40px)"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 id={`${project.id}-title`} className="text-xl sm:text-2xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <ul aria-label={`${project.title} technologies`} className="mt-5 mb-1 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="rounded-lg border border-zinc-800 bg-[#1c1c1c] px-3 py-1.5 text-xs font-medium text-zinc-300">
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 flex flex-wrap items-center gap-5 text-sm font-medium">
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
