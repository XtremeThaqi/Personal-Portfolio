"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";
import { socialLinks } from "./Home";

export default function Footer() {

    return (
        <footer className="relative w-full bg-black border-t border-zinc-800/50 py-12 sm:py-16 px-5 sm:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Top section: Logo + Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-12">
                    {/* Logo & tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-600 tracking-tight">
                            Erblin Thaqi
                        </h2>
                        <p className="mt-2 text-sm sm:text-base text-zinc-500 font-light">
                            Full-Stack Developer • Crafting digital experiences
                        </p>
                    </motion.div>

                    {/* Social icons */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="flex items-center gap-5"
                    >
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.9 }}
                                className="w-12 h-12 bg-zinc-900/70 backdrop-blur-md border-zinc-800/50 flex items-center justify-center text-xl border border-[#1f1f1f] text-white font-medium rounded-2xl hover:border-[#2c2c2c] hover:bg-zinc-800/40"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom section: Copyright + Back to top */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-zinc-500 border-t border-zinc-800/50 pt-8">
                    <p>
                        © {new Date().getFullYear()} Erblin Thaqi. All rights reserved.
                    </p>

                    <motion.a
                        href="#home"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-2 px-5 py-2 bg-zinc-900/70 backdrop-blur-md border-zinc-800/50 justify-center text-sm border border-[#1f1f1f] text-white font-medium rounded-2xl hover:border-[#2c2c2c] hover:bg-zinc-800/40"
                    >
                        Back to Top
                        <FaArrowUp className="text-rose-500 h-4 w-4" />
                    </motion.a>
                </div>
            </div>
        </footer>
    );
}