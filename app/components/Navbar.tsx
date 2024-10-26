import React from 'react'

export const Navbar = () => {
    return (
        <header className="flex justify-center lg:justify-end">
            <nav className="flex text-black font-medium">
                <ul className="flex gap-12 p-12 text-xl">
                    <li>Works</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
