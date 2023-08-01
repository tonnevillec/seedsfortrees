import React from 'react';
import Quote from "@/app/Quote";
import CycleVie from "@/app/trees/CycleVie";

const Trees = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(/foret13.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Nos arbres</h1>

                    <div className={"flex flex-row gap-6 w-full"}>
                        <div className={"basis-1/3"}>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                            <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                        </div>

                        <div className={"basis-1/3"}>
                            <img src="/foret8.jpg" alt="Nos arbres" />
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

            <section className={"bg-white px-5 pt-10 md:pt-15 md:px-10 lg:pt-20 lg:px-48 xl:px-60 flex flex-row gap-6 w-full justify-center"}>
                <div className={"basis-1/3"}>
                    <img src="/foret8.jpg" alt="Nos arbres" />
                </div>

                <div className={"basis-1/3"}>
                    <img src="/foret8.jpg" alt="Nos arbres" />
                </div>

                <div className={"basis-1/3"}>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>
            </section>

            <section className={"bg-white px-5 md:px-10 lg:px-48 xl:px-60 flex flex-row gap-6 w-full justify-center py-5"}>
                <div>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"py-10 w-96 text-neutral-700"} />
            </div>

            <section className={"bg-white px-5 md:px-10 lg:px-48 xl:px-60 flex flex-row gap-6 w-full justify-center pb-20"}>
                <div className={"basis-1/3"}>
                    <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Le cycle de vie de nos arbres</h2>

                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>
                </div>

                <div className={"relative w-full h-[750px]"}>
                    <div className={"bg-[#95C1B7] absolute top-[106px] left-0 rounded-full px-28 py-[107px] border-2 border-white shadow-2xl shadow-neutral-500"}><img src={"/SEEDS-FOR-TREES_logo.png"} alt={""}/></div>

                    {/*<CycleVie id={1} top={0} left={300} topChildren={'0px'} leftChildren={'450px'} title={'Année 0'}>Les graines pollinisées par contrôle de masse sont plantées et élevées dans une pépinière spécialisée.</CycleVie>*/}

                    {/*<CycleVie id={2} top={105} left={400} topChildren={'105px'} leftChildren={'550px'} title={'Année 1'}>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>545</span><span className={"text-primary"}>Arbres par hectare</span><br/>*/}
                    {/*    Les jeunes plants sont plantés en rangs sur des plates-formes surélevées.*/}
                    {/*</CycleVie>*/}

                    {/*<CycleVie id={3} top={250} left={438} topChildren={'250px'} leftChildren={'588px'} title={'Année 10'}>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>L20</span><span className={"text-primary"}>cm</span>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>H13</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>16</span><span className={"text-primary"}>m</span><br/>*/}
                    {/*    Première éclaircie. Le bois est réduit en pulpe pour fabriquer du MDF*. Des études scientifiques montrent que le MDF est un stock de carbone avéré.*/}
                    {/*</CycleVie>*/}

                    {/*<CycleVie id={4} top={390} left={400} topChildren={'390px'} leftChildren={'550px'} title={'Année 20'}>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>L28</span><span className={"text-primary"}>cm</span>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>H16</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>21</span><span className={"text-primary"}>m</span><br/>*/}
                    {/*    Le bois d'éclaircie est utilisé pour les panneaux de particules et le bois de sciage.*/}
                    {/*</CycleVie>*/}

                    {/*<CycleVie id={5} top={500} left={300} topChildren={'525px'} leftChildren={'450px'} title={'Année 30'}>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>L30</span><span className={"text-primary"}>cm</span>*/}
                    {/*    <span className={"text-primary text-3xl font-bold me-1"}>H21</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>30</span><span className={"text-primary"}>m</span><br/>*/}
                    {/*    Tous les arbres sont abattus, mais les racines restent intactes. Les racines retiennent 20% du carbone contenu dans le sol. Les arbres droits sont sélectionnés pour les poteaux télégraphiques. Les autres sont utilisés comme planches dans la construction de maisons.*/}
                    {/*</CycleVie>*/}

                    {/*<CycleVie id={6} top={544} left={144} topChildren={'665px'} leftChildren={'300px'} title={'Année 32'}>Des jeunes plants sont plantés sur le sol de la forêt et le cycle de vie se répète.</CycleVie>*/}


                    <div className={"absolute top-0 left-[300px] bg-[#2A5042] text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />0</div>
                        <div className={"absolute top-0 left-[450px]"}>Les graines pollinisées par contrôle de masse sont plantées et élevées dans une pépinière spécialisée.</div>

                    <div className={"absolute top-[105px] left-[400px] bg-neutral-200 text-white px-[25px] py-[24px] rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />1</div>
                        <div className={"absolute top-[105px] left-[550px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>545</span><span className={"text-primary"}>Arbres par hectare</span><br/>
                            Les jeunes plants sont plantés en rangs sur des plates-formes surélevées.
                        </div>

                    <div className={"absolute top-[250px] left-[438px] bg-neutral-200 text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />10</div>
                        <div className={"absolute top-[250px] left-[588px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L20</span><span className={"text-primary"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H13</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>16</span><span className={"text-primary"}>m</span><br/>
                            Première éclaircie. Le bois est réduit en pulpe pour fabriquer du MDF*. Des études scientifiques montrent que le MDF est un stock de carbone avéré.
                        </div>

                    <div className={"absolute top-[390px] left-[400px] bg-neutral-200 text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />20</div>
                        <div className={"absolute top-[390px] left-[550px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L28</span><span className={"text-primary"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H16</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>21</span><span className={"text-primary"}>m</span><br/>
                            Le bois d'éclaircie est utilisé pour les panneaux de particules et le bois de sciage.
                        </div>

                    <div className={"absolute top-[500px] left-[300px] bg-neutral-200 text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />30</div>
                        <div className={"absolute top-[525px] left-[450px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L30</span><span className={"text-primary"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H21</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>30</span><span className={"text-primary"}>m</span><br/>
                            Tous les arbres sont abattus, mais les racines restent intactes. Les racines retiennent 20% du carbone contenu dans le sol. Les arbres droits sont sélectionnés pour les poteaux télégraphiques. Les autres sont utilisés comme planches dans la construction de maisons.
                        </div>

                    <div className={"absolute top-[544px] left-[144px] bg-neutral-200 text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center"}>Année<br />32</div>
                        <div className={"absolute top-[670px] left-[280px]"}>Des jeunes plants sont plantés sur le sol de la forêt et le cycle de vie se répète.</div>
                </div>
            </section>
        </>
    );
};

export default Trees;