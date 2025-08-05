"use client"
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaDatabase, FaReact, FaPhp, FaLaravel } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { SiMysql } from 'react-icons/si';

export default function About() {
    const skills = [
        { icon: <FaReact className="text-2xl text-blue-400" />, name: "React" },
        { icon: <RiNextjsFill className="text-2xl" />, name: "Next.js" },
        { icon: <RiTailwindCssFill className="text-2xl text-cyan-400" />, name: "Tailwind" },
        { icon: <FaPhp className="text-2xl text-purple-500" />, name: "PHP" },
        { icon: <FaLaravel className="text-2xl text-red-500" />, name: "Laravel" },
        { icon: <SiMysql className="text-2xl text-blue-300" />, name: "MySQL" },
        { icon: <TbBrandFramerMotion className="text-2xl text-pink-500" />, name: "Framer Motion" },
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-black to-gray-900 flex items-center justify-center py-20 px-4" id="about">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-2"
                    >
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                            About Me
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full"></div>
                            <h3 className="text-xl text-gray-300">
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
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hi there! I'm <span className="text-red-500 font-medium">Erblin Thaqi</span>, a passionate full-stack developer from Kosovo. 
                            I specialize in building modern web applications with React, Next.js, and PHP/Laravel.
                        </p>
                        
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I create responsive interfaces while implementing robust server-side functionality. 
                            My approach combines creative problem-solving with clean, efficient code.
                        </p>

                        <div className="flex flex-wrap gap-4 mt-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ y: -5 }}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
                                >
                                    {skill.icon}
                                    <span className="text-gray-300">{skill.name}</span>
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
                            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-medium shadow-lg hover:shadow-red-500/30 transition-all"
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
                            <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                <FaCode className="text-4xl text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-medium">Frontend</h4>
                                <p className="text-gray-400">React, Next.js, Tailwind</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6 ml-12">
                            <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                <FaServer className="text-4xl text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-medium">Backend</h4>
                                <p className="text-gray-400">PHP, Laravel, Node.js</p>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-gray-800 rounded-xl border border-gray-700 shadow-lg">
                                <FaDatabase className="text-4xl text-red-500" />
                            </div>
                            <div>
                                <h4 className="text-xl text-white font-medium">Database</h4>
                                <p className="text-gray-400">MySQL</p>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 p-6 bg-gray-800/50 border-l-4 border-red-600 rounded-r-lg"
                    >
                        <p className="text-lg italic text-gray-300">
                            "Confusion is part of programming."
                        </p>
                        <p className="text-red-400 mt-2">— Felienne Hermans</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}