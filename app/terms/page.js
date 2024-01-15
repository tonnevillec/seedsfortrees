import React from 'react';
const Terms = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/786/4288/2848.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Terms & Conditions</h1>
                </div>

                <div className="w-full mb-10 text-neutral-800">
                    <p className={"mb-5"}>By using our site you accept these terms.</p>
                    <p className={"mb-5"}>By using our site, you confirm that you accept these terms of use and that you agree to comply with them.</p>
                    <p className={"mb-5"}>If you do not agree to these terms, you must not use our site.</p>
                    <p className={"mb-5"}>We amend these terms from time to time. These terms were last updated on 27/12/2023.</p>
                    <p className={"mb-5"}>We do not guarantee that our site will always be available, fully functional or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our site for business and operational reasons.</p>
                    <p className={"mb-5"}>The content on our site is provided for general information, communication & educational purposes only.</p>
                    <p className={"mb-5"}>We are the owner of all information, photos and graphics on our site. All such rights are reserved. You may print off and download extracts, of any page(s) from our site for your personal non-commercial use. You must not change or alter any materials you print off or use. If you wish to use data from our website for commercial purposes or write about us in a blog, magazine or other publication, then please contact us for permission.</p>
                    <p className={"mb-5"}>However, You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it. You must also not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists.</p>

                    <p>Our logo is a registered trade mark and is the property of the Steeple Group.</p>
                </div>
            </section>
        </>
    );
};

export default Terms;