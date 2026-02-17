"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export default function Home() {
    const [discordVisible, setDiscordVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showQR, setShowQR] = useState(false);

    const toggleDiscord = () => {
        setDiscordVisible(!discordVisible);
        setCopied(false);
    };

    const copyDiscord = () => {
        navigator.clipboard.writeText("thaqi_429");
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
    };

    const socialLinks = [
        { icon: <FaGithub />, href: "https://github.com/XtremeThaqi" },
        { icon: <RiTwitterXFill />, href: "https://x.com/erblinthaq44084" },
        { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/erblinthaqi" },
        { icon: <FaDiscord />, onClick: toggleDiscord },
    ];

    return (
        <section id="home" className="relative min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black flex items-center justify-center px-5 sm:px-8 overflow-hidden">
            <div className="z-10 max-w-6xl py-36 lg:py-40">
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
                    className="text-2xl sm:text-3xl text-zinc-400 font-light text-center max-w-3xl mx-auto mb-4"
                >
                    Full-Stack Developer crafting{" "}
                    <span className="text-red-500 font-medium">digital</span> experiences
                </motion.p>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                    className="text-lg text-zinc-500 text-center max-w-3xl mx-auto leading-relaxed mb-12"
                >
                    I build fast, beautiful, and scalable web applications. From idea to production — clean code,
                    pixel-perfect UI, and powerful backends.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 0.9 }}
                    className="flex flex-col sm:flex-row justify-center gap-5 mb-12"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-10 py-4 bg-white text-black font-semibold rounded-2xl flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all text-lg"
                    >
                        Let's Talk →
                    </motion.a>

                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.96 }}
                        className="px-10 py-5 border text-center border-zinc-700 text-white font-medium rounded-2xl hover:bg-zinc-800/50 transition-all backdrop-blur-sm text-lg"
                    >
                        View My Work
                    </motion.a>
                </motion.div>

                {/* Social icons + QR + Discord popup */}
                <div className="flex flex-col items-center gap-10">
                    {/* Socials */}
                    <div className="flex gap-6">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                onClick={social.onClick}
                                target={social.href ? "_blank" : undefined}
                                whileHover={{ y: -6, scale: 1.15 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-14 h-14 bg-zinc-900/70 backdrop-blur-md border border-zinc-700/50 rounded-2xl flex items-center justify-center text-2xl text-zinc-300 hover:text-white hover:border-zinc-500/70 transition-all"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>

                    {/* Bottom QR & scan text */}
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setShowQR(!showQR)}
                            className="cursor-pointer"
                        >
                            <Image
                                src="/qr-code.png" // ← your QR image
                                alt="QR Code"
                                width={140}
                                height={140}
                                className="rounded-2xl border border-zinc-700/50 shadow-2xl"
                            />
                        </motion.div>

                        <p className="text-sm text-zinc-500 tracking-wider">
                            SCAN TO VISIT
                        </p>
                    </div>
                </div>

                {/* Discord popup – positioned to the side */}
                {discordVisible && (
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 30 }}
                        className="
              fixed bottom-32 right-8 sm:right-12 lg:right-20
              bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50
              px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4
              w-72 max-w-[90vw]
            "
                    >
                        <div className="text-4xl">💬</div>
                        <div className="flex-1">
                            <p className="text-white font-medium text-lg">thaqi_429</p>
                            <button
                                onClick={copyDiscord}
                                className="text-sm flex items-center gap-2 text-zinc-400 hover:text-emerald-400 mt-1 transition-colors"
                            >
                                <IoCopyOutline />
                                {copied ? "Copied!" : "Copy username"}
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}