import Quote from "@/app/Quote";
import Link from "next/link";

export default function Home() {
  return (
    <>
        <section className="hero min-h-screen"
                 style={{backgroundImage: 'url(/arbre_legendaire.jpg)'}}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">SEEDS FOR TREES</h1>
                    <p className="mb-5">Un gest simple pour renouveler la nature, un arbre à la fois.</p>
                    <Link href={"#showmore"} className="btn btn-outline rounded-full text-white border-white hover:text-primary hover:border-primary hover:bg-transparent ">Découvrir</Link>
                </div>
            </div>
        </section>

        <section className={"py-5 md:py-10 md:px-10 lg:py-20 lg:px-32 w-full"} id={"showmore"}>
            <div className={"flex flex-row w-full"}>
                <img src={"/foret6.jpg"} className={"w-1/3 md:pr-2"} alt={"Service 1"} />
                <img src={"/foret7.jpg"} className={"w-1/3 md:px-1"} alt={"Service 2"} />
                <img src={"/foret8.jpg"} className={"w-1/3 md:pl-2"} alt={"Service 3"} />
            </div>

            <div className="flex flex-col md:flex-row w-full gap-6 mt-10">
                <h2 className={"text-2xl text-neutral-800 font-bold basis-1/3"}>Qui sommes nous ?</h2>

                <div className={"basis-2/3 px-5"}>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>

                    <div className="w-full text-center mt-5">
                        <Link className="btn btn-sm btn-primary" href={"/about"}>En savoir plus</Link>
                    </div>
                </div>
            </div>
        </section>

        <Quote bgUrl={'foret1.jpg'} text={'Nos actions sont les racines d\'un avenir durable, un héritage vert qui s\'épanouit à travers le temps'} />

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
            <img src={"/service1.jpg"} className={"object-cover max-h-96"} alt={"Notre équipe"} />

            <div className="w-full mt-10">
                <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Notre équipe</h2>

                <div>
                    <p className={"text-neutral-500"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi eum ex hic ipsum laboriosam natus rem sapiente tempore temporibus? Ab, animi eos ipsum molestiae necessitatibus nemo perspiciatis provident totam.</p>

                    <div className="w-full text-center mt-5">
                        <Link className="btn btn-sm btn-primary" href={"/team"}>En savoir plus</Link>
                    </div>
                </div>
            </div>
        </section>

        <Quote bgUrl={'foret10.jpg'} text={'Comme les gouttes d\'eau qui nourrissent la rivière, nos actions bienveillantes se répandent, créant un océan de changement'} />

        <section className={"px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-20 xl:px-40 flex flex-col lg:flex-row lg:items-start w-full"}>
            <div className={"w-full grid place-content-center lg:basis-1/3"}>
                <img src={"/plantation1.jpg"} alt="Plantation" />
            </div>

            <div className="lg:basis-2/3 mt-5 lg:mt-0 lg:pl-5">
                <h2 className={"text-2xl text-neutral-800 font-bold mb-5"}>Nos arbres et leur cycle de vie</h2>

                <div className={"text-neutral-500 lg:basis-2/3"}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aut consequatur dolor eius eveniet exercitationem explicabo facilis ipsum itaque laboriosam libero magni odio placeat qui repellendus, repudiandae sint ullam veritatis!</p>
                </div>

                <div className="w-full text-center mt-5">
                    <Link className="btn btn-sm btn-primary" href={"/trees"}>En savoir plus</Link>
                </div>
            </div>

            <div className="w-full flex place-content-center lg:content-start my-5 lg:basis-1/3">
                <img src="/cycle_arbre1.png" alt="Cycle de vie des arbres" className="basis-1/4 max-h-[120px] max-w-[120px]"/>
            </div>
        </section>

        <Quote bgUrl={'foret2.jpg'} text={'Unissons nous pour un avenir plus sûr et durable'} />
    </>
  )
}
