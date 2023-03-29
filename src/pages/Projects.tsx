import React from 'react';
import { Tool } from '../components/Tool';

export const Projects: React.FC = () => {
    return (
        <>
            <p className='text-5xl sm:text-7xl text-sky-500 py-10'>Projects</p>
            <div className='flex flex-col gap-16'>
                <Project name='Digital Flight Dynamics A350X' tools={['TypeScript', 'React', 'MSFS SDK']} img='a350.png'>
                    An FOSS organization developing a high-fidelity Airbus A350 addon for Microsoft Flight Simulator. As the founder, project manager, and lead avionics developer, I provide
                    technical motivation and support to team members, and I play a critical role in creating cockpit displays that provide virtual pilots with vital information necessary for
                    efficient flights. I also review and test code written by other members of the team, ensuring it meets our rigorous quality standards and providing feedback to help them
                    hone their skills.
                </Project>
            </div>
        </>
    );
};

interface ProjectProps {
    name: string;
    tools: string[];
    img: string;
    children: React.ReactNode;
}
const Project: React.FC<ProjectProps> = ({ name, tools, img, children }) => {
    return (
        <div className='flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-4 2xl:gap-0'>
            <div className='flex flex-col gap-2 xl:w-1/2'>
                <p className='text-xl sm:text-2xl text-gray-200'>{name}</p>
                <p className='text-md sm:text-lg text-slate-400'>{children}</p>
                <div className='flex flex-row flex-wrap gap-4'>
                    {tools.map((tool) => (
                        <Tool>{tool}</Tool>
                    ))}
                </div>
            </div>
            <img className='rounded-3xl sm:w-3/4 xl:w-auto xl:h-[400px]' src={img} />
        </div>
    );
};
