import React from 'react';

export const Experience: React.FC = () => {
    return (
        <div className='flex flex-col px-20'>
            <p className='text-7xl text-sky-500 py-10'>Experience</p>
            <ExperienceElement
                position='Project Manager & Lead Avionics Developer'
                place='Digital Flight Dynamics'
                link='https://github.com/Digital-Flight-Dynamics'
                start='February 2021'
                tools={['TypeScript', 'React', 'MSFS SDK']}
            >
                An FOSS organization developing a high-fidelity Airbus A350 addon for Microsoft Flight Simulator. As a project manager and lead avionics developer, I play a critical role in
                creating cockpit displays that provide virtual pilots with vital information necessary for efficient flights. I also review and test code written by other members of the team,
                ensuring it meets our rigorous quality standards and providing feedback to help them hone their skills.
            </ExperienceElement>

            <ExperienceElement position='Programmer' place='Texas Torque' link='https://texastorque.org' start='January 2023' tools={['Java']} />
        </div>
    );
};
interface ExperienceElementProps {
    position: string;
    place: string;
    link: string;
    start: string;
    end?: string;
    tools: string[];
    children?: React.ReactNode;
}
const ExperienceElement: React.FC<ExperienceElementProps> = ({ position, place, link, start, end = 'Present', tools, children }) => {
    return (
        <div className='flex flex-col pb-10 gap-1'>
            <div className='flex flex-row text-2xl'>
                <p className='pr-5 text-gray-200'>{position}</p>
                <a className='text-pink-700 hover:underline' href={link} target='_blank'>
                    @ {place}
                </a>
            </div>
            <p className='text-gray-300 text-xl'>
                {start} {'->'} {end}
            </p>
            <p className='text-lg text-slate-400 pb-1'>{children}</p>
            <div className='flex flex-row gap-4'>
                {tools.map((tool) => (
                    <Tool>{tool}</Tool>
                ))}
            </div>
        </div>
    );
};
interface ToolProps {
    children: React.ReactNode;
}
const Tool: React.FC<ToolProps> = ({ children }) => {
    return <div className='flex justify-center items-center bg-gray-700 bg-opacity-50 border-2 border-gray-600 border-opacity-50 rounded-full px-5 py-1 text-gray-200 text-lg'>{children}</div>;
};
