'use client'
import React from 'react'

const Recent = () => {
    return (
        <section className='bg-[#F4E2E2] flex flex-col gap-6 lg:px-40 h-[502px] w-full pt-6'>
            <div className='flex lg:justify-between'>
                <h1 className='font-heebo text-[22px] font-medium leading-[32.31px]'>
                    Recent posts
                </h1>
                <h1 className='text-[#F98585] font-heebo text-[22px] font-medium leading-[32.31px]'>
                    View all
                </h1>
            </div>

            <div className='flex lg:flex-row lg:justify-between flex-col'>
                <div className='bg-[#FFFFFF] w-[483px] h-[356px]'>
                    <h1 className='font-heebo text-[26px] font-bold leading-[38px] tracking-normal flex justify-center'>
                        Making a design system from <br /> scratch
                    </h1>

                </div>
                <div className='bg-[#FFFFFF] w-[483px] h-[356px]'>


                </div>
            </div>



        </section>
    )
}

export default Recent