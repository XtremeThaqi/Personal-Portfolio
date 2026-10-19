"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    imageAlt: "BLINI Restaurant website preview",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "A Python desktop app for adding tasks, marking them complete, and keeping the day organized.",
    technologies: ["Python", "Tkinter"],
    repository: "https://github.com/XtremeThaqi/taskflow",
    image: img2,
    imageAlt: "TaskFlow desktop task manager preview",
  },
  {
    id: "techinsights",
    title: "TechInsights",
    description: "A technology news frontend with article browsing and category filters.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Technology-News",
    demo: "https://erblinthaqi-tech.netlify.app",
    image: img4,
    imageAlt: "TechInsights technology news website preview",
  },
];

const cardEntrance = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      tabIndex={-1}
      id="projects"
      aria-labelledby="projects-heading"
      className="relative bg-[#0a0a0a] px-5 py-24 sm:px-8 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          id="projects-heading"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className="mb-10 text-3xl font-bold text-stone-200 sm:text-4xl md:text-5xl"
        >
          Selected Work
        </motion.h2>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              data-project-card
              aria-labelledby={project.id + "-title"}
              variants={cardEntrance}
              initial={shouldReduceMotion ? false : "hidden"}
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.5,
                delay: shouldReduceMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative isolate flex h-full min-w-0 flex-col overflow-hidden rounded-[1.4rem] border border-white/[0.09] bg-[#111111] shadow-[0_18px_50px_-32px_rgba(0,0,0,0.95)] transition-[transform,border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.012] hover:border-red-500/45 hover:bg-[#131313] hover:shadow-[0_26px_70px_-38px_rgba(220,38,38,0.32)] focus-within:border-red-500/50 motion-reduce:transform-none motion-reduce:transition-none md:last:col-span-2 md:last:w-[calc((100%_-_1.5rem)/2)] md:last:justify-self-center lg:last:col-span-1 lg:last:w-auto"
            >
              <div className="p-3 pb-0">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem] bg-[#0b0b0b] ring-1 ring-inset ring-white/[0.08]">
                  <Image
                    data-project-image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 400px, (min-width: 768px) calc((100vw - 88px) / 2), calc(100vw - 40px)"
                    loading="lazy"
                    className="object-cover object-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05] motion-reduce:!transform-none motion-reduce:!transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-30 motion-reduce:transition-none"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-red-500/70 transition-transform duration-300 ease-out group-hover:scale-x-100 motion-reduce:hidden"
                  />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5 pt-4 sm:p-6 sm:pt-5">
                <h3
                  id={project.id + "-title"}
                  className="text-xl font-semibold tracking-[-0.02em] text-white sm:text-2xl"
                >
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
                  {project.description}
                </p>

                <ul
                  aria-label={project.title + " technologies"}
                  className="mt-4 flex flex-wrap gap-1.5"
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-white/[0.045] px-2.5 py-1 text-[11px] font-medium text-zinc-400 ring-1 ring-inset ring-white/[0.07]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-5 text-sm font-medium">
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"View " + project.title + " source code on GitHub (opens in a new tab)"}
                    className="group/action inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/[0.11] bg-white/[0.035] px-3 text-zinc-200 transition-[color,background-color,border-color,transform] duration-200 hover:border-white/20 hover:bg-white/[0.075] hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <FaGithub
                      aria-hidden="true"
                      className="text-base transition-transform duration-200 group-hover/action:scale-110 motion-reduce:!transform-none motion-reduce:!transition-none"
                    />
                    Source Code
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={"View " + project.title + " live demo (opens in a new tab)"}
                      className="group/action inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-red-500/70 bg-red-600 px-3.5 text-white shadow-[0_8px_24px_-14px_rgba(220,38,38,0.9)] transition-[background-color,border-color,box-shadow,transform] duration-200 hover:border-red-400 hover:bg-red-500 hover:shadow-[0_12px_28px_-14px_rgba(239,68,68,0.85)] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      Live Demo
                      <FaArrowUpRightFromSquare
                        aria-hidden="true"
                        className="text-xs transition-transform duration-200 group-hover/action:translate-x-0.5 group-hover/action:-translate-y-0.5 motion-reduce:!transform-none motion-reduce:!transition-none"
                      />
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
