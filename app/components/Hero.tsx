import React from 'react';
import Image from 'next/image'


const Hero = () => {
    return (
        <section className="flex lg:flex-row flex-col justify-center gap-32 ">

            <div className='flex items-start flex-col gap-8 mr-16'>
                <h1 className='lg:leading-[61px] lg:text-5xl text-2xl font-black font-heebo text-[#21243D] lg:tracking-[2px]'>
                    Hi, I am John,<br />
                    Creative Technologist
                </h1>
                <p className='text-base font-normal font-inter leading-[23.5px] text-[#21243D]'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit.
                    Exercitation veniam<br /> consequat sunt nostrud amet.</p>
                <button className='bg-[#F98585] font-medium leading-[26.44px] text-[18px] text-white rounded-sm w-[205px] h-[50px] drop-shadow-[0px 4px 4px 0px #4141418A] font-heebo'>Download Resume</button>
            </div>

            <div>
                <Image src="/hero-image.png" width={292} height={299} alt='profile picture'></Image>

            </div>

        </section>
    )
}

export default Hero