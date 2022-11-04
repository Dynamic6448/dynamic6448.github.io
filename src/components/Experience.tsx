import type { Component } from 'solid-js';

export const Experience: Component = () => {
    return (
        <div class='flex flex-col px-20'>
            <p class='text-6xl text-yellow-500 pb-5'>- Experience</p>
            <ExperienceElement position='Project Manager & Lead Avionics Developer' place='Digital Flight Dynamics' link='https://github.com/Digital-Flight-Dynamics' start='February 2021' />
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
        <div class='flex flex-col text-xl pb-5'>
            <div class='flex flex-row'>
                <a class='pr-5'>{position}</a>
                <a class='text-blue-400 hover:underline' href={link} target='_blank'>
                    @ {place}
                </a>
            </div>
            <a class='text-gray-500 font-light'>
                {start} {'->'} {end}
            </a>
        </div>
    );
};
