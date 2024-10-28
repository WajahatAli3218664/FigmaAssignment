import React from 'react'
import Image from 'next/image'

function Footer() {
    return (

        <footer className="flex items-center justify-center h-[243px] flex-col gap-10 py-16 lg:py-0">
            <div className='flex gap-14'>

                <Image src="/fb.png" width={30} height={30} alt='logo' className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]'></Image>
                <Image src="/insta.png" width={30} height={30} alt='logo' className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]'></Image>
                <Image src="/Group.png" width={30} height={30} alt='logo' className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]'></Image>
                <Image src="/Linkedin.png" width={30} height={30} alt='logo' className='lg:w-[30px] lg:h-[30px] w-[20px] h-[20px]'></Image>


            </div>
            <div className="flex font-medium font-heebo lg:text-[22px] leading-[32.31px]">
                <p>Copyright ©2020 All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer