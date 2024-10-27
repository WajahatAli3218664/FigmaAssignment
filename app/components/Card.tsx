import React from 'react'
import Image from 'next/image'
interface CardProps {

    src: string
}

function Card({ src }: CardProps) {
    return (
        <div className=' w-[663.46px] h-[184px] flex gap-6'>
            <Image src={src} width={246} height={184} alt='preview'></Image>
            <div>
                <h1 className='font-heebo text-[30px] font-bold leading-[44.06px] flex'>
                    Designing Dashboards
                </h1>
                <div className='flex gap-5 py-3 text-[#000000B2]'>
                    <div className='font-heebo bg-[#F98585] text-white rounded-[50px] w-[68px] h-6 font-bold flex justify-center'><p>2020</p></div>
                    <p>Dashboard</p>

                </div>
                <p className='text-[#000000B2] w-[623.46px] py-4 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

            </div>

        </div >
    )
}

export default Card