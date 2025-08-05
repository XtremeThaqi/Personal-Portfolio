"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function With() {
    const technologies = [
        {
            id: 1,
            name: "Next.js",
            href: 'https://nextjs.org',
            icon: <RiNextjsFill className="text-3xl" />,
            color: "text-white hover:text-gray-300",
            bg: "bg-black hover:bg-gray-900"
        },
        {
            id: 2,
            name: "Tailwind CSS",
            href: 'https://tailwindcss.com',
            icon: <RiTailwindCssFill className="text-3xl text-cyan-400" />,
            color: "text-cyan-400 hover:text-cyan-300",
            bg: "bg-gray-900 hover:bg-gray-800"
        },
        {
            id: 3,
            name: "Framer Motion",
            href: 'https://www.framer.com/motion/',
            icon: <TbBrandFramerMotion className="text-3xl text-pink-500" />,
            color: "text-pink-500 hover:text-pink-400",
            bg: "bg-gray-800 hover:bg-gray-700"
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center mb-12"
                >
                    <motion.div
                        whileHover={{ rotate: 15 }}
                        className="mb-4"
                    >
                        <FaTools className="text-5xl text-red-600" />
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                        Built With Modern Technologies
                    </h2>
                    <p className="text-lg text-gray-400 mt-2 max-w-md">
                        Powerful tools that bring this website to life
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center flex-wrap gap-6"
                >
                    {technologies.map((tech) => (
                        <motion.a
                            key={tech.id}
                            href={tech.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -8 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${tech.bg} ${tech.color} p-6 rounded-xl border border-gray-800 shadow-lg flex flex-col items-center transition-all duration-300 w-full max-w-xs`}
                        >
                            <div className="mb-4">
                                {tech.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{tech.name}</h3>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}