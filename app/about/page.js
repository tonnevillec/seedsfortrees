import React from 'react';

const About = () => {
    return (
        <>
            <section className="hero h-[600px]"
                     style={{backgroundImage: 'url(ABOUT/ABOUT01.png)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-15 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full">
                    <h1 className={"text-3xl text-primary font-bold mb-5 text-left"}>Who we are ?</h1>

                    <p className={"mb-8 text-justify"}>
                        Welcome to the world of Denman Corporation, where our commitment to preserving our planet and combating climate change comes to life under the banner "Seeds for Trees." In 2023, we are proud to own 1,439 acres of forest in North and South Carolina, where nature thrives, and trees are at the heart of our mission.
                    </p>

                    <div className={"flex flex-col lg:flex-row lg:items-start w-full gap-5"}>
                        <div className="lg:basis-1/2 lg:mb-0 lg:pr-5">
                            <h2 className={"text-2xl text-primary font-bold mb-5"}>Key Figures</h2>

                            <ul className={"list-disc pl-5"}>
                                <li className={"mb-5 text-justify"}>In 2023, our forests house <span className={"text-primary text-2xl text-bold"}>31,000</span> tons of Loblolly Pines and <span className={"text-primary text-2xl text-bold"}>15,000</span> tons of hardwood, including Gum Trees, creating a diverse and vital ecosystem.</li>
                                <li className={"mb-5 text-justify"}>Over the past six years, we have planted <span className={"text-primary text-2xl text-bold"}>315,000</span> trees, strengthening our commitment to the environment.</li>
                                <li className={"mb-5 text-justify"}>To date, our forest hosts approximately <span className={"text-primary text-2xl text-bold"}>410,000</span> trees, a precious resource for the planet and the life it sustains.</li>
                                <li className={"mb-5 text-justify"}>Each year, we sequester around <span className={"text-primary text-2xl text-bold"}>2.6</span> tons of carbon dioxide, thus contributing to the fight against climate change.</li>
                            </ul>
                        </div>

                        <div className="lg:basis-1/2 lg:mb-0 lg:pr-5">
                            <video autoPlay={true} loop={true} controls={false}>
                                <source src="/key%20facts.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"py-8 w-96 text-neutral-700"} />
            </div>

            <section className={"bg-white px-5 pb-10 md:px-10 lg:px-48 xl:px-60 flex flex-col lg:flex-row lg:items-start w-full"}>
                <div className="lg:basis-2/3 mb-5 lg:mb-0 lg:pr-5">
                    <h2 className={"text-2xl text-primary font-bold mb-5"}>Our Mission</h2>

                    <div>
                        <p className={"text-justify mb-5"}>Our mission is simple but essential.
                            <br/>We are committed to:
                        </p>
                        <ul className={"list-disc pl-5"}>
                            <li className={"mb-5 text-justify"}>
                                Planting the highest quality trees to regenerate our environment.
                            </li>
                            <li className={"mb-5 text-justify"}>
                                Carefully managing these trees throughout their life cycle, ensuring their continued contribution to the fight against climate change.
                            </li>
                            <li className={"mb-5 text-justify"}>
                                Producing the highest quality wood products for the construction industry while capturing the carbon stored in the wood.
                            </li>
                            <li className={"mb-5 text-justify"}>
                                Harvesting end-of-life trees while preserving their roots for natural forest regeneration.
                            </li>
                            <li className={"mb-5 text-justify"}>
                                Processing trees in local sawmills, reducing the carbon footprint of our operations.
                            </li>
                            <li className={"mb-5 text-justify"}>
                                Replanting new trees on the same land, thus relaunching the virtuous cycle once again.
                            </li>
                        </ul>

                        <p className={"text-justify"}>We make wise investments in high-quality seedlings and experienced forest managers. At Seeds for Trees, our commitment to the environment is clear. We do not invest in expensive marketing or gift certificates. Every penny we receive is invested in seedlings, all of which are planted in our forests, advancing our mission for a greener future.</p>
                    </div>
                </div>

                <div className={"w-full grid place-content-center lg:basis-1/3"}>
                    <img src={"/ABOUT/ABOUT02.png"} alt="Plantation" />
                </div>
            </section>

            <section className={"px-5 pb-20 md:px-10 lg:px-48 xl:px-60 w-full"}>
                <h2 className={"text-2xl text-primary font-bold mb-5"}>Our History</h2>

                <div className={"flex justify-center"}>
                    <img src="/notre-histoire.png" className={""} alt="Our History" />
                </div>
            </section>
        </>
    );
};

export default About;