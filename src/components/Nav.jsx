import React, { Component } from 'react'
import { Link } from 'react-scroll';

export class Nav extends Component {
    render() {
        return (
            <div>
                <nav className="hidden md:flex lg:flex justify-between items-center px-25 py-6 bg-transparent backdrop-blur-md top-0 z-50">
                    <div className="text-2xl font-bold text-gray-800 tracking-tight">
                        My Melody
                    </div>
                    <ul className="flex gap-8 text-gray-600 font-medium">
                        <Link to="home" smooth={true} duration={500} className="hover:text-[#FF85FB] cursor-pointer transition-colors">Home</Link>
                        <Link to="about" smooth={true} duration={500} className="hover:text-[#FF85FB] cursor-pointer transition-colors">About</Link>
                        <Link to="contact" smooth={true} duration={500} className="hover:text-[#FF85FB] cursor-pointer transition-colors">Contact</Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav