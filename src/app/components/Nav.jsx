"use client"
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { HiXMark } from 'react-icons/hi2';

export default function Nav() {
    const [active, setActive] = useState(false);

    // toggle to open menu
    const toggle = () => {
        setActive(!active);
    }

    // toggle to close menu.
    const closeMenu = () => {
        setActive(false);
    }

    // li data
    const navData = [
        { id: 1, name: 'Home', href: '#home' },
        { id: 2, name: 'About', href: '#about' },
        { id: 3, name: 'Skills', href: '#skills' },
        // { id: 4, name: 'Projects', href: '#projects' }, project section will be added soon
        { id: 5, name: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 w-[100%] p-[20px] border-b-red-600 z-10 border border-l-black border-t-black border-r-black">
                <div className="relative flex justify-around flex-row-reverse items-center">
                    <div onClick={toggle} className="text-red-600 text-[1.8rem] cursor-pointer">
                        <FaBars />
                    </div>
                    <ul>
                        <div>
                            <a className="text-red-600 text-[20px]" href="/">Erblin.</a>
                        </div>
                        {active && (
                            <div className="absolute -top-5 -right-6 w-64 h-screen bg-red-600 text-white p-6 shadow">
                                <div className="flex justify-end mb-5">
                                    <HiXMark className="text-2xl cursor-pointer" onClick={closeMenu} />
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
                            </div>
                        )}
                    </ul>
                </div>
            </nav>
            {active && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-9"
                    onClick={closeMenu}
                ></div>
            )}
        </>
    )
}