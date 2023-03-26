import type { Component } from 'solid-js';

export const Experience: Component = () => {
    return (
        <div class='flex flex-col bg-[#23272E] px-20'>
            <p class='text-7xl text-yellow-500 py-10'>Experience</p>
            <ExperienceElement position='Project Manager & Lead Avionics Developer' place='Digital Flight Dynamics' link='https://github.com/Digital-Flight-Dynamics' start='February 2021' />
            <ExperienceElement position='Programmer' place='Texas Torque' link='https://texastorque.org' start='January 2023' />
        </div>
    );
};
interface ExperienceElementProps {
    position: string;
    place: string;
    link: string;
    start: string;
    end?: string;
}
const ExperienceElement: Component<ExperienceElementProps> = ({ position, place, link, start, end = 'Present' }) => {
    return (
        <div class='flex flex-col text-2xl pb-10'>
            <div class='flex flex-row'>
                <a class='pr-5 text-slate-200'>{position}</a>
                <a class='text-pink-700 hover:underline' href={link} target='_blank'>
                    @ {place}
                </a>
            </div>
            <a class='text-gray-400 font-light'>
                {start} {'->'} {end}
            </a>
        </div>
    );
};
