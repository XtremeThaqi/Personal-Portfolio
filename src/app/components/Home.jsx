"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export const socialLinks = [
    { label: "GitHub profile", icon: <FaGithub aria-hidden="true" />, href: "https://github.com/XtremeThaqi" },
    { label: "LinkedIn profile", icon: <FaLinkedinIn aria-hidden="true" />, href: "https://linkedin.com/in/erblinthaqi" },
];

export default function Home() {
    
    return (
        <section tabIndex={-1} id="home" className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black flex items-center justify-center px-5 sm:px-8 overflow-hidden mx-auto">
            <div className="z-10 w-full max-w-6xl pt-28 pb-16">
                {/* Main name */}
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
                    className="text-6xl sm:text-7xl lg:text-8xl font-black text-white tracking-tighter text-center leading-none mb-6"
                >
                    Erblin Thaqi
                </motion.h1>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.9 }}
                    className="text-2xl sm:text-3xl text-zinc-400 font-light text-center max-w-3xl mx-auto mb-4 tracking-wider"
                >
                    Full-Stack Developer building{" "}
                    <span className="text-red-500 font-medium">web applications</span>
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                    className="text-lg text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed mb-8 tracking-tight"
                >
                    I&apos;m a developer from Kosovo. I build web interfaces with React and Next.js
                    and backend features with PHP, Laravel, and MySQL.
                </motion.p>

                <p className="text-sm text-zinc-400 text-center mb-8">Open to junior developer and internship opportunities.</p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
                    <motion.a
                        href="#projects"
                        className="px-10 py-4 bg-white text-black font-semibold rounded-2xl flex items-center justify-center gap-2 border"
                    >
                        View my work →
                    </motion.a>

                    <motion.a href="#contact"
                        className="px-10 py-4 border border-[#1f1f1f] text-white font-medium rounded-2xl  transition-all duration-300 ease-in-out bg-[#141414] hover:border-[#2c2c2c] hover:bg-zinc-800/40 text-center"
                    >
                        Get in touch
                    </motion.a>
                </motion.div>

                <div className="flex flex-col items-center gap-10">
                    {/* Socials */}
                    <div className="flex gap-6">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                aria-label={social.label}
                                rel="noopener noreferrer"
                                target={social.href ? "_blank" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                whileHover={{ color: "#ffffff", borderColor: "#2c2c2c" }}
                                title={social.label}
                                className="w-14 h-14 bg-[#141414] border border-[#1f1f1f] rounded-2xl flex items-center justify-center text-2xl text-gray-400 cursor-pointer"
                            >
                                {social.icon}
                                <span className="sr-only">{social.label}</span>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}