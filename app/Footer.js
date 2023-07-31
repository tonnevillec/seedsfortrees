import React from 'react';

const Footer = () => {
    return (
    <>
        <footer className="footer py-10 bg-base-200 text-base-content px-5 md:px-10 lg:px-20 xl:px-40">
            <div>
                <img src={"/SEEDS-FOR-TREES_logo.png"}
                     alt={"Logo de Seeds For Trees"}
                     className={""} />
            </div>
            <div>
                <span className="footer-title">Infos pratiques</span>
                <a className="link link-hover">xxxxxxxxxxxx</a>
                <a className="link link-hover">xxxxxxxxxxxx</a>
                <a className="link link-hover">xxxxxxxxxxxx</a>
            </div>
            <div>
                <span className="footer-title">A propos de ce site</span>
                <a className="link link-hover">xxxxxxxxxxxx</a>
                <a className="link link-hover">xxxxxxxxxxxx</a>
            </div>
            <div>
                <span className="footer-title">Rejoignez-nous sur</span>
                <a className="link link-hover">Instagram</a>
            </div>
        </footer>
        <footer className="footer footer-center p-4 bg-base-200 text-base-content">
            <div>
                <p>Copyright © 2023 - All right reserved by Seeds For Trees</p>
            </div>
        </footer>
    </>
    );
};

export default Footer;