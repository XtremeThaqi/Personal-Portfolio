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

    return (
        <section className="min-h-screen bg-gradient-to-b from-zinc-950 via-black to-zinc-950 flex items-center justify-center py-20 px-4" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
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
                        className="pt-8"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-10 py-5 border text-center border-zinc-700 text-white font-medium rounded-2xl hover:bg-zinc-800/50 text-lg"
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
                    transition={{ duration: 0.5 }}
                >
                    {/* Full-Stack Visualization */}
                    <div className="space-y-12">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-zinc-900/70 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg">
                                <FaCode className="text-4xl text-red-500" />
                            </div>
                            <div className="select-none cursor-default">
                                <h4 className="text-xl text-white font-medium">Frontend</h4>
                                <p className="text-zinc-400">React, Next.js, Tailwind</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 ml-12">
                            <div className="p-4 bg-zinc-900/70 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg">
                                <FaServer className="text-4xl text-red-500" />
                            </div>
                            <div className="select-none cursor-default">
                                <h4 className="text-xl text-white font-medium">Backend</h4>
                                <p className="text-zinc-400">PHP, Laravel</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-zinc-900/70 backdrop-blur-md border border-zinc-800/50 rounded-xl shadow-lg">
                                <FaDatabase className="text-4xl text-red-500" />
                            </div>
                            <div className="select-none cursor-default">
                                <h4 className="text-xl text-white font-medium">Database</h4>
                                <p className="text-zinc-400">MySQL</p>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 p-6 bg-zinc-900/50 backdrop-blur-md border-l-4 border-red-600 rounded-r-lg"
                    >
                        <p className="text-lg italic text-zinc-300">
                            "Confusion is part of programming."
                        </p>
                        <p className="text-red-500 mt-2">— Felienne Hermans</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}