"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';

export default function Nav() {
    const [active, setActive] = useState(false);

    // toggle to open menu
    const openMenu = () => {
        setActive(!active);
    }

    // toggle to close menu.
    const closeMenu = () => {
        setActive(false);
    }

    // data
    const navData = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        { id: 4, name: 'Projects', href: '#projects' },
        { id: 5, name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 w-[100%] p-[20px] border-b-red-600 z-20 border border-l-black border-t-black border-r-black">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative flex justify-around flex-row-reverse items-center">
                    <div onClick={openMenu} className="text-red-600 text-[1.8rem] cursor-pointer">
                        <FaBars />
                    </div>
                    <ul>

                        <li>
                            <a className="text-red-600 text-[1.4rem]" href="/">Erblin.</a>
                        </li>

                        {active && (
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: 'linear' }}
                                className="absolute -top-5 -right-6 w-64 h-screen bg-red-600 text-white p-6 shadow">
                                <div className="flex justify-end items-center mb-5">
                                    <motion.div
                                        whileTap={{ scale: 0.9 }}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.1 }}
                                    >
                                        <HiXMark className="text-2xl cursor-pointer" onClick={closeMenu} />
                                    </motion.div>
                                </div>
                                {navData.map((item) => (
                                    <li key={item.id} className="cursor-pointer mb-5">
                                        <a className="text-lg"
                                            href={item.href}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </motion.div>
                        )}
                    </ul>
                </motion.div>

            </nav>
            {active && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: .5 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="fixed inset-0 bg-black opacity-50 z-10"
                    onClick={closeMenu}>
                </motion.div>
            )}
        </>
    )
}