"use client"
import React from 'react';
import { FaHtml5, FaReact, FaTools  } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";

export default function With() {
  return (
    <>
        <div className="relative overflow-hidden">
            <div className='flex flex-col items-center'>
                <FaTools className='text-[40px] font-bold text-[#cf2525] relative z-10'/>
                <span className='text-[#cf2525] mt-5 text-[30px] animate-bounce'>&darr;</span>
                <div className="flex flex-wrap justify-center my-4 border border-red-600 p-5 rounded-full">
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank' className="content">
                        <FaHtml5 className="text-[30px] text-[#cf2525] max-md:text-[25px]"/>
                    </a>
                    <a href='https://tailwindcss.com' target='_blank' className="content">
                        <RiTailwindCssFill className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </a>
                    <a href='https://react.dev/' target='_blank' className="content">
                        <FaReact className="text-[30px] text-[#cf2525] max-md:text-[25px]"/>
                    </a>
                    <a href='https://nextjs.org/' target='_blank' className="content">
                        <RiNextjsFill className="text-[30px] text-[#cf2525] max-md:text-[25px]"/>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}