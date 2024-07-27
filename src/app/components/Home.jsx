"use client"
import React, { useState } from 'react';
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
            id: 1,
            icon: <FaGithub />,
            href: 'https://github.com/XtremeThaqi',
        },
        {   id: 2,
            icon: <FaFacebookF />,
            href: 'https://www.facebook.com/profile.php?id=61550534936023',
        },
        {   id: 3,
            icon: <FaLinkedinIn />,
            href: 'https://www.linkedin.com/in/erblin-thaqi-4989a7307',
        },
        {   id: 4,
            icon: <FaDiscord />,
            onclick: toggle
        }
    ];

    return (
        <>
            <div className="pt-[65px] h-auto flex justify-center align-middle" id="home">
                <div className="flex flex-col mt-[130px] mr-[230px] mb-[50px] ml-[0] max-lg:mr-0">
                    
                    <div className="m-auto">
                        <h2 className='text-red-600 font-bold text-[50px] mb-[-10px] max-sm:text-[40px]'>Hello,</h2>
                        <p className='font-bold text-[35px] text-white max-sm:text-[30px]'>My Name Is <span className='text-red-600'>Erblin Thaqi.</span></p>
                        <p className='text-white w-[370px] text-[14px] mt-[-2px] leading-[1.2] max-sm:text-[12px]'>I am a <span className='text-red-600'>Front-End Developer</span>, Good Knowledge In Some <span className='text-red-500'>Programming Languages.</span></p>
                    </div>

                    <div className="mt-[100px]">
                        <a className="shadow-2 text-black bg-red-600 border-[1px] pt-[7px] pb-[7px] pl-[20px] pr-[20px] text-[17px] rounded-3xl cursor-pointe hover:bg-black hover:text-red-600 hover:border border-red-600 border-solid transition-all duration-300 ease-linear max-sm:text-[15px]" href="#contact"><button>Contact Me</button></a>
                    </div>

                    <div className="flex items-center h-[50px] mt-[110px]">
                        <div className="flex items-center gap-[15px]">
                            {socialLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.id} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className='shadow text-[20px] rounded-full w-[40px] h-[40px] pr-[.7px] cursor-pointer flex items-center justify-center text-red-600 border border-solid border-red-600' onClick={link.onclick}>
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                        
                        {on && (
                            <div className="border border-solid border-red-600 rounded-2xl ml-3 p-[5px] shadow">
                                <p className='text-white max-[500px]:text-[14px]'>My Discord:</p>
                                <p className='text-center text-red-600 mt-[-3px] max-[500px]:text-[16px]'>thaqi1</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );

}