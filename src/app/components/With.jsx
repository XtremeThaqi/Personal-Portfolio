"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaReact, FaTools  } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";

export default function With() {
  return (
    <>
        <div className="relative overflow-hidden">
            <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
             className='flex flex-col items-center'>
                <FaTools className='text-[40px] font-bold text-[#cf2525] relative z-10'/>
                <span className='text-[#cf2525] mt-5 text-[22px]'>This website is made with:</span>
                <div className="shadow2 flex flex-wrap justify-center my-4 border border-red-600 p-5 rounded-md">
                    <a href='https://tailwindcss.com' target='_blank' className="content">
                        <RiTailwindCssFill className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </a>
                    <a href='https://nextjs.org/' target='_blank' className="content">
                        <RiNextjsFill className="text-[30px] text-[#cf2525] max-md:text-[25px]"/>
                    </a>
                </div>
            </motion.div>
        </div>
    </>
  )
}