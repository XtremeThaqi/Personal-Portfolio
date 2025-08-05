"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import img3 from './images/img3.png';
import img4 from './images/img4.png';
import { RiNextjsFill, RiTailwindCssFill, RiGithubFill, } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import { SiPhp, SiMysql } from 'react-icons/si';
import { FaHtml5, FaJs } from 'react-icons/fa';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Restaurant App",
      description: "BLINI is a sleek and user-friendly restaurant app that allows users to explore menus, book tables, and read customer testimonials.",
      image: img1,
      technologies: [
        { icon: <RiNextjsFill className="text-2xl text-red-500" />, name: "Next.js" },
        { icon: <TbBrandFramerMotion className="text-2xl text-pink-500" />, name: "Framer" },
        { icon: <RiTailwindCssFill className="text-2xl text-cyan-400" />, name: "Tailwind" }
      ],
      link: "https://blini.netlify.app"
    },
    {
      title: "ToDo App",
      description: "Helps users manage daily tasks and goals in a simple, organized way for personal productivity or team collaboration.",
      image: img2,
      technologies: [
        { icon: <RiNextjsFill className="text-2xl text-red-500" />, name: "Next.js" },
        { icon: <RiTailwindCssFill className="text-2xl text-cyan-400" />, name: "Tailwind" }
      ],
      link: "https://quicktaskss.netlify.app"
    },
    {
      title: "Smartphone E-commerce Store",
      description: "A complete online smartphone store with product catalog, shopping cart, and admin dashboard.",
      image: img3,
      technologies: [
        { icon: <SiPhp className="text-2xl text-purple-500" />, name: "PHP" },
        { icon: <SiMysql className="text-2xl text-blue-500" />, name: "MySQL" },
        { icon: <RiTailwindCssFill className="text-2xl text-cyan-400" />, name: "Tailwind" }
      ],
      link: "https://smartphone-store.rf.gd"
    },
    {
      title: "Technology News Portal",
      description: "A responsive news website featuring the latest tech articles, with dark/light mode and dynamic content loading.",
      image: img4,
      technologies: [
        { icon: <FaHtml5 className="text-2xl text-orange-500" />, name: "HTML" },
        { icon: <FaJs className="text-2xl text-yellow-400" />, name: "JavaScript" },
        { icon: <RiTailwindCssFill className="text-2xl text-cyan-400" />, name: "Tailwind" }
      ],
      link: "https://erblinthaqi-tech.netlify.app"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pt-24 pb-32 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16 max-w-[100%]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 mb-4">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-400">
              Building digital experiences with modern technologies
            </p>
          </motion.div>

          <motion.a
            href="https://github.com/XtremeThaqi"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-0 w-fit px-6 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all flex items-center gap-2"
          >
            <RiGithubFill className="text-xl" />
            See All
          </motion.a>
        </div>

        <div className="space-y-24">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-800 group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 flex gap-3">
                  {project.technologies.map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="p-2 bg-black/80 backdrop-blur-sm rounded-lg border border-gray-800"
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
                <motion.h2
                  className="text-4xl font-bold text-white"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {project.title}
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className={index % 2 === 1 ? 'lg:flex lg:justify-end' : ''}
                >
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-medium hover:shadow-lg hover:shadow-red-500/30 transition-all"
                  >
                    View Live Demo
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && projects.length > 2 && (
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAll(true)}
              className="flex items-center gap-2 mx-auto px-8 py-3 rounded-full bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 transition-all"
            >
              See More Projects <FiChevronDown className="text-xl" />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  )
}