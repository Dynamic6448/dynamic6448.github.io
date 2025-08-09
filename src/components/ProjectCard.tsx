import React, { useEffect, useState } from 'react';
import { IconLink } from './IconLink';
import { Project, ProjectLinkType } from '../data';

export const ProjectCard: React.FC<Project> = ({ title, imgTitle, date, technologies, description, links }) => {
    const [iconLinkElements, setIconLinkElements] = useState<JSX.Element[]>([]);

    useEffect(() => {
        const elements = links.map((link) => {
            let icon: string;

            switch (link.type) {
                case ProjectLinkType.DEVPOST:
                    icon = 'devpost';
                    break;
                case ProjectLinkType.DISCORD:
                    icon = 'discord';
                    break;
                case ProjectLinkType.GITHUB:
                    icon = 'github';
                    break;
                case ProjectLinkType.YOUTUBE:
                    icon = 'youtube';
                    break;
            }

            return <IconLink key={link.link} icon={icon} href={link.link} />;
        });

        setIconLinkElements(elements);
    }, [links]);

    return (
        <div className='bg-black-theme-800/60 backdrop-blur-sm p-8 rounded-2xl transition-all duration-300 h-full border border-sky-theme-600/60 hover:border-sky-theme-500/80 relative overflow-hidden flex flex-col hover:shadow-lg hover:shadow-sky-theme-400/20 group'>
            {/* Subtle animated background */}
            <div className='absolute inset-0 bg-gradient-to-br from-sky-theme-900/0 via-sky-theme-900/5 to-sky-theme-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

            <div className='mb-6 select-none relative z-10'>
                <img src={`projects/${imgTitle}.png`} alt={`${title} preview`} className='w-full rounded-lg' />
            </div>

            <div className='flex justify-between items-center mb-6 relative z-10'>
                <h3 className='text-xl font-semibold text-sky-theme-200'>{title}</h3>
                <span className='text-sm text-sky-theme-400'>{date}</span>
            </div>

            <div className='flex flex-wrap gap-2 mb-6 relative z-10'>
                {technologies.map((tech) => (
                    <span
                        key={tech}
                        className='px-3 py-1 bg-sky-theme-900/30 text-sky-theme-300 rounded-full text-sm border border-sky-theme-700/40 hover:border-sky-theme-600/60 transition-colors'
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <p className='text-sky-theme-200 flex-grow relative z-10'>{description}</p>

            {/* Bottom action bar */}
            <div className='flex justify-center gap-4 mt-6 pt-6 border-t border-sky-theme-700/40 relative z-10'>
                {iconLinkElements}
            </div>
        </div>
    );
};
