'use client'
import React from 'react';
import Quote from "@/app/Quote";

const Trees = () => {

    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(/trees-975091.png)', backgroundPosition: 'bottom'}}>
            </section>

            <section className={"bg-white px-5 pt-10 md:pt-15 md:px-10 lg:pt-20 lg:px-48 xl:px-60 flex flex-col w-full xl:flex-row justify-center"}>
                <div className="w-full mb-10">
                    {/*<h1 className={"text-3xl text-primary font-bold mb-5 text-center"}>Seeds for Trees : A Loblolly Pine Legacy</h1>*/}

                    <div className={"flex flex-col xl:flex-row gap-6 w-full"}>
                        <div className={"basis-1/3"}>
                            <img src="/seedsfortrees_galerie_05.jpg" alt="A Loblolly Pine Legacy" />
                        </div>

                        <div className={"basis-2/3"}>
                            <h1 className={"text-3xl text-primary font-bold mb-5"}>Seeds for Trees : A Loblolly Pine Legacy</h1>

                            <h2 className={"text-2xl text-primary font-bold mb-2"}>Ecological Diversity</h2>
                            <p className={"text-justify mb-5"}>
                                The vast majority of our forests are composed of Loblolly Pines (Pinus Taeda), but we also encourage varieties of hardwood trees such as Sweet Gum (Liquidambar Styraciflua) and American Hornbeam (Carpinus Caroliniana). In the river valleys of North and South Carolina, deciduous trees create incredibly diverse ecosystems that support a wide range of plant and animal species, including birds, mammals, amphibians, and insects.
                            </p>

                            <h2 className={"text-2xl text-primary font-bold mb-2"}>Why choose Loblolly Pine ?</h2>
                            <p className={"text-justify"}>
                                Loblolly Pines (Pinus Taeda) make several important contributions to preserving the planet and environmental sustainability:
                            </p>
                            <ul className={"mt-2 list-disc pl-5"}>
                                <li className={"mb-2 text-justify"}>
                                    <span className={"font-bold"}>Carbon Sequestration:</span>
                                    <br/>Loblolly Pines are excellent carbon sequesters. They absorb carbon dioxide (CO²) from the atmosphere during their growth, thus storing carbon in their wood. This helps reduce the CO² concentration in the atmosphere, contributing to the fight against climate change.
                                </li>
                                <li className={"mb-2 text-justify"}>
                                    <span className={"font-bold"}>Sustainable Timber:</span>
                                    <br/>Loblolly Pines provide high-quality wood widely used in the construction and woodworking industry. Sustainable management of these trees ensures a continuous supply of timber while preserving forest ecosystems.
                                </li>
                                <li className={"mb-2 text-justify"}>
                                    <span className={"font-bold"}>Habitat for Wildlife:</span>
                                    <br/>Loblolly Pine forests shelter a wide variety of plant and animal species, providing vital habitat for numerous wild animals. Preserving these forests contributes to maintaining regional biodiversity.
                                </li>
                                <li className={"mb-2 text-justify"}>
                                    <span className={"font-bold"}>Local Climate Regulation:</span>
                                    <br/>Loblolly Pine forests play a role in regulating local climate. They help maintain appropriate temperature and humidity conditions, positively impacting local weather patterns and precipitation. Whilst the majority of our trees are oblolly Pines grown for commercial timber, this does not mean they lack significant ecological benefits. The seedlings we plant grow much faster and straighter than traditional pines, allowing a larger proportion of the harvest to be used for timber and utility poles production, ensuring long-term sustainable management as carbon sinks. Each individual tree also sequesters 40% more carbon than a standard pine.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full">
                        <h2 className={"text-2xl text-primary font-bold mb-2"}>Carbon Sequestration</h2>
                        <p className={"text-justify"}>
                            The amount of carbon sequestered can vary depending on factors such as age, size, site conditions, and manage- ment practices.
                            <br/>Here are some estimates:
                        </p>
                        <ul className={"mt-2 list-disc pl-5"}>
                            <li className={"mb-2 text-justify"}>
                                <span className={"font-bold"}>Young Loblolly Pines:</span>
                                <br/>Young Loblolly Pines sequester carbon at a relatively lower rate compared to mature trees. On average, a young Loblolly Pine can sequester about 4 to 6 kilograms of carbon dioxide per year.
                            </li>
                            <li className={"mb-2 text-justify"}>
                                <span className={"font-bold"}>Mature Trees:</span>
                                <br/>As Loblolly Pines grow and mature, their carbon sequestration capacity increases. A mature Loblolly Pine can sequester approximately 10 to 20 kilo-grams of carbon dioxide per year. It's important to note that these are approximate figures and can vary depending on specific circumstances. Carbon sequestration rates can also vary throughout the tree's life, with faster rates of carbon uptake during periods of rapid growth. It's also worth considering that Loblolly Pine forests as a whole, rather than individual trees, have a greater carbon sequestration capacity. The total carbon sequestration potential of a Loblolly Pine forest depends on factors such as forest density, planting age, and management practices. Forest management techniques that promote healthy growth and maximize carbon sequestration, such as thinning and proper tree spacing, can further enhance the overall carbon sequestration capacity of Loblolly Pine forests.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className={"bg-white px-5 pt-0 pb-10 md:b-15 md:px-10 lg:pb-20 lg:px-48 xl:px-60 flex flex-col w-full xl:flex-row justify-center"}>
                <div className="w-full mb-10">
                    <h2 className={"text-3xl text-primary font-bold mb-2 text-start"}>Our Deciduous Trees</h2>

                    <p className={"text-justify"}>
                        Deciduous forests play a crucial role in protecting water courses by regulating water flow, preventing erosion, and maintaining water quality. The extensive root systems of deciduous trees contribute to stabilizing the soil and reducing the risk of erosion, which can lead to sedimentation in streams and rivers. These forests also act as natural filters, improving water quality by absorbing excess nutrients and pollutants. Furthermore, they provide natural flood control and climate regulation. Our deciduous trees are allowed to grow and reproduce naturally, and they are not cut very often.
                    </p>
                </div>
            </section>

            <Quote bgUrl={'foret12.jpg'} />

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col min-[1280px]:flex-row gap-6 w-full justify-center"}>
                <video autoPlay={true} loop={true} controls={false}>
                  <source src="/LifeCycle2.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    );
};

export default Trees;