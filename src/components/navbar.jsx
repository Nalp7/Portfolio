import { useState } from 'react'
import logoBlack from '../assets/logo_black.png'
import logoWhite from '../assets/logo_white.png'
import logoVertical from '../assets/logo_vertical.png'
import logoVerticalColor from '../assets/logo_vertical_color.png'



export function Navbar({currentPage, setCurrentPage}) {

    const [navItems, setNavItems] = useState([
        { id: 1, name: 'Home', path: '#' },
        { id: 2, name: 'Projects', path: '#projects' },
        { id: 3, name: 'About', path: '#about' },
        { id: 4, name: 'Contact', path: '#contact'} ,
    ]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    return (
        <div className="flex bg-dark-gray justify-center sticky top-0 drop-shadow-lg">
            <div className="flex m-6 h-6 items-center">
                <div className="flex items-center space-x-20">
                    <a href={navItems[0].path}>
                        <img alt="NalpDev" src={logoVerticalColor} width="55px" className='hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.2)] hover:scale-150 hover:cursor-default transition-transform duration-1000' />
                    </a>
                    <div className="space-x-8 inline-flex">
                        {navItems.map(item => (
                            <a
                                onClick={() => setCurrentPage(item.name)}
                                className={classNames(item.name === currentPage ? "text-white drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)]" : "text-normal-cyan hover:text-normal-cyan",
                                    "text-center p-6 pl-6 pr-6 rounded-md hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] hover:scale-105 transition-transform duration-150",)}
                                href={item.path}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}