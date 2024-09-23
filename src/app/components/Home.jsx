"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaFacebookF, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { RiGitBranchFill } from 'react-icons/ri';

export default function Home() {
    const [on, setOn] = useState(false);

    // toggle for discord to pop out when clicked
    const discordToogle = () => {
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
            onclick: discordToogle
        }
    ];

    return (
        <>
            <div className="pt-[65px] h-auto flex justify-center" id="home">
                <div className="flex flex-col mt-[130px] mr-[230px] mb-[50px] ml-[0px] max-lg:mr-0 max-[400px]:ml-[40px]">

                    <div className="m-auto">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className='text-[#cf2525] font-bold text-[50px] mb-[-10px] max-sm:text-[40px] max-[400px]:text-[37px]'
                        >
                            hello<span className='text-5xl max-sm:text-4xl'>👋</span>,
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            className='font-bold text-[35px] text-white max-sm:text-[30px] max-[400px]:text-[27px]'
                        >
                            My Name Is <span className='text-[#cf2525]'>Erblin Thaqi.</span>
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className='text-white w-[390px] text-[14px] mt-[-2px] leading-[1.2]'
                        >
                            Skilled in <span className='text-[#cf2525]'>Front-End Development</span>, with a knack for problem solving and a good understanding of <span className='text-[#cf2525]'>Programming Languages.</span> and <span className='text-[#cf2525]'>Frameworks.</span>
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-[150px]">
                        <a href="#contact">
                            <button
                                className="shadow-2 text-black bg-[#cf2525] border-[2px] py-1 px-7 text-[15px] rounded-3xl cursor-pointer hover:bg-black hover:text-[#cf2525] hover:border-2 border-[#cf2525] transition-all duration-300 ease-linear max-sm:text-[15px] max-[400px]:text-[13px]"
                            >
                                Contact Me
                            </button>
                        </a>
                    </motion.div>

                    <div className="flex items-center h-[50px] mt-[50px]">
                        <div className="flex items-center gap-[15px]">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.id}
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='shadow text-[20px] rounded-full size-[40px] pr-[.7px] cursor-pointer flex items-center justify-center text-[#cf2525] border border-solid border-[#cf2525] max-sm:size-[35px] max-sm:text-[17px]'
                                    onClick={link.onclick}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}

                            {/* discord toggle */}
                            {on && (
                                <motion.div
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: .5 }}
                                    className="border border-solid border-[#cf2525] rounded-2xl p-[5px] shadow">
                                    <p className='text-white max-[500px]:text-[14px]'>My Discord:</p>
                                    <p className='text-center text-[#cf2525] mt-[-3px] max-[500px]:text-[16px]'>thaqi1</p>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}