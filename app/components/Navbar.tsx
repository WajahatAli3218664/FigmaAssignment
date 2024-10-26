import React from 'react'

export const Navbar = () => {
    return (
        <header className="flex justify-center lg:justify-end">
            <nav className="flex text-black">
                <ul className="flex gap-6 p-12">
                    <li>Work</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
