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
        <div className='bg-slate-800 p-8 rounded-2xl transition-all duration-300 h-full border border-slate-700 relative overflow-hidden'>
            <div className='mb-6 select-none'>
                <img src={`projects/${imgTitle}.png`} alt={`${title} preview`} className='w-full rounded-lg' />
            </div>

            <div className='flex justify-between items-center mb-6'>
                <h3 className='text-xl font-semibold text-slate-100'>{title}</h3>
                <span className='text-sm text-slate-400'>{date}</span>
            </div>

            <div className='flex flex-wrap gap-2 mb-6'>
                {technologies.map((tech) => (
                    <span key={tech} className='px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm'>
                        {tech}
                    </span>
                ))}
            </div>

            <p className='text-slate-400'>{description}</p>

            {/* Overlay for hovered icon buttons */}
            <div className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300'>
                <div className='w-full h-full flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300'>
                    {iconLinkElements}
                </div>
            </div>
        </div>
    );
};
