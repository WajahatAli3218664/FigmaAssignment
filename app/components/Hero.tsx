import React from 'react';
import Image from 'next/image'

const Hero = () => {
    return (
        <section className="flex flex-row justify-center gap-32 " id='hero'>
            <div className='flex items-start flex-col gap-8'>
                <h1 className='lg:text-5xl font-extrabold font-heebo text-[#21243D]'>
                    Hi, I am John,<br />
                    Creative Technologist
                </h1>
                <p className='mr-14 text-base font-normal font-inter'>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. <br />
                    Velit officia consequat duis enim velit mollit.
                    Exercitation veniam<br /> consequat sunt nostrud amet.</p>
                <button className='bg-[#F98585] text-white rounded-sm w-[205px] h-[50px]'>Download Resume</button>
            </div>

            <div>
                <Image src="/image.png" width={292} height={299} alt='profile picture'></Image>

            </div>

        </section>
    )
}

export default Hero