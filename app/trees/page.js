'use client'
import React, {useState} from 'react';
import Quote from "@/app/Quote";

const Trees = () => {
    const [currentCycle, setCurrentCycle] = useState(0)

    const handleClick = () => {
        if(currentCycle === 6) {
            setCurrentCycle(0)
        } else {
            setCurrentCycle(currentCycle + 1)
        }
    }

    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(/foret13.jpg)'}}>
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

            <section className={"bg-white px-5 md:px-10 lg:px-20 pt-10 md:pt-15 lg:pt-20 flex flex-col xl:flex-row gap-6 w-full justify-center"}>
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

                {/*max 900*/}
                <div className={"relative basis-2/3 w-full min-h-[750px]"}>

                    {currentCycle === 0 && <>
                        <span className={"hidden min-[900px]:block absolute top-[45px] left-[95px] text-sm text-neutral-400"}>Cliquez pour découvrir le cycle</span>
                        <div className="hidden min-[900px]:block absolute top-[73px] left-[170px] animate-bounce bg-white p-2 w-10 h-10 ring-1 ring-slate-900/5 shadow-lg rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                    </>
                    }

                    <div className={"bg-primary hover:bg-info cursor-pointer absolute top-[0px] left-0 rounded p-2 border-2 border-white shadow-xl shadow-neutral-500 min-[900px]:top-[106px] min-[900px]:rounded-full min-[900px]:px-28 min-[900px]:py-[107px] min-[900px]:shadow-2xl"}
                         onClick={handleClick}
                    >
                        <img src={"/SEEDS-FOR-TREES_logo.png"} alt={""}/>
                    </div>

                    <div className={(currentCycle >= 1 ? "bg-info" : "bg-neutral-200") + " absolute top-0 left-[200px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:left-[300px] min-[900px]:p-6 min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />0</div>
                    {currentCycle >= 1 && <div className={"absolute top-[80px] left-[200px] min-[900px]:top-0 min-[900px]:left-[450px]"}>Les graines pollinisées par contrôle de masse sont plantées et élevées dans une pépinière spécialisée.</div>}

                    <div className={(currentCycle >= 2 ? "bg-info" : "bg-neutral-200") + " absolute top-[210px] left-[0px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:top-[105px] min-[900px]:left-[400px] min-[900px]:px-[25px] min-[900px]:py-[24px] min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />1</div>
                    {currentCycle >= 2 &&
                        <div className={"absolute top-[210px] left-[100px] min-[900px]:top-[95px] min-[900px]:left-[550px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>545</span><span className={"text-primary"}>Arbres par hectare</span><br/>
                            Les jeunes plants sont plantés en rangs sur des plates-formes surélevées.
                        </div>
                    }

                    <div className={(currentCycle >= 3 ? "bg-info" : "bg-neutral-200") + " absolute top-[300px] left-[0px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:top-[250px] min-[900px]:left-[438px] min-[900px]:p-6 min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />10</div>
                    {currentCycle >= 3 &&
                        <div className={"absolute top-[300px] left-[100px] min-[900px]:top-[210px] min-[900px]:left-[588px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L20</span><span className={"text-primary me-1"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H13</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>16</span><span className={"text-primary"}>m</span><br/>
                            Première éclaircie. Le bois est réduit en pulpe pour fabriquer du MDF*. Des études scientifiques montrent que le MDF est un stock de carbone avéré.
                        </div>
                    }

                    <div className={(currentCycle >= 4 ? "bg-info" : "bg-neutral-200") + " absolute top-[440px] left-[0px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:top-[390px] min-[900px]:left-[400px] min-[900px]:p-6 min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />20</div>
                    {currentCycle >= 4 &&
                        <div className={"absolute top-[440px] left-[100px] min-[900px]:top-[375px] min-[900px]:left-[550px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L28</span><span className={"text-primary me-1"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H16</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>21</span><span className={"text-primary"}>m</span><br/>
                            Le bois d'éclaircie est utilisé pour les panneaux de particules et le bois de sciage.
                        </div>
                    }

                    <div className={(currentCycle >= 5 ? "bg-info" : "bg-neutral-200") + " absolute top-[540px] left-[0px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:top-[500px] min-[900px]:left-[300px] min-[900px]:p-6 min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />30</div>
                    {currentCycle >= 5 &&
                        <div className={"absolute top-[540px] left-[100px] min-[900px]:top-[495px] min-[900px]:left-[435px]"}>
                            <span className={"text-primary text-3xl font-bold me-1"}>L30</span><span className={"text-primary me-1"}>cm</span>
                            <span className={"text-primary text-3xl font-bold me-1"}>H21</span><span className={"text-primary"}> - </span><span className={"text-primary text-3xl font-bold me-1"}>30</span><span className={"text-primary"}>m</span><br/>
                            Tous les arbres sont abattus, mais les racines restent intactes. Les racines retiennent 20% du carbone contenu dans le sol. Les arbres droits sont sélectionnés pour les poteaux télégraphiques. Les autres sont utilisés comme planches dans la construction de maisons.
                        </div>
                    }

                    <div className={(currentCycle >= 6 ? "bg-info" : "bg-neutral-200") + " absolute top-[730px] left-[0px] text-white p-2 rounded border-white border-1 shadow-neutral-500 shadow-sm text-center min-[900px]:top-[544px] min-[900px]:left-[144px] min-[900px]:p-6 min-[900px]:rounded-full min-[900px]:border-4 min-[900px]:shadow-xl"}>Année<br />32</div>
                    {currentCycle >= 6 &&
                        <div className={"absolute top-[730px] left-[100px] min-[900px]:top-[670px] min-[900px]:left-[100px]"}>Des jeunes plants sont plantés sur le sol de la forêt et le cycle de vie se répète.</div>
                    }
                </div>
            </section>
        </>
    );
};

export default Trees;