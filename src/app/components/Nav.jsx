"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';

export default function Nav() {
    const [active, setActive] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

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
            <nav className="fixed top-0 w-full p-5 bg-black border-b border-gray-800 z-50">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex justify-between items-center max-w-6xl mx-auto"
                >
                    <motion.a
                        whileHover={{ 
                            scale: 1.05,
                            textShadow: "0 0 8px rgba(255,255,255,0.5)"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="text-2xl font-bold text-white"
                        href="/"
                    >
                        Erblin<span className="text-gray-400">.</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex space-x-8">
                        {navData.map((item) => (
                            <li 
                                key={item.id}
                                onMouseEnter={() => setHoveredItem(item.id)}
                                onMouseLeave={() => setHoveredItem(null)}
                                className="relative"
                            >
                                <motion.a
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    className="text-white relative z-10 px-2 py-1"
                                    href={item.href}
                                >
                                    {item.name}
                                </motion.a>
                                {hoveredItem === item.id && (
                                    <motion.div
                                        layoutId="navHover"
                                        className="absolute inset-0 bg-white bg-opacity-20 rounded-md"
                                        transition={{ type: "spring", bounce: 0.2 }}
                                    />
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMenu}
                        className="md:hidden text-white text-2xl cursor-pointer"
                    >
                        <FaBars />
                    </motion.div>
                </motion.div>

                {/* Mobile Menu */}
                {active && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", bounce: 0.1 }}
                            className="fixed top-0 right-0 w-72 h-screen bg-black bg-opacity-95 backdrop-blur-sm shadow-2xl z-50 p-8 border-l border-gray-800"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    className="text-xl font-bold text-white"
                                    href="/"
                                    onClick={closeMenu}
                                >
                                    Erblin<span className="text-gray-400">.</span>
                                </motion.a>
                                <motion.div
                                    whileHover={{ rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <HiXMark 
                                        className="text-3xl cursor-pointer text-white" 
                                        onClick={closeMenu} 
                                    />
                                </motion.div>
                            </div>
                            <ul className="space-y-6">
                                {navData.map((item) => (
                                    <motion.li
                                        key={item.id}
                                        initial={{ x: 20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: 0.1 * item.id }}
                                    >
                                        <motion.a
                                            whileHover={{ 
                                                x: 10,
                                                color: "#fff"
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="block text-2xl text-gray-400 hover:text-white transition-colors pl-4 border-l-2 border-gray-800 hover:border-white"
                                            href={item.href}
                                            onClick={closeMenu}
                                        >
                                            {item.name}
                                        </motion.a>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={closeMenu}
                        />
                    </>
                )}
            </nav>
        </>
    )
}