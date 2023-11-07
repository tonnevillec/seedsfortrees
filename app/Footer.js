import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
    <>
        <footer className="flex flex-row w-full bg-base-300 text-base-content py-20 px-10 md:px-20 lg:px-40 xl:px-60">
            {/*<div>*/}
            {/*    <img src={"/SEEDS-FOR-TREES_logo.png"}*/}
            {/*         alt={"Logo de Seeds For Trees"}*/}
            {/*    />*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <span className="footer-title">Useful links</span>*/}
            {/*</div>*/}
            <div className={"basis-1/3 text-center"}>
                <Link href={"/terms"} className="link link-hover link-secondary">Terms & Conditions</Link>
            </div>
            <div className={"basis-1/3 text-center"}>
                <Link href={"/privacy"} className="link link-hover link-secondary">Privacy Policy</Link>
            </div>
            <div className={"basis-1/3 text-center"}>
                <Link href={"/faq"} className="link link-hover link-secondary">FAQ</Link>
            </div>
        </footer>
        <footer className="footer  text-center justify-items-center py-4 px-10 md:px-20 lg:px-40 xl:px-60 bg-info text-white">
            <p>Copyright © 2023 - All right reserved by Seeds For Trees</p>
        </footer>
    </>
    );
};

export default Footer;