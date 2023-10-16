'use client'
import React from 'react';
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Team = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/786/4288/2848.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Notre équipe</h1>

                    <div>
                        <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                        <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                        <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    </div>
                </div>

                <img src={"/service1.jpg"} className={"object-cover max-h-96"} alt={"Notre équipe"} />
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"py-10 w-96 text-neutral-700"} />
            </div>

            <section className={"pb-20 px-5 md:px-10 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames={"grid grid-cols-1 sm:grid-cols-2 sm:gap-1 md:grid-cols-3 md:gap-2 w-full"}
                >
                    <a href="/service1.jpg" className={"mb-3"}>
                        <img src={"/service1.jpg"} alt={"Service 1"} />
                    </a>
                    <a href="/service2.jpg" className={"mb-3"}>
                        <img src={"/service2.jpg"} alt={"Service 2"} />
                    </a>
                    <a href="/service3.jpg" className={"mb-3"}>
                        <img src={"/service3.jpg"} alt={"Service 3"} />
                    </a>

                    <a href="/service1.jpg" className={"mb-3"}>
                        <img src={"/service1.jpg"} alt={"Service 1"} />
                    </a>
                    <a href="/service2.jpg" className={"mb-3"}>
                        <img src={"/service2.jpg"} alt={"Service 2"} />
                    </a>
                    <a href="/service3.jpg" className={"mb-3"}>
                        <img src={"/service3.jpg"} alt={"Service 3"} />
                    </a>
                </LightGallery>

                {/*<div className={"grid grid-cols-1 sm:grid-cols-2 sm:gap-1 md:grid-cols-3 md:gap-2 w-full"}>*/}
                {/*    <img src={"/service1.jpg"} className={"mb-3"} alt={"Service 1"} />*/}
                {/*    <img src={"/service2.jpg"} className={"mb-3"} alt={"Service 2"} />*/}
                {/*    <img src={"/service3.jpg"} className={"mb-3"} alt={"Service 3"} />*/}

                {/*    <img src={"/service1.jpg"} className={"mb-3"} alt={"Service 1"} />*/}
                {/*    <img src={"/service2.jpg"} className={"mb-3"} alt={"Service 2"} />*/}
                {/*    <img src={"/service3.jpg"} className={"mb-3"} alt={"Service 3"} />*/}
                {/*</div>*/}
            </section>
        </>
    );
};

export default Team;