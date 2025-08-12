"use client"
import React, { useState, useEffect } from 'react'
import { FaGithub, FaDiscord, FaLinkedinIn, FaArrowUp } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { motion } from 'framer-motion';

export default function Footer() {
    const [showDiscord, setShowDiscord] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            // Show button after scrolling 100% of viewport height
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

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
            color: "hover:bg-gray-800"
        },
        {
            id: 2,
            icon: <RiTwitterXFill className="text-xl" />,
            href: 'https://x.com/erblinthaq44084',
            color: "hover:bg-gray-800"
        },
        {
            id: 3,
            icon: <FaLinkedinIn className="text-xl" />,
            href: 'https://www.linkedin.com/in/erblinthaqi',
            color: "hover:bg-gray-800"
        },
        {
            id: 4,
            icon: <FaDiscord className="text-xl" />,
            color: "hover:bg-gray-800",
            onClick: () => {
                setShowDiscord(!showDiscord);
                setCopied(false);
            }
        },
    ];

    return (
        <footer className="w-full bg-black border-t border-gray-800">
            <div className="relative max-w-6xl mx-auto px-6 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="mb-6 md:mb-0"
                    >
                        <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">
                            Erblin Thaqi
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">Full Stack Web Developer</p>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-4 mb-6 md:mb-0"
                    >
                        {socialLinks.map((link) => (
                            <motion.a
                                key={link.id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={link.onClick}
                                whileHover={{ y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className={`cursor-pointer w-12 h-12 rounded-full flex items-center justify-center text-white bg-gray-800 ${link.color} transition-colors`}
                            >
                                {link.icon}
                            </motion.a>
                        ))}

                        {/* Discord Username */}
                        {showDiscord && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-2 bg-gray-900 px-3 py-2 rounded-lg border border-red-600"
                            >
                                <span className="text-white">thaqi_429</span>
                                <button
                                    onClick={copyDiscord}
                                    className="text-gray-400 hover:text-white transition-colors"
                                    title="Copy to clipboard"
                                >
                                    {copied ? (
                                        <span className="text-xs text-green-400">Copied!</span>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                                        </svg>
                                    )}
                                </button>
                            </motion.div>
                        )}
                    </motion.div>

                    {/* Back to Top */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="hidden md:flex items-center justify-center rounded-full w-12 h-12 bg-gray-800 hover:bg-gray-900 transition-colors"
                        title="Back to top"
                    >
                        <FaArrowUp className="text-red-500 text-xl" />
                    </motion.a>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-8 pt-6 border-t border-gray-800 text-center"
                >
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} All Rights Reserved. Designed & Built by{" "}
                        <a href="/" className="text-red-500 hover:text-red-400 transition-colors">
                            Erblin Thaqi
                        </a>
                    </p>
                </motion.div>

                {/* Mobile Back to Top */}
                <motion.a
                    href="#home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isVisible ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`md:hidden fixed bottom-6 right-6 flex items-center justify-center rounded-full w-12 h-12 bg-gray-800 hover:bg-gray-900 transition-colors z-50 ${isVisible ? 'pointer-events-auto' : 'pointer-events-none'
                        }`}
                    title="Back to top"
                >
                    <FaArrowUp className="text-red-500 text-xl" />
                </motion.a>
            </div>
        </footer>
    )
}