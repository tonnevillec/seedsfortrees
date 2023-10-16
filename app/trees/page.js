'use client'
import React from 'react';
import Quote from "@/app/Quote";

const Trees = () => {

    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(/seedsfortrees_galerie_03.jpg)'}}>
            </section>

            <section className={"bg-white px-5 md:px-10 lg:px-20 py-10 md:py-15 lg:py-20 flex flex-col xl:flex-row w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Nos arbres</h1>

                    <div className={"flex flex-col xl:flex-row gap-6 w-full"}>
                        <div className={"basis-1/3"}>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                        </div>

                        <div className={"basis-1/3"}>
                            <img src="/seedsfortrees_galerie_05.jpg" alt="Nos arbres" />
                        </div>

                        <div className={"basis-1/3"}>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Quote bgUrl={'foret12.jpg'} />

            <section className={"bg-white px-5 md:px-10 lg:px-20 pt-10 md:pt-15 lg:pt-20 flex flex-col xl:flex-row gap-6 w-full justify-center"}>
                <div className={"basis-1/3"}>
                    <img src="/seedsfortrees_galerie_01.jpg" className={"h-96"} alt="Nos arbres" />
                </div>

                <div className={"basis-1/3"}>
                    <img src="/seedsfortrees_galerie_02.jpg" className={"h-96"} alt="Nos arbres" />
                </div>

                <div className={"basis-1/3"}>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>
            </section>

            <section className={"bg-white px-5 md:px-10 lg:px-20 flex flex-row gap-6 w-full justify-center py-5"}>
                <div>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"py-10 w-96 text-neutral-700"} />
            </div>

            <section className={"bg-white px-5 md:px-10 lg:px-20 flex flex-col min-[1280px]:flex-row gap-6 w-full justify-center pb-20"}>
                <div className={"basis-1/3"}>
                    <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Le cycle de vie de nos arbres</h2>

                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>

                <div className={"relative basis-2/3 w-full"}>
                    <video autoPlay={true} loop={true} controls={false}>
                      <source src="/LIFECYCLETREES.mp4" type="video/mp4" />
                    </video>
                </div>
            </section>
        </>
    );
};

export default Trees;