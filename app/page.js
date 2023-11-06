'use client'
import Quote from "@/app/Quote";
import Link from "next/link";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Citations from "@/app/Citations";
import React from "react";

export default function Home() {

  return (
    <>

        {/*<section id={"video-fond hero min-h-screen"}>*/}
        {/*    <video autoPlay={true} loop={true} controls={false} muted={true}>*/}
        {/*        <source src="/HOME/HOME.mp4" type="video/mp4" />*/}
        {/*    </video>*/}
        {/*</section>*/}

        {/*<section className="hero min-h-screen"*/}
        {/*         style={{backgroundImage: 'url(/HOME/HOME.gif)'}}>*/}
        {/*    <div className="hero-overlay bg-opacity-60"></div>*/}
        {/*    <div className="hero-content text-center text-base-100">*/}
        {/*        <div className="max-w-md">*/}
        {/*            <h1 className="mb-5 text-5xl font-bold">SEEDS FOR TREES</h1>*/}
        {/*            <p className="mb-5">A simple gesture to renew nature, one tree at a time.</p>*/}
        {/*            <Link href={"#showmore"} className="btn btn-outline rounded-full text-white border-white hover:text-primary hover:border-primary hover:bg-transparent">Discover</Link>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</section>*/}

        <section className="hero min-h-screen"
                 style={{backgroundImage: 'url(/forest-1867975.png)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-base-100">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">SEEDS FOR TREES</h1>
                    <p className="mb-5">A simple gesture to renew nature, one tree at a time.</p>
                    <Link href={"#showmore"} className="btn btn-outline rounded-full text-white border-white hover:text-primary hover:border-primary hover:bg-transparent">Discover</Link>
                </div>
            </div>
        </section>

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 w-full"} id={"showmore"}>
            <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames={"flex flex-row w-full"}
            >
                <a href="/HOME/HOME01.png" className={"w-1/3 md:pr-2"}>
                    <img alt="Service 2" src="/HOME/HOME01.png" />
                </a>
                <a href="/HOME/HOME02.png" className={"w-1/3 md:px-1"}>
                    <img alt="Service 2" src="/HOME/HOME02.png" />
                </a>
                <a href="/HOME/HOME03.png" className={"w-1/3 md:pl-2"}>
                    <img alt="Service 3" src="/HOME/HOME03.png" />
                </a>
            </LightGallery>

            <h2 className={"text-2xl text-primary font-bold mb-5 mt-10"}>Who We Are and What We Do</h2>

            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className={"basis-3/4"}>
                    <p className={"text-neutral-500 text-justify"}>
                        Welcome to "Seeds for Trees," an initiative born from Denman Corporation's commitment to preserving our planet and combating climate change. In 2023, Denman Corporation proudly owns forests in North and South Carolina, where nature thrives, and trees are at the heart of our common mission.
                    </p>
                </div>

                <div className="w-full flex items-center justify-start basis-1/4">
                    <Link className="btn btn-info" href={"/about"}>Show more</Link>
                </div>
            </div>
        </section>

        <Citations bgUrl={'Citation1.png'} text={'Our actions are the roots of a sustainable future, a green legacy that flourishes over time'} />

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
            <img src={"/HOME/HOME04.png"} className={"object-cover max-h-96"} alt={"Key Players in Our Mission"} />

            <h2 className={"text-2xl text-primary font-bold mb-5 mt-10"}>Key Players in Our Mission</h2>
            <div className="flex flex-col md:flex-row w-full gap-5">
                <div className={"basis-3/4"}>
                    <p className={"text-neutral-500 text-justify"}>
                        At the core of our environmental mission is a dedicated team committed to nature preservation and sustainable forest management. Their daily work is essential to ensure that our trees contribute to environmental regeneration and carbon sequestration.
                    </p>
                </div>

                <div className="w-full flex items-center justify-start basis-1/4">
                    <Link className="btn btn-info" href={"/team"}>Show more</Link>
                </div>
            </div>
        </section>

        <Citations bgUrl={'Citation2.png'} text={'Like the drops of water that feed the river, our benevolent actions spread creating an ocean of change'} />

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col gap-5 w-full lg:flex-row lg:items-start"}>
            <div className={"w-full grid place-content-center lg:basis-1/3"}>
                <img src={"/HOME/HOME05.png"} alt="Plantation" />
            </div>

            <div className="lg:basis-2/3 mt-5 lg:mt-0 lg:pl-5">
                <h2 className={"text-2xl text-primary font-bold mb-5"}>Trees at the Heart of Our Action</h2>

                <div className={"text-neutral-500 lg:basis-2/3"}>
                    <p className={"text-justify"}>In our forests, thousands of tons of Loblolly Pines and hardwoods thrive, silently capturing approximately 2.6 tons of CO² each year. They are the quiet guardians of our planet, playing a vital role in our environmental preservation mission.</p>
                </div>

                <div className="w-full text-start mt-5">
                    <Link className="btn btn-info" href={"/trees"}>Show more</Link>
                </div>
            </div>
        </section>

        <Citations bgUrl={'Citation3.png'} text={'Uniting for a safer, more sustainable future.'} />
    </>
  )
}
