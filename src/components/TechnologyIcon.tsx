import React from 'react';

interface TechnologyIconProps {
    name: string;
    imgTitle: string;
}

export const TechnologyIcon: React.FC<TechnologyIconProps> = ({ name, imgTitle }) => {
    return (
        <div className='flex flex-col items-center justify-center gap-4 group aspect-square bg-gradient-to-br from-sky-theme-900/20 to-transparent hover:from-sky-theme-800/40 hover:to-sky-theme-600/20 rounded-2xl md:rounded-3xl transition-all duration-300 select-none border border-sky-theme-800/30 hover:border-sky-theme-600/60 hover:shadow-lg hover:shadow-sky-theme-400/20'>
            <img
                src={`/icons/${imgTitle}.png`}
                draggable='false'
                className='w-2/5 md:w-1/2 grayscale group-hover:grayscale-0 transition-all duration-300'
            />
            <p className='text-sky-theme-300 group-hover:text-sky-theme-100 text-md font-medium text-center transition-all duration-300'>
                {name}
            </p>
        </div>
    );
};
