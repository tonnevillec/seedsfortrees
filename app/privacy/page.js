import React from 'react';
const Privacy = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/786/4288/2848.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Privacy Policy</h1>
                </div>

                <div className="w-full mb-10">
                    <p className={"text-neutral-800"}>This privacy policy is about the way information collected is used. No personal information is collected however information is collected about how users access and use this website.</p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>THE INFORMATION COLLECTED AND USED</h3>
                    <p className={"text-neutral-800"}>If you use this website, you are in control of what information is collected, but if you choose not to share your information, you may not be able to access or use some areas of this website.</p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>WHAT INFORMATION IS COLLECTED</h3>
                    <p className={"text-neutral-800"}>The information collected and held may include but is not limited to: a. information about your computer and about your visits to, and use of, the website (including your IP address, approximate geographical location, browser type, referral source, length of visit and number of page views).</p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>USING COOKIES OR OTHER ON-DEVICE STORAGE</h3>
                    <p className={"text-neutral-800"}>Cookies are information files stored on your computer, tablet or smartphone that help websites remember who you are and information about your visit.</p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>TRACKING HOW THE WEBSITE IS USED</h3>
                    <p className={"text-neutral-800"}>Information may be collected about activity on the website, or other organisations may be used to collect it and to share it.<br />
                        This information is used to:<br />
                        a. analyse statistics;<br/>
                        b. track pages and paths used by visitors to, or users of, the website.
                        <br/>
                        For these purposes, the information on the path you take to get to the website and on some of the pages you visit or use through the website, using cookies, web beacons and other on-device storage will be retained.
                    </p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>HOW YOUR INFORMATION IS KEPT SECURE</h3>
                    <p className={"text-neutral-800"}>The security of information is taken very seriously. Technology and security policies are in place to protect any information held.</p>

                    <h3 className={"text-xl text-primary font-bold mb-2 mt-5"}>HOW CHANGES TO THIS PRIVACY POLICY MAY OCCUR</h3>
                    <p className={"text-neutral-800"}>This privacy policy may be updated from time to time so you may want to check it each time you visit the website.</p>
                </div>
            </section>
        </>
    );
};

export default Privacy;