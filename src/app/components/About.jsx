"use client"

export default function About() {
  return (
    <>
        <div className="flex items-center justify-center h-[100%] m-auto pt-[140px] pb-[100px] pl-0 pr-0" id="about">
            <div className="m-auto">
                <div className="flex flex-col justify-center max-[550px]:px-5 p-[10px]">
                    <div className="mb-[30px]">
                        <h2 className='text-[40px] text-[#cf2525] font-bold'>Erblin Thaqi</h2>
                    </div>
                    <div className="mb-5">
                        <h2 className='text-[#cf2525] text-[21px]'><span className='text-gray-300'>Junior</span> | Front-End <span className='text-gray-300'>Web</span> Developer</h2>
                    </div>
                    <div className="max-w-[500px] text-[#cf2525]">
                        <i>
                            HI There, My Name Is <span className='text-gray-300'>Erblin Thaqi,</span> / Im a Front-End Developer from Kosovo. I have a passion for IT and love to build Websites for fun and for 
                            profit. I dont have a strong background in Web Development but I am always looking for new challenges and problems. I am a creative thinker and I love to learn new things.
                        </i>
                    </div>
                    <div className="flex flex-col gap-[10px] mt-[50px]">                        
                        <i className='font-serif text-[14px] text-[#cf2525]'>“Confusion Is Part Of Programming.”</i>
                        <h2 className='font-sans text-[15px] text-[#cf2525] font-bold'>– Felienne Hermans –</h2>
                    </div>
                    <div className="mt-[100px]">
                        <a href="#contact"><button className='shadow-2 text-black bg-[#cf2525] border-[1px] pt-[4px] pb-[4px] pl-[20px] pr-[20px] text-[15px] rounded-3xl cursor-pointe hover:bg-black hover:text-[#cf2525] hover:border border-[#cf2525] border-solid transition-all duration-300 ease-linear max-sm:text-[15px]'>Contact Me</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}