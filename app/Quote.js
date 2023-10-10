import React from 'react';

const Quote = ({bgUrl, text, position}) => {
    position = position ?? 'top';

    return (
        <section className={"w-full min-h-[400px] grid place-content-center px-5 md:px-60"}
                 style={{backgroundImage: `url(/${bgUrl})`, backgroundSize: 'cover', backgroundPosition: `${position}`}}>
            {text !== '' &&
                <blockquote className={"italic text-xl md:text-2xl lg:text-4xl text-white text-center glass rounded-box p-3"}>
                    {text}
                </blockquote>
            }
        </section>
    );
};

export default Quote;