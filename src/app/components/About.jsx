"use client";

import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';

export default function About() {
    const skills = [
        { icon: <FaReact className="text-2xl text-cyan-400" />, name: "React" },
        { icon: <RiNextjsFill className="text-2xl text-white" />, name: "Next.js" },
        { icon: <RiTailwindCssFill className="text-2xl text-teal-400" />, name: "Tailwind" },
        { icon: <FaPhp className="text-2xl text-purple-500" />, name: "PHP" },
        { icon: <FaLaravel className="text-2xl text-rose-500" />, name: "Laravel" },
        { icon: <SiMysql className="text-2xl text-blue-400" />, name: "MySQL" },
        { icon: <TbBrandFramerMotion className="text-2xl text-pink-500" />, name: "Framer Motion" },
    ];

    const expertise = [
        {
            icon: <FaCode className="text-4xl text-red-500" />,
            title: "Frontend",
            description: "React, Next.js, Tailwind",
        },
        {
            icon: <FaServer className="text-4xl text-red-500" />,
            title: "Backend",
            description: "PHP, Laravel",
            indent: true, // to apply ml-12 on this one
        },
        {
            icon: <FaDatabase className="text-4xl text-red-500" />,
            title: "Database",
            description: "MySQL",
        },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 flex items-center justify-center py-32 px-5 sm:px-8" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h2 className="text-5xl font-bold text-gray-200">
                            About Me
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1 bg-red-500 rounded-full"></div>
                            <h3 className="text-xl text-zinc-300">
                                Full-Stack Developer
                            </h3>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            Hi there! I'm <span className="font-bold">Erblin Thaqi</span>, a passionate full-stack developer from Kosovo.
                            I specialize in building modern web applications with React, Next.js, and PHP/Laravel.
                        </p>
                        <p className="text-lg text-zinc-300 leading-relaxed">
                            I create responsive interfaces while implementing robust server-side functionality.
                            My approach combines creative problem-solving with clean, efficient code.
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    viewport={{ once: true }}
                                    className="select-none cursor-default flex items-center gap-2 px-4 py-2 bg-zinc-900/70 backdrop-blur-md border border-zinc-800/50 rounded-lg"
                                >
                                    {skill.icon}
                                    <span className="text-zinc-200">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="pt-8"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            viewport={{ once: true }}
                            className="px-10 py-5 border border-[#1f1f1f] text-center text-white font-medium rounded-2xl text-lg transition-all duration-300 ease-in-out bg-[#141414] hover:border-[#2c2c2c] hover:bg-zinc-800/40"
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>
                </div>

                {/* Right Column - Visual Elements */}
                <motion.div
                    className="hidden lg:flex flex-col gap-8"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Full-Stack Visualization */}
                    <div className="space-y-12">
                        {expertise.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center gap-6 ${item.indent ? "ml-12" : ""}`}
                            >
                                <div className="p-4 bg-zinc-900/70 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg">
                                    {item.icon}
                                </div>
                                <div className="select-none cursor-default">
                                    <h4 className="text-xl text-white font-medium">{item.title}</h4>
                                    <p className="text-zinc-400">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}