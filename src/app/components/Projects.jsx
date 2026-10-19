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
    category: "Full-stack web application",
    description: "A smartphone storefront connecting a PHP interface to a MySQL database, with separate customer and admin workflows.",
    features: [
      "Registration and session-based login with password hashing.",
      "Database-backed cart with quantity updates and item removal.",
      "Checkout code stores orders and order items in a transaction.",
      "Admin product creation, editing, deletion, and image uploads.",
    ],
    scope: "Learning project. Checkout records orders; online payment processing is not integrated. Deployment and end-to-end behavior need further validation.",
    technologies: ["PHP", "MySQL", "MySQLi", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Smartphone_store",
    demo: "https://smartphone-store.rf.gd",
    demoNote: "Hosted demo availability may vary.",
  },
  {
    id: "blini",
    title: "BLINI Restaurant",
    category: "Frontend concept",
    description: "A restaurant presentation site built with Next.js, combining a food menu, opening hours, and animated page sections.",
    features: [
      "Menu cards with dish descriptions and prices.",
      "About, testimonials, opening hours, and contact sections.",
      "Responsive layouts and Framer Motion transitions.",
    ],
    scope: "UI concept for a fictional restaurant. The booking form has no reservation backend, and menu links lead to the contact section.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    repository: "https://github.com/XtremeThaqi/Restaurant-App",
    demo: "https://blini.netlify.app",
    image: img1,
    imageAlt: "Existing BLINI Restaurant project preview",
  },
  {
    id: "taskflow",
    title: "TaskFlow",
    category: "Desktop prototype",
    description: "A Python desktop task manager with a Tkinter interface for organizing pending and completed tasks during a session.",
    features: [
      "Add tasks with a button or the Enter key.",
      "Mark tasks complete and remove selected tasks.",
      "Separate pending and completed items in a scrollable list.",
    ],
    scope: "Core task interactions are implemented. Tasks are kept in memory and reset when the application closes; there is no browser demo.",
    technologies: ["Python", "Tkinter", "ttk"],
    repository: "https://github.com/XtremeThaqi/taskflow",
    image: img2,
    imageAlt: "Existing TaskFlow project preview",
  },
  {
    id: "techinsights",
    title: "TechInsights",
    category: "Static frontend prototype",
    description: "A technology news interface built with HTML, JavaScript, and Tailwind CSS, using static article content.",
    features: [
      "Client-side filtering for technology and business articles.",
      "Home, articles, and about pages.",
      "Subscription form interaction with a confirmation alert.",
    ],
    scope: "Frontend prototype. Articles are static, and subscriptions are not stored or sent to a mailing service.",
    technologies: ["HTML", "JavaScript", "Tailwind CSS"],
    repository: "https://github.com/XtremeThaqi/Technology-News",
    demo: "https://erblinthaqi-tech.netlify.app",
    image: img4,
    imageAlt: "Existing TechInsights project preview",
  },
];

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="relative bg-[#0a0a0a] py-24 sm:py-32 px-5 sm:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-10 max-w-3xl space-y-4">
          <p className="text-sm font-medium uppercase tracking-widest text-red-400">Selected work</p>
          <h2 id="projects-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-200">Projects, with the details</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">From database-backed web applications to frontend and desktop experiments. Each project shows what is implemented and where its scope ends.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              aria-labelledby={`${project.id}-title`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: (index % 2) * 0.1 }}
              className="min-w-0 flex flex-col rounded-2xl bg-[#151515] border border-zinc-800 hover:border-red-500/40 transition-colors overflow-hidden"
            >
              {project.image ? (
                <div className="relative aspect-[16/10] m-4 sm:m-6 mb-0 sm:mb-0 rounded-xl overflow-hidden border border-zinc-800">
                  <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1280px) 580px, (min-width: 1024px) 45vw, 90vw" className="object-cover" />
                </div>
              ) : (
                <div className="aspect-[16/10] m-4 sm:m-6 mb-0 sm:mb-0 p-6 sm:p-10 rounded-xl border border-red-500/20 bg-gradient-to-br from-red-950/30 to-black flex flex-col justify-center gap-4">
                  <span className="text-xs uppercase tracking-widest text-red-400">Full-stack focus</span>
                  <p aria-hidden="true" className="text-3xl sm:text-4xl font-bold text-white">TechPhone Store</p>
                  <p className="text-zinc-400 leading-relaxed">PHP application logic · MySQL data · Customer and admin interfaces</p>
                  <span className="text-xs text-zinc-500">Project overview · Screenshot not included</span>
                </div>
              )}
              <div className="p-5 sm:p-8 flex flex-col flex-1">
                <p className="text-sm font-medium text-red-400 mb-3">{project.category}</p>
                <h3 id={`${project.id}-title`} className="text-2xl sm:text-3xl font-semibold text-white">{project.title}</h3>
                <p className="mt-4 text-zinc-300 leading-relaxed">{project.description}</p>
                <h4 className="mt-6 text-sm font-semibold text-white">Implemented in the source</h4>
                <ul className="mt-3 space-y-2 text-sm text-zinc-400 list-disc pl-5 marker:text-red-400">
                  {project.features.map((feature) => <li key={feature}>{feature}</li>)}
                </ul>
                <p className="mt-5 border-l-2 border-red-500/50 pl-4 text-sm text-zinc-400 leading-relaxed">{project.scope}</p>
                <ul aria-label={`${project.title} technologies`} className="flex flex-wrap gap-2 mt-6 mb-8">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="px-3 py-1.5 text-xs font-medium bg-[#1c1c1c] border border-[#2c2c2c] text-stone-200 rounded-lg">{tech}</li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source on GitHub (opens in a new tab)`} className="min-h-11 inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-4 py-3 text-sm text-white hover:bg-zinc-800 transition-colors">
                    <FaGithub aria-hidden="true" /> View source
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label={`Open ${project.title} live demo (opens in a new tab)`} className="min-h-11 inline-flex items-center gap-2 rounded-xl bg-red-600 hover:bg-red-700 px-4 py-3 text-sm text-white transition-colors">
                      Live demo <FaArrowUpRightFromSquare aria-hidden="true" />
                    </a>
                  )}
                </div>
                {project.demoNote && <p className="mt-3 text-xs text-zinc-400">{project.demoNote}</p>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
