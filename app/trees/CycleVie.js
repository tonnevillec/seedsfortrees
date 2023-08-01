import React from 'react';

const CycleVie = ({id, top, left, title, topChildren, leftChildren, children}) => {
    return (
        <>
            <div className={`absolute top-[${top}px] left-[${left}px] bg-[#2A5042] max-w-[100px] max-h-[100px] text-white p-6 rounded-full border-white border-4 shadow-neutral-500 shadow-xl text-center`}>{title}</div>
            <div className={`absolute top-[${topChildren}] left-[${leftChildren}]`}>{children}</div>
        </>
    );
};

export default CycleVie;