"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaFigma, } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Skills() {

  return (
    <div className="w-[100%] h-[100%] pl-[0] pr-[0] pb-[100px] pt-[80px]" id="skills">
      <div className="w-[100%] h-auto flex flex-col items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[20px]">
          <h2 className="text-[40px] text-[#cf2525] font-bold">Skills</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-[30px]">
          <h2 className="text-gray-400 font-bold text-[25px]">I&apos;m Good At:</h2>
        </motion.div>

        <div className="w-auto h-auto">

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-secondary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaHtml5 className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">HyperText Markup Language (HTML)</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-primary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaCss3Alt className="i text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Cascading Style Sheet (CSS)</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-secondary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaBootstrap className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Bootstrap</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-primary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaJs className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">JavaScript (JS)</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-secondary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaReact className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">React (JSX)</h2>
            <h2 className="text-gray-400 ml-[4.5rem] font-bold text-[16px] max-md:ml-[7.5rem] max-sm:ml-[3rem] max-sm:text-[13px]">Next.js</h2>
            <RiNextjsFill className="text-[27px] text-[#cf2525]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-primary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <RiTailwindCssFill className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Tailwind Css</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-secondary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <TbBrandFramerMotion className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Framer Motion</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, duration: 1 }}
            className="card card-primary before:absolute after:absolute max-md:ml-[20px] max-md:w-[400px] max-sm:w-[300px] max-sm:ml-[30px]">
            <FaFigma className="text-[27px] text-[#cf2525]" />
            <h2 className="text-gray-400 font-bold text-[16px] max-sm:text-[13px]">Figma (Basic)</h2>
          </motion.div>

        </div>
      </div>
    </div>

  )

}
