import React from 'react';

const About = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/678/4896/3264.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>Qui sommes-nous ?</h1>

                    <p className={"text-neutral-500 mb-3"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>

                    <h2 className={"text-2xl text-primary font-bold mb-5"}>Quelques faits marquants !</h2>

                    <ul className={"text-neutral-800 text-xl"}>
                        <li>Denman Corporation possède <span className={"text-primary text-2xl text-bold"}>1 439</span> hectares de forêt en Caroline du Nord et du Sud.</li>
                        <li>En 2023, la forêt représentait <span className={"text-primary text-2xl text-bold"}>31 000</span> tonnes de pin lobolly et <span className={"text-primary text-2xl text-bold"}>15 000</span> tonnes de bois dur - gommier...</li>
                        <li>Nous avons planté <span className={"text-primary text-2xl text-bold"}>315 000</span> arbres en 6 ans.</li>
                        <li>La forêt compte environ <span className={"text-primary text-2xl text-bold"}>410 000</span> arbres.</li>
                        <li>Nous séquestrons environ <span className={"text-primary text-2xl text-bold"}>2,6</span> tonnes de Co2 par an.</li>
                    </ul>
                </div>
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"py-10 w-96 text-neutral-700"} />
            </div>

            <section className={"px-5 pb-10 md:px-10 lg:px-20 xl:px-40 flex flex-col lg:flex-row lg:items-start w-full"}>
                <div className="lg:basis-1/2 mb-5 lg:mb-0 lg:pr-5">
                    <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Notre mission</h2>

                    <div className={"text-neutral-500"}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                    </div>
                </div>

                <div className={"w-full grid place-content-center lg:basis-1/2"}>
                    <img src={"/plantation1.jpg"} alt="Plantation" />
                </div>
            </section>

            <div className="w-full flex place-content-center">
                <hr className={"pb-10 w-96 text-neutral-700"} />
            </div>

            <section className={"px-5 pb-20 md:px-10 lg:px-20 xl:px-40 w-full"}>
                <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Notre histoire</h2>

                <div className="flex flex-row justify-between w-full gap-4">
                    <div className="grow flex flex-col basis-1/5">
                        <div className={"h-48 grid content-end mb-2 text-center text-xs text-neutral-500"}>
                            <span className={"mb-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequuntur cumque cupiditate error est et expedita impedit libero provident</span>
                            <br/>
                            <span className={"text-neutral-800 text-xl"}>Lorem Ipsum</span>
                        </div>

                        <span className="text-center p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>

                        <div className="h-48 text-center pt-5">
                            <div className="avatar">
                                <div className="w-20 bg-neutral rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/SEEDS-FOR-TREES_logo.png" alt={""} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grow flex flex-col basis-1/5">
                        <div className="h-48 justify-center mb-2 pb-2 grid content-end">
                            <div className="avatar">
                                <div className="w-20 bg-neutral rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/SEEDS-FOR-TREES_logo.png" alt={""} />
                                </div>
                            </div>
                        </div>

                        <span className="text-center p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>

                        <div className={"h-48 grid content-start pt-5 text-center text-xs text-neutral-500"}>
                            <span className={"text-neutral-800 text-xl"}>Lorem Ipsum</span>
                            <br/>
                            <span className={"mb-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequuntur cumque cupiditate error est et expedita impedit libero provident</span>
                        </div>
                    </div>

                    <div className="grow flex flex-col basis-1/5">
                        <div className={"h-48 grid content-end mb-2 text-center text-xs text-neutral-500"}>
                            <span className={"mb-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequuntur cumque cupiditate error est et expedita impedit libero provident</span>
                            <br/>
                            <span className={"text-neutral-800 text-xl"}>Lorem Ipsum</span>
                        </div>

                        <span className="text-center p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>

                        <div className="h-48 text-center pt-5">
                            <div className="avatar">
                                <div className="w-20 bg-neutral rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/SEEDS-FOR-TREES_logo.png" alt={""} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grow flex flex-col basis-1/5">
                        <div className="h-48 justify-center mb-2 pb-2 grid content-end">
                            <div className="avatar">
                                <div className="w-20 bg-neutral rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/SEEDS-FOR-TREES_logo.png" alt={""} />
                                </div>
                            </div>
                        </div>

                        <span className="text-center p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>

                        <div className={"h-48 grid content-start pt-5 text-center text-xs text-neutral-500"}>
                            <span className={"text-neutral-800 text-xl"}>Lorem Ipsum</span>
                            <br/>
                            <span className={"mb-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequuntur cumque cupiditate error est et expedita impedit libero provident</span>
                        </div>
                    </div>

                    <div className="grow flex flex-col basis-1/5">
                        <div className={"h-48 grid content-end mb-2 text-center text-xs text-neutral-500"}>
                            <span className={"mb-1"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque blanditiis consequuntur cumque cupiditate error est et expedita impedit libero provident</span>
                            <br/>
                            <span className={"text-neutral-800 text-xl"}>Lorem Ipsum</span>
                        </div>

                        <span className="text-center p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2019</span>

                        <div className="h-48 text-center pt-5">
                            <div className="avatar">
                                <div className="w-20 bg-neutral rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src="/SEEDS-FOR-TREES_logo.png" alt={""} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/*<div className="flex flex-row justify-between w-full gap-4">*/}
                {/*    <span className="text-center grow p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>*/}
                {/*    <span className="text-center grow p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2008</span>*/}
                {/*    <span className="text-center grow p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2010</span>*/}
                {/*    <span className="text-center grow p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2013</span>*/}
                {/*    <span className="text-center grow p-3 bg-teal-700 text-primary-content text-2xl border-teal-900 border-2 shadow-xl shadow-teal-900">2019</span>*/}
                {/*</div>*/}

            </section>
        </>
    );
};

export default About;