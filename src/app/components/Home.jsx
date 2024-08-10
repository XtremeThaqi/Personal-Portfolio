"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa";

export default function Home() {
    const [on, setOn] = useState(false);

    // toggle for discord 
    const toggle = () => {
        setOn(!on);
    };

    // social links
    const socialLinks = [
        {
            id: 1, icon: <FaGithub />,
            href: 'https://github.com/XtremeThaqi',
        },
        {
            id: 2, icon: <FaFacebookF />,
            href: 'https://www.facebook.com/profile.php?id=61550534936023',
        },
        {
            id: 3, icon: <FaLinkedinIn />,
            href: 'https://www.linkedin.com/in/erblinthaqi',
        },
        {
            id: 4, icon: <FaDiscord />,
            onclick: toggle
        }
    ];

    return (
        <>
            <div className="pt-[65px] h-auto flex justify-center align-middle" id="home">
                <div className="flex flex-col mt-[130px] mr-[230px] mb-[50px] ml-[0] max-lg:mr-0 max-[400px]:ml-[40px]">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="m-auto">
                        <h2 className='text-[#cf2525] font-bold text-[50px] mb-[-10px] max-sm:text-[40px] max-[400px]:text-[37px]'>Hello,</h2>
                        <p className='font-bold text-[35px] text-white max-sm:text-[30px] max-[400px]:text-[27px]'>My Name Is <span className='text-[#cf2525]'>Erblin Thaqi.</span></p>
                        <p className='text-white w-[370px] text-[14px] mt-[-2px] leading-[1.2] max-sm:text-[12px]'>I am a <span className='text-[#cf2525]'>Front-End Developer</span>, Good Knowledge In Some <span className='text-[#cf2525]'>Programming Languages.</span></p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-[100px]">
                        <a className="shadow-2 text-black bg-[#cf2525] border-[1px] pt-[7px] pb-[7px] pl-[20px] pr-[20px] text-[17px] rounded-3xl cursor-pointe hover:bg-black hover:text-[#cf2525] hover:border border-[#cf2525] border-solid transition-all duration-300 ease-linear max-sm:text-[15px] max-[400px]:text-[13px]" href="#contact"><button>Contact Me</button></a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center h-[50px] mt-[110px]">
                        <div className="flex items-center gap-[15px]">
                            {socialLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.id}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='shadow text-[20px] rounded-full size-[40px] pr-[.7px] cursor-pointer flex items-center justify-center text-[#cf2525] border border-solid border-[#cf2525] max-sm:size-[35px] max-sm:text-[17px]' onClick={link.onclick}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>

                        {/* discord toggle */}
                        {on && (
                            <motion.div
                                initial={{ opacity: 1, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: .5 }}
                                className="border border-solid border-[#cf2525] rounded-2xl ml-3 p-[5px] shadow">
                                <p className='text-white max-[500px]:text-[14px]'>My Discord:</p>
                                <p className='text-center text-[#cf2525] mt-[-3px] max-[500px]:text-[16px]'>thaqi1</p>
                            </motion.div>
                        )}
                    </motion.div>


                </div>
            </div>
        </>
    );


}