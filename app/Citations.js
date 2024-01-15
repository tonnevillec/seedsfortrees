import React from 'react';

const Citations = ({bgUrl, text}) => {
    return (
        <img src={`/${bgUrl}`} className={"w-full"}  alt={`${text}`} />
    );
};

export default Citations;