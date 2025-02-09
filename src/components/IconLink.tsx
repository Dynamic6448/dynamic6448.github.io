import React from 'react';

interface IconLinkProps {
    icon: string;
    href: string;
}
export const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
    return (
        <a
            className='w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-sky-400 hover:bg-sky-400 text-xl sm:text-3xl flex items-center justify-center group transition duration-300 cursor-pointer'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div
                className='w-[55%] h-[55%] bg-sky-400 group-hover:bg-black transition-colors'
                style={{
                    mask: `url(icons/${icon}.png) no-repeat center/contain`,
                    WebkitMask: `url(icons/${icon}.png) no-repeat center/contain`,
                }}
            />
        </a>
    );
};
