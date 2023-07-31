import React from 'react';

const Quote = ({bgUrl, text}) => {
    return (
        <section className={"w-full min-h-[400px] grid place-content-center px-5 md:px-60"}
                 style={{backgroundImage: `url(/${bgUrl})`, backgroundSize: 'cover'}}>
            <blockquote className={"text-xl md:text-2xl lg:text-4xl text-white text-center"}>
                {text}
            </blockquote>
        </section>
    );
};

export default Quote;