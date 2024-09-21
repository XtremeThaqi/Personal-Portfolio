"use client"

import Image from "next/image"
import img1 from './images/img1.png';
import img2 from './images/img2.png';
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { FiFramer } from "react-icons/fi";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Projects() {

    return (
        <>
            <div className="w-[100%] h-[100%]">
                <div className="mb-16">
                    <h1 className="text-[40px] text-center text-[#cf2525] font-bold">Projects</h1>
                </div>
                <div className="px-40 flex flex-col gap-5 max-xl:px-20 max-[550px]:px-5">
                    <div className="grid grid-cols-2 justify-center items-center gap-2 max-[950px]:flex max-[950px]:flex-col-reverse">
                        <div className="w-[100%] h-[100%] relative">
                            <Image src={img1} alt="Restaurant" className="h-[400px] pointer-events-none rounded-md max-[950px]:h-[400px] max-md:h-[350px] max-sm:w-[500px] max-sm:h-[300px]" />
                            <RiNextjsFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-2 border-2 border-[#cf2525] rounded-full p-1" />
                            <RiTailwindCssFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-14 border-2 border-[#cf2525] rounded-full p-1" />
                            <TbBrandFramerMotion className="text-[40px] text-[#cf2525] absolute bottom-2 left-[6.3rem] border-2 border-[#cf2525] rounded-full p-1" />
                        </div>
                        <div className="w-[100%] h-[100%] text-[#cf2525]">
                            <h2 className="font-bold text-[2rem] max-md:text-[1.5rem]">Restaurant App</h2>
                            <p className="text-[1.2rem] leading-8 max-md:text-[1rem]">BLINI is a sleek and user-friendly restaurant app that allows users to explore menus, book tables, and read customer testimonials. The design emphasizes a warm, appetizing atmosphere that matches the culinary experience offered.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-center items-center gap-2 max-[950px]:flex max-[950px]:flex-col-reverse">
                        <div className="w-[100%] h-[100%] relative">
                            <Image src={img2} alt="ToDo App" className="h-[400px] pointer-events-none rounded-md max-md:h-[350px] max-sm:w-[500px] max-sm:h-[300px]" />
                            <RiNextjsFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-2 border-2 border-[#cf2525] rounded-full p-1" />
                            <RiTailwindCssFill className="text-[40px] text-[#cf2525] absolute bottom-2 left-14 border-2 border-[#cf2525] rounded-full p-1" />
                        </div>
                        <div className="w-[100%] h-[100%] pt-5 text-[#cf2525]">
                            <h2 className="font-bold text-[2rem] max-md:text-[1.5rem]">ToDo App</h2>
                            <p className="text-[1.2rem] leading-8 max-md:text-[1rem]">Our ToDo app helps users manage their daily tasks and goals in a simple and organized way. Whether it's for personal productivity or team collaboration, this app keeps your tasks clear and on track.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}