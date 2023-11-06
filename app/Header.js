'use client';

import React, {useEffect, useState} from 'react';
import Link from "next/link";

const Header = () => {
    const [scrollTop, setScrollTop] = useState(false);
    const [activeMenu, setActiveMenu] = useState('home');

    useEffect(() => {
        const handleScroll = event => {
            setScrollTop(window.scrollY > 400);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleClick = (e) => {
        const currentTarget = e.currentTarget;
        const {name} = currentTarget;
        setActiveMenu(name);
    }

    return (
        <div className={(scrollTop ? "bg-info text-white" : "text-white") + " fixed top-0 left-0 right-0 navbar px-5 md:px-20 z-[1030]"}>
            <div className="navbar-start">
                <Link href={"/"} className={""}>
                    <img src={"/SEEDS-FOR-TREES_logo.png"}
                         alt={"Logo de Seeds For Trees"}
                         className={(scrollTop ? "w-16 h-16" : "w-16 h-16 lg:w-32 lg:h-32")}
                         name={'home'}
                         onClick={handleClick}
                    />
                </Link>

                <div className="dropdown ms-5">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 text-base-content rounded-box w-52">
                        <li>
                            <Link href={"/"} name={'home'} onClick={handleClick}>Home</Link>
                        </li>
                        <li>
                            <Link href={"/team"} name={'team'} onClick={handleClick}>Our team</Link>
                        </li>
                        <li>
                            <Link href={"/trees"} name={'trees'} onClick={handleClick}>Our trees</Link>
                        </li>
                        <li>
                            <Link href={"/about"} name={'about'} onClick={handleClick}>About us</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={"/"}
                              className={`text-white hover:text-primary hover:bg-transparent ${activeMenu === 'home' ? 'active' : ''}`}
                              name={'home'}
                              onClick={handleClick}
                        >Home</Link>
                    </li>
                    <li>
                        <Link href={"/team"}
                              className={`text-white hover:text-primary hover:bg-transparent ${activeMenu === 'team' ? 'active' : ''}`}
                              name={'team'}
                              onClick={handleClick}
                              onFocus={handleClick}
                        >Our team</Link>
                    </li>
                    <li>
                        <Link href={"/trees"}
                              className={`text-white hover:text-primary hover:bg-transparent ${activeMenu === 'trees' ? 'active' : ''}`}
                              name={'trees'}
                              onClick={handleClick}
                        >Our trees</Link>
                    </li>
                    <li>
                        <Link href={"/about"}
                              className={`text-white hover:text-primary hover:bg-transparent ${activeMenu === 'about' ? 'active' : ''}`}
                              name={'about'}
                              onClick={handleClick}
                        >About us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;