"use client"

import { motion } from 'framer-motion';

import Image from "next/image"
import img1 from './images/img1.png';
import img2 from './images/img2.png';

import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Projects() {

    return (
        <div className="w-[100%] h-[100%]" id='projects'>
            <motion.div
                className="mb-16"
                initial={{ opacity: 0, scale: .5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: .5 }}
            >
                <h1 className="text-[40px] text-center text-[#cf2525] font-bold">Projects</h1>
            </motion.div>
            <div className="px-40 flex flex-col gap-5 max-xl:px-20 max-[550px]:px-5">
                <div className="grid grid-cols-2 justify-center items-center gap-2 max-[950px]:flex max-[950px]:flex-col-reverse">
                    <div className="w-[100%] h-[100%] relative">

                        <motion.div
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}>
                            <Image src={img1} alt="Restaurant" className="h-[400px] pointer-events-none rounded-md max-[950px]:h-[400px] max-md:h-[350px] max-sm:w-[500px] max-sm:h-[300px]" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}>
                            <RiNextjsFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-2 border-2 border-[#cf2525] rounded-full p-1" />
                            <RiTailwindCssFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-14 border-2 border-[#cf2525] rounded-full p-1" />
                            <TbBrandFramerMotion className="text-[40px] text-[#cf2525] absolute bottom-2 left-[6.3rem] border-2 border-[#cf2525] rounded-full p-1" />
                        </motion.div>

                        <motion.div
                            className="absolute right-2 top-3"
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}
                        >
                            <a href="https://blini.netlify.app" className="bg-[#cf2525] text-white p-2 rounded-md" target="_blank">See Live Demo</a>
                        </motion.div>

                    </div>

                    <div className="w-[100%] h-[100%] text-[#cf2525] relative">
                        <motion.h2
                            className="font-bold text-[2rem] max-md:text-[1.5rem]"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}
                        >
                            Restaurant App
                        </motion.h2>
                        <motion.p
                            className="text-[1.2rem] leading-8 max-md:text-[1rem]"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}
                        >
                            BLINI is a sleek and user-friendly restaurant app that allows users to explore menus, book tables, and read customer testimonials. The design emphasizes a warm, appetizing atmosphere that matches the culinary experience offered.
                        </motion.p>
                    </div>

                </div>


                <div className="grid grid-cols-2 justify-center items-center gap-2 max-[950px]:flex max-[950px]:flex-col">
                    <div className="w-[100%] h-[100%] pt-5 text-[#cf2525] relative">
                        <motion.h2
                            className="font-bold text-[2rem] max-md:text-[1.5rem]"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}
                        >
                            ToDo App
                        </motion.h2>
                        <motion.p
                            className="text-[1.2rem] leading-8 max-md:text-[1rem]"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .5 }}
                        >
                            Our ToDo app helps users manage their daily tasks and goals in a simple and organized way. Whether it's for personal productivity or team collaboration, this app keeps your tasks clear and on track.
                        </motion.p>
                    </div>
                    <div className="w-[100%] h-[100%] relative">
                        <motion.div
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}
                        >
                            <Image src={img2} alt="ToDo App" className="h-[400px] pointer-events-none rounded-md max-md:h-[350px] max-sm:w-[500px] max-sm:h-[300px]" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}
                        >
                            <RiNextjsFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-2 border-2 border-[#cf2525] rounded-full p-1" />
                            <RiTailwindCssFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-14 border-2 border-[#cf2525] rounded-full p-1" />
                        </motion.div>
                        <motion.div
                            className="absolute right-2 top-3"
                            initial={{ opacity: 0, scale: .5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: .5 }}
                        >
                            <a href="https://quicktaskss.netlify.app" className="bg-[#cf2525] text-white p-2 rounded-md" target="_blank">See Live Demo</a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )

}