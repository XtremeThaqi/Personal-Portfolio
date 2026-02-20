"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from './Home';

export default function Nav() {
    const [activeTab, setActiveTab] = useState(1);
    const [justClicked, setJustClicked] = useState(false);

    const navData = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        { id: 4, name: 'Projects', href: '#projects' },
        { id: 5, name: 'Contact', href: '#contact' },
    ];

    // Scroll-based active tab detection
    useEffect(() => {
        const handleScroll = () => {
            if (justClicked) return;

            const sections = navData.map((item) => document.querySelector(item.href));
            let currentActiveId = 1;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (!section) continue;

                const rect = section.getBoundingClientRect();
                if (rect.top <= 300) {
                    currentActiveId = navData[i].id;
                    break;
                }
            }

            setActiveTab(currentActiveId);
        };

        // Run once on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [justClicked]);

    useEffect(() => {
        if (justClicked) {
            const timer = setTimeout(() => setJustClicked(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [justClicked]);

    return (
        <motion.nav
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="fixed top-0 left-0 right-0 p-6 bg-transparent z-50 pointer-events-none overflow-hidden"
        >
            <div className="flex justify-center pointer-events-auto">
                {/* Main container */}
                <div className="relative flex items-center justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-16 px-6 sm:px-8 md:px-10 lg:px-12 py-3 md:py-4 border-[#2c2c2c] bg-zinc-900/70 backdrop-blur-md border rounded-2xl max-w-full md:max-w-5xl mx-auto overflow-hidden">
                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-10 lg:gap-14">
                        {navData.map((item) => (
                            <motion.a
                                key={item.id}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setJustClicked(true);
                                    setActiveTab(item.id);

                                    // Smooth scroll to section
                                    document.querySelector(item.href)?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
                                onMouseEnter={() => {
                                    if (!justClicked) setActiveTab(item.id);
                                }}
                                className="relative text-base lg:text-lg font-medium text-white/90 hover:text-white transition-colors duration-200"
                            >
                                {item.name}
                                {activeTab === item.id && (
                                    <motion.div
                                        layoutId="activeTabUnderline"
                                        className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-white/80 rounded-full"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 300, damping: 40 }}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile icons */}
                    <div className="md:hidden flex items-center gap-6">
                        {socialLinks.map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setJustClicked(true);
                                    const id = i + 1;
                                    setActiveTab(id);

                                    document.querySelector(social.href)?.scrollIntoView({
                                        behavior: 'smooth',
                                        block: 'start',
                                    });
                                }}
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
        </motion.nav>
    );
}