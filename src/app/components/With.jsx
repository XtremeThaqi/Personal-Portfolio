"use client"
import React from 'react'
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill  } from "react-icons/ri";

export default function With() {
  return (
    <>
        <div className="relative overflow-hidden">
            <div className='flex flex-col items-center'>
                <h1 className="text-3xl font-bold text-red-600 relative z-10">Build with:</h1>
                <span className='text-red-600 mt-5 text-[30px] animate-bounce'>&darr;</span>
                <div className="flex flex-wrap justify-center my-4">
                    <div className="content">
                        <FaHtml5 className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </div>
                    <div className="content">
                        <RiTailwindCssFill className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </div>
                    <div className="content">
                        <FaReact className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </div>
                    <div className="content">
                        <RiNextjsFill className="text-[30px] text-red-600 max-md:text-[25px]"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

// .scroll-more {
//   color: white;
//   text-align: center;
//      width: 450px;
//      position: absolute;
//      bottom: 8rem;
//      left: calc(50% - 225px);
//      margin: 0 auto;
//      font-size: 25rem;
//      opacity: 1;
//      transition: opacity .3s ease;
//      font-family: monospace;
//      pointer-events: none;
//      z-index: -1;
//      transform-origin: center;
//      -webkit-animation: bounce 3s cubic-bezier(.37,0,.21,1.02) infinite,fonts 5s linear infinite;
//      animation: bounce 3s cubic-bezier(.37,0,.21,1.02) infinite,fonts 5s linear infinite;
//  }
