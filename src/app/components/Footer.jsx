"use client"
import React, { useState } from 'react'
import { FaGithub, FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
    const [on, setOn] = useState(false);

    const toggle = () => {
        setOn(!on);
    }

    // social links
    const socialLinks = [
        {
            id: 1,
            icon: <FaGithub />,
            href: 'https://github.com/XtremeThaqi',
        },
        {
            id: 2,
            icon: <FaFacebookF />,
            href: 'https://www.facebook.com/profile.php?id=61550534936023',
        },
        {
            id: 3,
            icon: <FaLinkedinIn />,
            href: 'https://www.linkedin.com/in/erblinthaqi',
        },
        {
            id: 4,
            icon: <FaDiscord />,
            onclick: toggle
        }
    ];

    return (
        <div className="w-full bg-zinc-950">
            <div className="relative px-[30px] pt-[30px] pb-[10px]">
                <div className="mb-[10px]">
                    <h2 className="text-[#cf2525] text-[25px] font-bold">Erblin&apos;s Website</h2>
                </div>
                <div className="flex gap-3">
                    {socialLinks.map((link) => (
                        <a
                            href={link.href}
                            key={link.id}
                            target="_blank"
                            rel="noreferrer"
                            className="shadow text-[18px] rounded-full size-[35px] cursor-pointer flex items-center justify-center text-[#cf2525] border border-solid border-[#cf2525]"
                            onClick={link.onclick}
                        >
                            {link.icon}
                        </a>
                    ))}

                    {on && (
                        <div className="shadow border border-[#cf2525] flex items-center px-[5px] rounded-md transition-all duration-500">
                            <p className="text-[#cf2525] text-[15px]">thaqi1</p>
                        </div>
                    )}
                </div>
                <a href="#home" className="shadow absolute right-5 top-[70px] flex justify-center items-center rounded-full cursor-pointer size-[45px] border border-[#cf2525]">
                    <FaArrowUp className="text-[#cf2525] text-[25px]" />
                </a>
                <div className="mt-[10px] flex flex-col items-center leading-4">
                    <p className="text-[11px] text-[#cf2525]">&copy; Copyright 2024 All Right Reserved</p>
                    <p className="text-[11px] text-[#cf2525]">By || <span className="text-white hover:text-[#cf2525] transition-colors ease-linear"><a href="/">Erblin Thaqi</a></span> ||</p>
                </div>
            </div>
        </div>
    )
}
