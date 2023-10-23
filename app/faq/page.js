import React from 'react';
const Faq = () => {
    return (
        <>
            <section className="hero h-[500px]"
                     style={{backgroundImage: 'url(https://picsum.photos/id/786/4288/2848.jpg)'}}>
            </section>

            <section className={"bg-white px-5 py-10 md:py-15 md:px-10 lg:py-20 lg:px-48 xl:px-60 flex flex-col w-full justify-center"}>
                <div className="w-full mb-10">
                    <h1 className={"text-3xl text-neutral-800 font-bold mb-5 text-center"}>FAQ</h1>
                </div>
            </section>
        </>
    );
};

export default Faq;