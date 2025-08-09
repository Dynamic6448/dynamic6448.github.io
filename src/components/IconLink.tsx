import React from 'react';

interface IconLinkProps {
    icon: string;
    href: string;
}
export const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
    return (
        <a
            className='w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-sky-theme-400 hover:bg-gradient-to-r hover:from-sky-theme-400 hover:to-sky-theme-300 text-xl sm:text-3xl flex items-center justify-center transition-all duration-300 cursor-pointer shadow-lg hover:shadow-sky-theme-400/50 icon-link-item'
            href={href}
            target='_blank'
            rel='noopener noreferrer'
        >
            <div
                className='w-[55%] h-[55%] bg-sky-theme-400 icon-link-item:hover:bg-black-theme-950 transition-colors icon-mask'
                style={{
                    mask: `url(icons/${icon}.png) no-repeat center/contain`,
                    WebkitMask: `url(icons/${icon}.png) no-repeat center/contain`,
                }}
            />
        </a>
    );
};
