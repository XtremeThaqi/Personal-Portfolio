"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBounceLeft, TbBounceLeftFilled, TbBrandFramerMotion } from "react-icons/tb";

export default function With() {

    const iconsData = [
        {
            id: 1, href: 'https://nextjs.org',
            icon: <RiNextjsFill />,
            target: '_blank'
        },
        {
            id: 2, href: 'https://tailwindcss.com',
            icon: <RiTailwindCssFill />,
            target: '_blank'
        },
        {
            id: 3, href: 'https://www.framer.com/motion/',
            icon: <TbBrandFramerMotion />,
            target: '_blank'
        }
    ]

    return (
        <>
            <div className="py-5 overflow-hidden">
                <div className='flex flex-col items-center'>
                    <motion.div
                        initial={{ opacity: 0, scale: .5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className="flex flex-col items-center justify-center">
                        <FaTools className='text-[40px] font-bold text-[#cf2525] relative z-10' />
                        <span className='text-[#cf2525] mt-5 text-[22px]'>This website is made with:</span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: .5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        className="shadow2 flex flex-wrap justify-center my-4 border border-red-600 p-5 rounded-md"
                    >
                        {iconsData.map(item => (
                            <motion.a
                                initial={{ opacity: 0, scale: .5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.1, duration: 3 }}
                                key={item.id}
                                href={item.href}
                                target={item.target}
                                className="flex items-center justify-center size-14 mx-5 shadow2 text-3xl border-2 border-[#cf2525] text-[#cf2525] rounded-full max-md:size-[55px] max-[450px]:mx-2">
                                {item.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    )
}