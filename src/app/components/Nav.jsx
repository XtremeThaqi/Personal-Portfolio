"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';;
import { FiCode, FiHome, FiTool, FiUser } from 'react-icons/fi';
import { MdMail } from 'react-icons/md';

export default function Nav() {
    const [activeTab, setActiveTab] = useState(1);

    const navData = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        { id: 4, name: 'Projects', href: '#projects' },
        { id: 5, name: 'Contact', href: '#contact' },
    ];

    const socialIcons = [
        { icon: <FiHome />, href: '#home' },
        { icon: <FiUser />, href: '#about' },
        { icon: <FiTool />, href: '#skills' },
        { icon: <FiCode />, href: '#projects' },
        { icon: <MdMail />, href: '#contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 p-6 bg-transparent z-50 pointer-events-none overflow-hidden">
            <div className="flex justify-center pointer-events-auto">
                {/* Main container */}
                <div className="relative flex items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 border-zinc-700 bg-zinc-900/70 backdrop-blur-md border rounded-2xl max-w-full md:max-w-5xl mx-auto overflow-hidden">
                    <div className="hidden md:flex items-center gap-10 lg:gap-14">
                        {navData.map((item) => (
                            <motion.a
                                key={item.id}
                                href={item.href}
                                onMouseEnter={() => setActiveTab(item.id)}
                                className={`relative text-base lg:text-lg font-medium text-white/90 hover:text-white transition-colors `}
                            >
                                {item.name}
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-white/70 rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 500, damping: 40 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile social icons – only visible below md  and not draggable*/}
                    <div className="md:hidden flex items-center gap-6">
                        {socialIcons.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                rel="noopener noreferrer"
                                whileTap={{ scale: 0.9 }}
                                draggable="false"
                                className="text-2xl text-white/80 hover:text-white transition-colors"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}