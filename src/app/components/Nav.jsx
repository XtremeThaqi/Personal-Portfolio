"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';
import { FiCode, FiHome, FiTool, FiUser } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';

export default function Nav() {
    const [active, setActive] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const toggleMenu = () => setActive(!active);
    const closeMenu = () => setActive(false);

    const navData = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        { id: 4, name: 'Projects', href: '#projects' },
        { id: 5, name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 p-4 sm:p-5 bg-transparent z-30 pointer-events-none">
                <div className="flex justify-center pointer-events-auto">
                    <div className="relative flex items-center justify-between gap-6 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 px-5 sm:px-8 md:px-10 lg:px-10 py-3.5 md:py-3 bg-gray-900/80 backdrop-blur-2xl border border-blue-400/30 rounded-[3rem] md:rounded-[4rem] shadow-2xl shadow-blue-900/40 min-w-[90vw] sm:min-w-[85vw] md:min-w-0 md:max-w-5xl mx-auto overflow-hidden">
                        <motion.a
                            whileHover={{
                                scale: 1.05,
                                textShadow: "0 0 8px rgba(255,255,255,0.5)"
                            }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0 pl-3 sm:pl-4 md:pl-0"
                            href="/"
                        >
                            Erblin<span className="text-gray-300">.</span>
                        </motion.a>

                        {/* Desktop tabs */}
                        <div className="hidden md:flex relative flex-1 justify-center">
                            <motion.ul
                                className="tabs relative bg-transparent flex items-center justify-center"
                                layout
                            >
                                {navData.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        layout
                                        className="relative"
                                        onMouseEnter={() => setActiveTab(item.id)}
                                    >
                                        <a
                                            className="tab inline-flex items-center justify-center h-9 sm:h-10 md:h-11 w-20 sm:w-24 md:w-28 lg:w-32 text-sm sm:text-base font-medium text-white/90 hover:text-white transition-colors cursor-pointer select-none"
                                            href={item.href}
                                        >
                                            {item.name}
                                        </a>
                                    </motion.li>
                                ))}

                                <motion.span
                                    layoutId="iosTabGlider"
                                    className="glider absolute top-1 sm:top-1.5 bottom-1 sm:bottom-1.5 bg-white/15 backdrop-blur-xl rounded-[2rem] sm:rounded-[2.5rem] shadow-inner -z-10"
                                    initial={false}
                                    animate={{
                                        opacity: 1,
                                        left: `calc((100% / ${navData.length}) * (${activeTab - 1}))`,
                                        width: `calc(100% / ${navData.length})`,
                                    }}
                                    transition={{
                                        layout: {
                                            type: "spring",
                                            stiffness: 500,
                                            damping: 40,
                                        },
                                        opacity: { duration: 0.2 },
                                    }}
                                />
                            </motion.ul>
                        </div>

                        {/* Hamburger tab*/}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleMenu}
                            className="md:hidden text-white text-xl sm:text-2xl cursor-pointer flex-shrink-0 pr-3 sm:pr-4 md:pr-0"
                        >
                            <FaBars />
                        </motion.div>
                    </div>
                </div>
            </nav>

            {active && (
                <>
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 32, stiffness: 400 }}
                        className="fixed top-0 right-0 w-72 sm:w-80 h-screen bg-gray-950 backdrop-blur-xl border-l border-gray-800/60 z-50 overflow-y-auto rounded-[5px] shadow-2xl shadow-blue-900/40">
                        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-600/50">
                            <motion.a
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, ease: "linear" }}
                                whileHover={{ scale: 1.12 }}
                                href="/"
                                onClick={closeMenu}
                                className="text-xl font-semibold text-white flex items-center0"
                            >
                                Erblin<span className="text-gray-500">.</span>
                            </motion.a>

                            <motion.button
                                whileHover={{ scale: 1.12, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={closeMenu}
                                className="text-gray-300 hover:text-white text-3xl p-1 rounded-full hover:bg-gray-800/40 transition-colors"
                            >
                                <HiXMark />
                            </motion.button>
                        </div>

                        <ul className="px-3 py-5 space-y-1">
                            {navData.map((item, index) => {
                                const icons = {
                                    Home: <FiHome className="text-lg" />,
                                    About: <FiUser className="text-lg" />,
                                    Skills: <FiTool className="text-lg" />,
                                    Projects: <FiCode className="text-lg" />,
                                    Contact: <MdMail className="text-lg" />,
                                };

                                return (
                                    <motion.li
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: index * 0.02,
                                            duration: 0.25,
                                            ease: "linear"
                                        }}
                                    >
                                        <motion.a
                                            whileHover={{
                                                x: 7,
                                                scale: 1.03,
                                                color: "#ffffff",
                                                backgroundColor: "rgba(255,255,255,0.04)"
                                            }}
                                            whileTap={{ scale: 0.95, x: 0 }}
                                            href={item.href}
                                            onClick={closeMenu}
                                            className="flex items-center gap-3 px-4 py-3.5 text-[16px] sm:text-base font-medium text-gray-300 hover:text-white rounded-lg transition-all duration-75 hover:bg-white/5 cursor-pointer select-none">
                                            {icons[item.name] || <FiChevronRight className="text-lg" />}
                                            {item.name}
                                        </motion.a>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.68 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="fixed inset-0 bg-black z-40"
                        onClick={closeMenu}
                    />
                </>
            )}
        </>
    );
}

//  <motion.a
                        //     whileHover={{
                        //         scale: 1.05,
                        //         textShadow: "0 0 8px rgba(255,255,255,0.5)"
                        //     }}
                        //     transition={{ type: "spring", stiffness: 300 }}
                        //     className="text-xl sm:text-2xl font-bold text-white whitespace-nowrap flex-shrink-0 pl-3 sm:pl-4 md:pl-0"
                        //     href="/"
                        // >
                        //     Erblin<span className="text-gray-300">.</span>
                        // </motion.a>