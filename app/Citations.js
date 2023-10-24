import React from 'react';

const Citations = ({bgUrl, text}) => {
    return (
        <img src={`/${bgUrl}`} className={"w-full min-h-[200px]"}  alt={`${text}`} />
    );
};

export default Citations;