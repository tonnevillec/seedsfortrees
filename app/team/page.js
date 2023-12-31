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
            <section className="hero h-[600px]"
                     style={{backgroundImage: 'url(/TEAM/TEAM01.png)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-primary font-bold mb-5 text-center"}>We aim to make a difference</h1>

                    <div>
                        <p className={"text-neutral-500 text-justify"}>
                            At "Seeds for Trees," we can rely on our dedicated local team of foresters, true pillars of our forest community. Endowed with over 20 years of experience in the field of forestry, they are more than just professionals: they are natures stewards. Their passion for preserving our environment guides every action they take throughout our mission.
                        </p>
                        <p className={"text-neutral-500 text-justify"}>
                            Forestry is the art and science of cultivating and managing forests sustainably. This means that we ensure our forest activities respect the natural balance of forest ecosystems while using trees to produce wood, paper, and other forest products. Forestry is essential for preserving our environment, providing renewable resources, and protecting biodiversity. What sets it apart is its commitment to sustainability. Forests are a renewable resource, and forestry ensures that we do not overexploit them. Thus, it helps preserve these valuable natural spaces for future generations.
                        </p>
                        <p className={"text-neutral-500 text-justify"}>
                            Forestry is inherently sustainable, playing a key role in preserving our forests and our planet.
                        </p>
                    </div>
                </div>

                <img src={"/TEAM/TEAM02.png"} className={"object-cover"} alt={"Our team"} />
            </section>

            <section className={"bg-white px-5 pt-0 pb-10 md:pb-10 md:px-10 lg:pb-15 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full">
                    <h1 className={"text-3xl text-primary font-bold mb-5 text-center"}>Nature's stewards</h1>

                    <div>
                        <p className={"text-neutral-500 text-justify"}>
                            Our foresters are much more than forest guardians; they are true experts in forestry. With an in-depth knowledge of local forest ecosystems and sustainable forest management techniques, they understand the crucial importance of maintaining a balance between tree growth, biodiversity preservation, and carbon sequestration.
                        </p>
                        <p className={"text-neutral-500 text-justify"}>
                            They are also the guardians of our commitment to the environment. They ensure that every tree we plant is carefully selected and planted, using sound and responsible methods. They closely monitor the growth and development of each tree, thus guaranteeing a maximum contribution to carbon sequestration and forest regeneration. They visit the forests every quarter and check for damage and disease. The arrange the planting, thinning and cutting. Furthermore, they play an active role in preserving the local forest ecosystems, ensuring the protection of biodiversity and the harmonious integration of our activities into the natural environment that surrounds
                            them.
                        </p>
                        <p className={"text-neutral-500 text-justify"}>
                            This team of experts is the lifeblood of our environmental mission at "Seeds for Trees." Their dedication to the planet, combined with their expertise in forestry and their commitment to protecting our environment, breathes life into our actions. They are the driving force that constantly propels us to seek innovative forest management practices and make our vision of a greener future a reality.
                        </p>
                    </div>
                </div>
            </section>

            <section className={"pb-20 px-5 md:px-10 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames={"grid grid-cols-2 sm:grid-cols-4 gap-1 md:grid-cols-5 w-full"}
                >
                    <a href="/TEAM/Galerie/03.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/03.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/02.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/02.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/11.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/11.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/04.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/04.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/05.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/05.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/06.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/06.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/07.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/07.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/08.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/08.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/09.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/09.jpg"} alt={""} />
                    </a>
                    <a href="/TEAM/Galerie/10.jpg" className={"mb-3"}>
                        <img src={"/TEAM/Galerie/10.jpg"} alt={""} />
                    </a>
                </LightGallery>
            </section>
        </>
    );
};

export default Team;