"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";

export default function Home() {
    const [discordVisible, setDiscordVisible] = useState(false);
    const [copied, setCopied] = useState(false);

    const toggleDiscord = () => {
        setDiscordVisible(!discordVisible);
        setCopied(false);
    };

    const copyDiscord = () => {
        navigator.clipboard.writeText("thaqi_429");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const socialLinks = [
        {
            id: 1,
            icon: <FaGithub className="text-xl" />,
            href: 'https://github.com/XtremeThaqi',
            color: 'hover:bg-gray-800'
        },
        {
            id: 2,
            icon: <RiTwitterXFill className="text-xl" />,
            href: 'https://x.com/erblinthaq44084',
            color: 'hover:bg-black'
        },
        {
            id: 3,
            icon: <FaLinkedinIn className="text-xl" />,
            href: 'https://www.linkedin.com/in/erblinthaqi',
            color: 'hover:bg-blue-600'
        },
        {
            id: 4,
            icon: <FaDiscord className="text-xl" />,
            onClick: toggleDiscord,
            color: 'hover:bg-indigo-600'
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4 max-sm:mt-4" id="home">
            <div className="max-w-6xl w-full mx-auto py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                                >
                                    <span className="text-4xl">👋</span>
                                </motion.div>
                                <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">
                                    Hello,
                                </h1>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-white">
                                I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Erblin Thaqi</span>
                            </h2>

                            <motion.p
                                className="text-gray-300 text-lg leading-relaxed max-w-lg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                            >
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700 font-medium">
                                    Full-Stack Web Developer
                                </span> with expertise in both frontend and backend technologies.
                                Passionate about building complete web solutions from database to UI, creating intuitive interfaces,
                                and solving complex problems through clean, efficient code across the entire stack.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-wrap gap-4"
                        >
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-red-800 text-white font-medium shadow-lg hover:shadow-red-500/30 transition-all"
                            >
                                Contact Me
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href="#projects"
                                className="px-8 py-3 rounded-full border border-red-600 text-red-500 font-medium hover:bg-red-900/30 transition-all"
                            >
                                View Projects
                            </motion.a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex gap-4 mt-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    whileHover={{ y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={link.onClick}
                                    className={`${link.color} w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white transition-colors`}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </motion.div>

                        {/* Discord Popup */}
                        {discordVisible && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                className="absolute bottom-0 left-0 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 mt-4 flex items-center gap-3"
                            >
                                <span className="text-white font-medium">thaqi_429</span>
                                <button
                                    onClick={copyDiscord}
                                    className="text-gray-300 hover:text-white transition-colors"
                                    title="Copy to clipboard"
                                >
                                    <IoCopyOutline />
                                </button>
                                {copied && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-xs text-green-400"
                                    >
                                        Copied!
                                    </motion.span>
                                )}
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column - Visual Element (placeholder for image/illustration) */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="hidden lg:flex justify-center"
                    >
                        <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-red-900/20 to-transparent rounded-full border border-red-900/30 flex items-center justify-center">
                            <div className="absolute inset-8 border border-red-700/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-16 border border-red-600/10 rounded-full animate-spin-slow-reverse"></div>
                            <div className="text-9xl">👨‍💻</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}