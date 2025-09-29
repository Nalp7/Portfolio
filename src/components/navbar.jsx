import { useState } from 'react'
import logoBlack from '../assets/logo_black.png'
import logoWhite from '../assets/logo_white.png'
import logoVertical from '../assets/logo_vertical.png'
import logoVerticalColor from '../assets/logo_vertical_color.png'



export function Navbar() {

    const [navItems, setNavItems] = useState([
        { id: 1, name: 'Home', path: '#', current: true },
        { id: 2, name: 'About', path: '#about', current: false },
        { id: 3, name: 'Contact', path: '#contact', current: false },
    ]);

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    function changeCurrent(currentId) {
        let temp = navItems.findIndex(x => x.id === currentId);
        setNavItems(navItems.map(item => (item.id === currentId ? { ...item, current: true } : { ...item, current: false })));
    }

    return (
        <div className="flex bg-dark-gray justify-center">
            <div className="flex m-6 h-6 items-center">
                <div className="flex items-center space-x-20">
                    <a href={navItems[0].path}>
                        <img alt="NalpDev" src={logoVerticalColor} width="55px" className='hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.2)] hover:scale-150 hover:cursor-default transition-transform duration-1000' />
                    </a>
                    <div className="space-x-8">
                        {navItems.map(item => (
                            <a
                                onClick={() => changeCurrent(item.id)}
                                className={classNames(item.current ? "text-white drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)] border-b-2 rounded-none" : "text-dark-cyan hover:text-normal-cyan",
                                    "text-center p-6 pl-6 pr-6 rounded-md hover:drop-shadow-[0px_0px_15px_rgba(0,146,184,0.9)]",)}
                                href={item.path}>{item.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </div >
    );
}