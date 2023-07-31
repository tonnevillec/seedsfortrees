// 'use client'

import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Header = () => {

    // const handleLocaleChange= () => {
    //     console.log('En => Fr')
    // }

    return (
        <div className="fixed top-0 left-0 right-0 navbar text-white px-20 glass z-[1030]">
            <div className="navbar-start">
                <Link href={"/"}>
                    <Image src={"/SEEDS-FOR-TREES_logo.png"}
                           alt={"Seeds For trees logo"}
                           width={160}
                           height={170}
                    />
                </Link>

                <div className="dropdown ms-20">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 text-base-content rounded-box w-52">
                        <li>
                            <Link href={"/"}>Accueil</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Notre équipe</Link>
                        </li>
                        <li>
                            <Link href={"/"}>Nos arbres</Link>
                        </li>
                        <li>
                            <Link href={"/"}>A propos</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href={"/"}
                              className={"hover:text-green-600 hover:bg-transparent"}
                        >Accueil</Link>
                    </li>
                    <li>
                        <Link href={"/team"}
                              className={"hover:text-green-600 hover:bg-transparent"}
                        >Notre équipe</Link>
                    </li>
                    <li>
                        <Link href={"/trees"}
                              className={"hover:text-green-600 hover:bg-transparent"}
                        >Nos arbres</Link>
                    </li>
                    <li>
                        <Link href={"/about"}
                              className={"hover:text-green-600 hover:bg-transparent"}
                        >A propos</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {/*<input type="checkbox"*/}
                {/*       className="toggle toggle-primary"*/}
                {/*       onChange={handleLocaleChange}*/}
                {/*       checked />*/}
                <button className="btn btn-sm btn-outline btn-primary rounded-full">
                    <span className={"opacity-50 hover:text-white hover:opacity-100"}>En</span> | <span className={"text-white"}>Fr</span>
                </button>
            </div>
        </div>
    );
};

export default Header;