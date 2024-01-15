'use client'

import Link from "next/link";

import Citations from "@/app/Citations";
import React, {useState} from "react";

import ReactModal from 'react-modal';

ReactModal.setAppElement('#ReactModalPortal');

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    const [currentImg, setCurrentImg] = useState('');

    const handleOpenModal = (e) => {
        e.preventDefault();
        setCurrentImg(e.currentTarget.dataset.target);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setCurrentImg('');
        setShowModal(false);
    }

  return (
    <>
        <section id={"video-hero"}>
            <video autoPlay={true} loop={true} controls={false} muted={true} preload={"auto"}>
                <source src="/HOME/HOME_2.mp4" type="video/mp4" />
            </video>
            <div className={"caption"}>
                <h1 className="mb-5 text-5xl font-bold">SEEDS FOR TREES</h1>
                <p className="mb-5">A simple gesture to renew nature, one tree at a time.</p>
                <Link href={"#showmore"} className="btn btn-outline rounded-full text-white border-white hover:text-primary hover:border-primary hover:bg-transparent">Discover</Link>
            </div>
        </section>

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 w-full"} id={"showmore"}>
            <div className={"grid md:grid-cols-3 gap-1 w-full"} id={"ReactModalPortal"}>
                <a href="/HOME/HOME01.png" className={"md:pr-2"} onClick={handleOpenModal} data-target={"/HOME/HOME01.png"}>
                    <img alt="" src="/HOME/HOME01.png" />
                </a>
                <a href="/HOME/HOME02.png" className={"md:px-1"} onClick={handleOpenModal} data-target={"/HOME/HOME02.png"}>
                    <img alt="" src="/HOME/HOME02.png" />
                </a>
                <a href="/HOME/HOME03.png" className={"md:pl-2"} onClick={handleOpenModal} data-target={"/HOME/HOME03.png"}>
                    <img alt="" src="/HOME/HOME03.png" />
                </a>

                <ReactModal
                    isOpen={showModal}
                    contentLabel=""
                    style={{ position: 'absolute'}}
                >
                    <h2 className={"w-full text-end mb-2"}>
                        <button onClick={handleCloseModal} className={"btn btn-ghost btn-sm"}>[X] Close</button>
                    </h2>

                    <img alt="" src={currentImg} />

                    <div className={"grid grid-cols-3 justify-center gap-1 mt-3"}>
                        <img alt="" src="/HOME/HOME01.png" onClick={() => setCurrentImg("/HOME/HOME01.png")} style={{ cursor: 'pointer' }} />
                        <img alt="" src="/HOME/HOME02.png" onClick={() => setCurrentImg("/HOME/HOME02.png")} style={{ cursor: 'pointer' }} />
                        <img alt="" src="/HOME/HOME03.png" onClick={() => setCurrentImg("/HOME/HOME03.png")} style={{ cursor: 'pointer' }} />
                    </div>
                </ReactModal>
            </div>

            <h2 className={"text-2xl text-primary font-bold mb-5 mt-10"}>Who we are and what we do</h2>

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
