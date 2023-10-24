import React from 'react';
const Faq = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/786/4288/2848.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-primary font-bold mb-5 text-center"}>Frequently Asked Questions</h1>

                    <h2 className={"text-2xl text-primary font-bold mb-2"}>Why Do We Choose Loblolly Pine?</h2>

                    <p className={"text-justify"}>
                        We select Loblolly Pine for several reasons :
                    </p>

                    <ul className={"text-xl list-disc pl-5 mb-5"}>
                        <li className={"mb-2 text-justify"}>It suits the climate in North and South Carolina.</li>
                        <li className={"mb-2 text-justify"}>It thrives in our soil type.</li>
                        <li className={"mb-2 text-justify"}>It is more disease-resistant than other pine species.</li>
                        <li className={"mb-2 text-justify"}>Are Young Commercial Forests Good for Carbon Sequestration ?</li>
                        <li className={"mb-2 text-justify"}>
                            You can find more information about carbon sequestration in young commercial forests in this document: <a href={"https://www.ncasi.org/wp-content/uploads/2021/01/NCASI22_Forest_Carbon_YoungVsOld_print.pdf"} target={"_blank"} title={"PDF"}>NCASI22_Forest_Carbon_YoungVsOld_print.pdf</a>
                        </li>
                    </ul>

                    <h2 className={"text-2xl text-primary font-bold mb-2"}>What Are the Trees Used For?</h2>

                    <ul className={"text-xl list-disc pl-5 mb-5"}>
                        <li className={"mb-2 text-justify"}>The use of trees varies depending on their age:</li>
                        <li className={"mb-2 text-justify"}>
                            At 10 years, the wood is processed into Medium Density Fiberboard (MDF), which is used for furniture like cabinets, shelves, tables, chairs, dressers, as well as for construction materials like wall panels, skirting, and architraves.
                        </li>
                        <li className={"mb-2 text-justify"}>
                            At 20 years, the wood is used to make Chipboard and Saw Timber. Chipboard serves similar applications to MDF but is more cost-effective and lighter. Saw Timber is primarily used in construction, particularly in the US where most houses are timber-framed.
                        </li>
                        <li className={"mb-2 text-justify"}>
                            At 30 years, the wood is transformed into telegraph poles or wider saw timber.
                        </li>
                    </ul>

                    <h2 className={"text-2xl text-primary font-bold mb-2"}>Where Are the Forests Located?</h2>

                    <ul className={"text-xl list-disc pl-5 mb-5"}>
                        <li className={"mb-2 text-justify"}>Our forests are situated near the following areas:</li>
                        <li className={"mb-2 text-justify"}>
                            Near Elizabethtown, Bladen County, North Carolina.
                        </li>
                        <li className={"mb-2 text-justify"}>
                            Near Latta, Marlboro County, North Carolina.
                        </li>
                        <li className={"mb-2 text-justify"}>
                            Near Lakewood, Sumter County, South Carolina.
                        </li>
                        <li className={"mb-2 text-justify"}>
                            Near Indiantown, Williamsburg County, South Carolina.
                        </li>
                    </ul>

                    <h2 className={"text-2xl text-primary font-bold mb-2"}>Where Is the Wood Processed?</h2>

                    <ul className={"text-xl list-disc pl-5 mb-5"}>
                        <li className={"mb-2 text-justify"}>
                            South Carolina and North Carolina have a well-established forestry industry, with a large number of sawmills located close to the forests for timber processing.
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Faq;