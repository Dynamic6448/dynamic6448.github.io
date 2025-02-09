import React from 'react';

interface TechnologyIconProps {
    name: string;
    imgTitle: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ name, imgTitle }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 group aspect-square bg-white bg-opacity-0 hover:bg-opacity-20 rounded-2xl md:rounded-3xl transition-all duration-300 select-none'>
            <img
                src={`/icons/${imgTitle}.png`}
                draggable='false'
                className='w-2/5 md:w-1/2 grayscale group-hover:grayscale-0 transition-all duration-300'
            />
            <p className='text-slate-400 group-hover:text-slate-200 text-md font-medium text-center transition-all duration-300'>
                {name}
            </p>
        </div>
    );
};
