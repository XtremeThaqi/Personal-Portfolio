"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoCopyOutline } from "react-icons/io5";
import Image from 'next/image';

export default function Home() {
    const [discordVisible, setDiscordVisible] = useState(false);
    const [copied, setCopied] = useState(false);
    const [showQR, setShowQR] = useState(false);
    const toggleQR = () => setShowQR(prev => !prev);

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
                                className="absolute bottom-0 left-10 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 mt-4 flex items-center gap-3"
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
                    {/* Right Column - Animated Image */}
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
            {/* Toggle QR Code Button */}
            <div className="hidden md:block fixed bottom-4 left-4 z-50">
                {/* QR Code Box with enhanced styling */}
                {showQR && (
                    <div className="mb-3 bg-white p-3 rounded-xl shadow-2xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.02]">
                        <div className="relative group">
                            <Image
                                src="/qr-code.png"
                                alt="QR Code to portfolio"
                                width={140}
                                height={140}
                                className="w-40 h-40 object-cover rounded-lg border-2 border-gray-200"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-100 opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
                        </div>
                        <p className="text-xs text-center mt-2 text-gray-500 font-medium tracking-wide">
                            Scan to visit portfolio
                        </p>
                    </div>
                )}

                {/* Animated button with better styling */}
                <button
                    onClick={toggleQR}
                    className={`relative overflow-hidden flex items-center justify-center gap-1 bg-gradient-to-br ${showQR ? 'from-red-600 to-red-700' : 'from-blue-600 to-blue-700'} text-white px-4 py-2 text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110`}
                >
                    <span className="relative z-10 flex items-center">
                        {showQR ? (
                            // Hide QR Icon
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Hide QR
                            </>
                        ) : (
                            // Show QR Icon
                            <>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Show QR
                            </>
                        )}
                    </span>
                    <span className={`absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-200 rounded-xl`}></span>
                </button>
            </div>
        </section>
    );
}