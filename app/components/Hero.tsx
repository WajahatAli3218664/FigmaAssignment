import React from 'react';
import Image from 'next/image'


const Hero = () => {
    return (
        <section className="flex lg:flex-row flex-col justify-center gap-32 ">
            <div className='flex lg:hidden justify-center'>
                <Image src="/hero-image.png" width={292} height={299} alt='profile picture'></Image>

            </div>

            <div className='flex lg:items-start items-center flex-col gap-8 mr-16'>
                <h1 className='relative left-8 lg:left-0 lg:leading-[61px] lg:text-5xl text-4xl font-black font-heebo text-[#21243D] lg:tracking-[2px]'>
                    Hi, I am John,<br />
                    Creative Technologist
                </h1>
                <p className='relative left-8 lg:left-0 text-base font-normal font-inter leading-[23.5px] text-[#21243D]'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit.
                    Exercitation veniam<br /> consequat sunt nostrud amet.</p>
                <button className='bg-[#F98585] font-medium leading-[26.44px] text-[18px] text-white rounded-sm w-[205px] h-[50px] drop-shadow-[0px 4px 4px 0px #4141418A] font-heebo'>Download Resume</button>
            </div>

            <div className='lg:block hidden'>
                <Image src="/hero-image.png" width={292} height={299} alt='profile picture'></Image>

            </div>

        </section>
    )
}

export default Hero