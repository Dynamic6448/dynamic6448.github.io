import React from 'react';
import { Tool } from '../components/Tool';

export const Experience: React.FC = () => {
    return (
        <>
            <p className='text-5xl sm:text-7xl text-sky-500 py-10'>Experience</p>
            <ExperienceElement
                position='Project Manager & Lead Avionics Developer'
                place='Digital Flight Dynamics'
                link='https://github.com/Digital-Flight-Dynamics'
                start='February 2021'
                tools={['TypeScript', 'React', 'MSFS SDK']}
            />

            <ExperienceElement position='Programmer' place='Texas Torque (FRC 1477)' link='https://texastorque.org' start='January 2023' tools={['Java']} />
        </>
    );
};
interface ExperienceElementProps {
    position: string;
    place: string;
    link: string;
    start: string;
    end?: string;
    tools: string[];
}
const ExperienceElement: React.FC<ExperienceElementProps> = ({ position, place, link, start, end = 'Present', tools }) => {
    return (
        <div className='flex flex-col pb-10 gap-1'>
            <div className='flex flex-col md:flex-row text-xl sm:text-2xl'>
                <p className='pr-5 text-gray-200'>{position}</p>
                <a className='text-pink-700 hover:underline' href={link} target='_blank'>
                    @ {place}
                </a>
            </div>
            <p className='text-gray-300 text-lg sm:text-xl'>
                {start} {'-'} {end}
            </p>
            <div className='flex flex-row flex-wrap gap-4'>
                {tools.map((tool) => (
                    <Tool>{tool}</Tool>
                ))}
            </div>
        </div>
    );
};
