'use client'
import React from 'react'

export const Navbar = () => {
    return (
        <header className="flex justify-center lg:justify-end w-full">
            <nav className="flex text-black font-medium cursor-pointer">
                <ul className="flex gap-6 md:gap-12 p-6 md:p-12 text-lg md:text-xl">
                    <li className="hover:text-[#F98585] transition-colors">Works</li>
                    <li className="hover:text-[#F98585] transition-colors">Blog</li>
                    <li className="hover:text-[#F98585] transition-colors">Contact</li>
                </ul>
            </nav>
        </header>
    )
}
