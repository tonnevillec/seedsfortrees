'use client'
import React from 'react';
import Citations from "@/app/Citations";

const Trees = () => {

    return (
        <>
            <section className="hero h-[600px]"
                     style={{backgroundImage: 'url(/TREES/TREES01.png)', backgroundPosition: 'bottom'}}>
            </section>

            <section className={"bg-white px-5 pt-10 md:pt-15 md:px-10 lg:pt-20 lg:px-48 xl:px-60 flex flex-col w-full xl:flex-row justify-center"}>
                <div className="w-full mb-10 block">
                    <div className={"lg:float-left lg:max-w-[300px] xl:max-w-[400px] me-5 mb-5"}>
                        <img src="/TREES/TREES02.png" alt="A Loblolly Pine Legacy" className={"mb-5"} />
                        <img src="/TREES/TREES03.png" alt="A Loblolly Pine Legacy" />
                    </div>

                    <div>
                        <h1 className={"text-3xl text-primary font-bold mb-5"}>Seeds for Trees : A Loblolly Pine Legacy</h1>

                        <h2 className={"text-2xl text-primary font-bold mb-5"}>Ecological Diversity</h2>
                        <p className={"text-justify mb-5"}>
                            The vast majority of our forests are composed of Loblolly Pines (Pinus Taeda), but we also encourage varieties of hardwood trees such as Sweet Gum (Liquidambar Styraciflua) and American Hornbeam (Carpinus Caroliniana). In the river valleys of North and South Carolina, deciduous trees create incredibly diverse ecosystems that support a wide range of plant and animal species, including birds, mammals, amphibians, and insects.
                        </p>

                        <h2 className={"text-2xl text-primary font-bold mb-5"}>Why choose Loblolly Pine ?</h2>
                        <p className={"text-justify mb-5"}>
                            Loblolly Pines (Pinus Taeda) make several important contributions to preserving the planet and environmental sustainability:
                        </p>

                        <h3 className={"text-base font-bold"}>Carbon Sequestration:</h3>
                        <p className={"text-justify pl-10 mb-5"}>
                            Loblolly Pines are excellent carbon sequesters. They absorb carbon dioxide (CO²) from the atmosphere during their growth, thus storing carbon in their wood. This helps reduce the CO² concentration in the atmosphere, contributing to the fight against climate change.
                        </p>

                        <h3 className={"text-base font-bold"}>Sustainable Timber:</h3>
                        <p className={"text-justify pl-10 mb-5"}>
                            Loblolly Pines provide high-quality wood widely used in the construction and woodworking industry. Sustainable management of these trees ensures a continuous supply of timber while preserving forest ecosystems.
                        </p>

                        <h3 className={"text-base font-bold"}>Habitat for Wildlife:</h3>
                        <p className={"text-justify pl-10 mb-5"}>
                            Loblolly Pine forests shelter a wide variety of plant and animal species, providing vital habitat for numerous wild animals. Preserving these forests contributes to maintaining regional biodiversity.
                        </p>

                        <h3 className={"text-base font-bold"}>Local Climate Regulation:</h3>
                        <p className={"text-justify pl-10 mb-5"}>
                            Loblolly Pine forests play a role in regulating local climate. They help maintain appropriate temperature and humidity conditions, positively impacting local weather patterns and precipitation. Whilst the majority of our trees are oblolly Pines grown for commercial timber, this does not mean they lack significant ecological benefits. The seedlings we plant grow much faster and straighter than traditional pines, allowing a larger proportion of the harvest to be used for timber and utility poles production, ensuring long-term sustainable management as carbon sinks. Each individual tree also sequesters 40% more carbon than a standard pine.
                        </p>

                        <h2 className={"text-2xl text-primary font-bold mb-5"}>Carbon Sequestration</h2>
                        <p className={"text-justify mb-5"}>
                            The amount of carbon sequestered can vary depending on factors such as age, size, site conditions, and manage- ment practices.
                            <br/>Here are some estimates:
                        </p>

                        <h3 className={"text-base font-bold"}>Young Loblolly Pines:</h3>
                        <p className={"text-justify mb-5"}>
                            Young Loblolly Pines sequester carbon at a relatively lower rate compared to mature trees. On average, a young Loblolly Pine can sequester about 4 to 6 kilograms of carbon dioxide per year.
                        </p>

                        <h3 className={"text-base font-bold"}>Mature Trees:</h3>
                        <p className={"text-justify mb-10"}>
                            As Loblolly Pines grow and mature, their carbon sequestration capacity increases. A mature Loblolly Pine can sequester approximately 10 to 20 kilo-grams of carbon dioxide per year. It's important to note that these are approximate figures and can vary depending on specific circumstances. Carbon sequestration rates can also vary throughout the tree's life, with faster rates of carbon uptake during periods of rapid growth. It's also worth considering that Loblolly Pine forests as a whole, rather than individual trees, have a greater carbon sequestration capacity. The total carbon sequestration potential of a Loblolly Pine forest depends on factors such as forest density, planting age, and management practices. Forest management techniques that promote healthy growth and maximize carbon sequestration, such as thinning and proper tree spacing, can further enhance the overall carbon sequestration capacity of Loblolly Pine forests.
                        </p>

                        <h2 className={"text-2xl text-primary font-bold mb-5 lg:mt-1"}>Our Deciduous Trees</h2>
                        <p className={"text-justify"}>
                            Deciduous forests play a crucial role in protecting water courses by regulating water flow, preventing erosion, and maintaining water quality. The extensive root systems of deciduous trees contribute to stabilizing the soil and reducing the risk of erosion, which can lead to sedimentation in streams and rivers. These forests also act as natural filters, improving water quality by absorbing excess nutrients and pollutants. Furthermore, they provide natural flood control and climate regulation. Our deciduous trees are allowed to grow and reproduce naturally, and they are not cut very often.
                        </p>
                    </div>
                </div>
            </section>

            <Citations bgUrl={'TREES/TREES04.png'} text={""} />

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col min-[1280px]:flex-row gap-6 w-full justify-center"}>
                <video autoPlay={true} loop={true} controls={false}>
                  <source src="/LifeCycle2.mp4" type="video/mp4" />
                </video>
            </section>
        </>
    );
};

export default Trees;