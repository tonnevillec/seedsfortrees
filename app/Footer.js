import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
    <>
        <footer className="footer py-20 bg-base-300 text-base-content px-10 md:px-20 lg:px-40 xl:px-60">
            {/*<div>*/}
            {/*    <img src={"/SEEDS-FOR-TREES_logo.png"}*/}
            {/*         alt={"Logo de Seeds For Trees"}*/}
            {/*    />*/}
            {/*</div>*/}
            <div>
                <span className="footer-title">Useful links</span>
            </div>
            <div>
                <Link href={"/terms"} className="link link-hover link-secondary">Terms & Conditions</Link>
            </div>
            <div>
                <Link href={"/privacy"} className="link link-hover link-secondary">Privacy Policy</Link>
            </div>
            <div>
                <Link href={"/faq"} className="link link-hover link-secondary">FAQ</Link>
            </div>
        </footer>
        <footer className="footer footer-center p-4 bg-info text-white">
            <div>
                <p>Copyright © 2023 - All right reserved by Seeds For Trees</p>
            </div>
        </footer>
    </>
    );
};

export default Footer;