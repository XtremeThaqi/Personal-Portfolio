"use client"

import { motion } from 'framer-motion';

export default function About() {
    return (
        <>
            <div className="flex items-center justify-center h-[100%] m-auto pt-[110px] pb-[100px] pl-0 pr-0 overflow-hidden" id="about">
                <div className="flex flex-col justify-center max-[550px]:px-5 p-[10px]">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-[30px]">
                        <h2 className='text-[40px] text-[#cf2525] font-bold'>Erblin Thaqi</h2>
                        {/* Heading */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-5">
                        <h2 className='text-[#cf2525] text-[21px]'><span className='text-gray-300'>Junior</span> | Front-End <span className='text-gray-300'>Web</span> Developer</h2>
                        {/* mid-haed */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-[500px]">
                        <i className='text-[18px] text-[#cf2525] text-wrap'>
                            HI There, My Name Is <span className='text-gray-300'>Erblin Thaqi,</span> / Im a Front-End Developer from Kosovo. I have a passion for IT and love to build Websites for fun and for
                            profit. I dont have a strong background in Web Development but I am always looking for new challenges and problems. I am a creative thinker and I love to learn new things.
                            I have a passion for IT and love to build Websites for fun and for profit.
                        </i>
                        {/* text */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-[10px] mt-[50px]">
                        <i className='font-serif text-[16px] text-[#cf2525]'>“Confusion Is Part Of Programming.”</i>
                        <h2 className='font-sans text-[18px] text-[#cf2525] font-bold'>– Felienne Hermans –</h2>
                        {/* Qoute */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-[100px]">
                        <a href="#contact">
                            <button className='shadow-2 text-black bg-[#cf2525] py-1 px-7 text-[15px] rounded-3xl cursor-pointer hover:bg-black hover:text-[#cf2525] hover:border-2 border-2 border-[#cf2525] transition-all duration-300 ease-linear max-sm:text-[15px]'>
                                Contact Me
                            </button>
                        </a>
                        {/* button */}
                    </motion.div>

                </div>
            </div>
        </>
    )
}