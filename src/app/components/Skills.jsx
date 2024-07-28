"use client";
import React from 'react';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export default function Skills() {

  return (
    <div className="w-[100%] h-[100%] pl-[0] pr-[0] pb-[100px] pt-[90px]" id="skills">
      <div className="w-[100%] h-auto flex flex-col items-center">
        <div className="mb-[20px]">
          <h2 className="text-[40px] text-red-600 font-bold">Skills</h2>
        </div>
        <div className="mb-[30px]">
          <h2 className="text-gray-400 font-bold text-[25px]">I&apos;m Good At:</h2>
        </div>
        <div className="w-auto h-auto">
          <div className="card card-secondary animate-pulse1 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaHtml5 className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">HyperText Markup Language (HTML)</h2>
          </div>
          <div className="card card-primary animate-pulse1 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaCss3Alt className="i text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Cascading Style Sheet (CSS)</h2>
          </div>
          <div className="card card-secondary animate-pulse1 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaBootstrap className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Bootstrap</h2>
          </div>
          <div className="card card-primary animate-pulse2 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaJs className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">JavaScript (JS)</h2>
          </div>
          <div className="card card-secondary animate-pulse2 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaReact className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">React (JSX)</h2>
          </div>
          <div className="card card-primary animate-pulse2 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <RiTailwindCssFill className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Tailwind Css</h2>
          </div>
          <div className="card card-secondary animate-pulse2 before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaFigma className="text-[27px] text-red-600" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Figma (Basic)</h2>
          </div>
        </div>
      </div>
    </div>

  )

}
