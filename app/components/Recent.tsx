'use client'
import React from 'react'

const Recent = () => {
    return (
        <section className='bg-[#F4E2E2] flex flex-col gap-6 lg:px-40 lg:h-[502px] h-full w-full pt-6'>
            <div className='flex lg:justify-between justify-around'>
                <h1 className='font-heebo text-[22px] font-medium leading-[32.31px]'>
                    Recent posts
                </h1>
                <h1 className='text-[#F98585] font-heebo text-[22px] font-medium leading-[32.31px]'>
                    View all
                </h1>
            </div>

            <div className='flex lg:flex-row lg:justify-between items-center flex-col gap-8'>
                <div className='bg-[#FFFFFF] lg:w-[483px] lg:h-[356px] w-[383px] py-12 px-10'>
                    <h1 className='font-heebo text-[26px] font-bold leading-[38px] tracking-normal flex'>
                        Making a design system from <br /> scratch
                    </h1>
                    <div className='flex py-6 gap-6 text-[#000000B2]'>
                        <p>12 Feb 2020</p>
                        <p>|</p>
                        <p>Design, Pattern</p>
                    </div>
                    <div className='flex  py-3 gap-6 text-[#000000B2]'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                    </div>


                </div>
                <div className='bg-[#FFFFFF] lg:w-[483px] lg:h-[356px] w-[383px] py-12 px-10'>
                    <h1 className='font-heebo text-[26px] font-bold leading-[38px] tracking-normal flex'>
                        Making a design system from <br /> scratch
                    </h1>
                    <div className='flex py-6 gap-6 text-[#000000B2]'>
                        <p>12 Feb 2020</p>
                        <p>|</p>
                        <p>Design, Pattern</p>
                    </div>
                    <div className='flex  py-3 gap-6 text-[#000000B2]'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

                    </div>


                </div>
            </div>



        </section>
    )
}

export default Recent