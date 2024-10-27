import React from 'react';
import { Tool } from '../components/Tool';

export const Projects: React.FC = () => {
    return (
        <>
            <p className='text-5xl sm:text-7xl text-sky-500 py-10'>Projects</p>
            <div className='flex flex-col gap-16'>
                <Project
                    name='Digital Flight Dynamics A350X'
                    start='August 2020'
                    tools={['Rust', 'TypeScript', 'React', 'MongoDB', 'MSFS SDK']}
                    img='a350.png'
                    link='https://www.youtube.com/@dfdsim'
                >
                    An FOSS organization developing a high-fidelity Airbus A350 addon for Microsoft Flight Simulator. As
                    the founder, project manager, and lead avionics developer, I provide technical motivation and
                    support to team members, and I play a critical role in creating cockpit displays that provide
                    virtual pilots with vital information necessary for efficient flights. I also review and test code
                    written by other members of the team, ensuring it meets our rigorous quality standards and providing
                    feedback to help them hone their skills.
                </Project>
                <Project
                    name='Smart Clock'
                    start='August 2024'
                    tools={['TypeScript', 'React', 'Tauri', 'SolidWorks']}
                    img='smart-clock.png'
                >
                    <p>
                        This smart wall clock project integrates hardware and software to provide real-time information
                        to the end user, including date, time, weather, and traffic updates. The clock streamlines
                        day-to-day routines with live commute times to work or school, event reminders, and display
                        options that can be personalized. As the project team lead, I guided a team of 5 through each
                        stage of development, ensuring seamless integration of all components for a responsive,
                        functional prototype.
                    </p>
                    <p>
                        The clock's application was developed using Tauri, React, and TypeScript, tailored to run
                        efficiently on a Raspberry Pi 5. The Raspberry Pi enables us to quickly and easily iterate on
                        our app design due to its user-friendly nature and performance.
                    </p>
                    <p>
                        Collaborating in the CAD design process using SolidWorks, I helped develop and test the
                        3D-printed clock frame, achieving a final prototype in just 3 iterations and reducing
                        development time by 25%.
                    </p>
                </Project>
            </div>
        </>
    );
};

interface ProjectProps {
    name: string;
    start: string;
    end?: string;
    tools: string[];
    img: string;
    link?: string;
    children: React.ReactNode;
}
const Project: React.FC<ProjectProps> = ({ name, start, end = 'Present', tools, img, link = '', children }) => {
    return (
        <div className='flex flex-col xl:flex-row justify-between items-center gap-8 xl:gap-4 2xl:gap-0'>
            <div className='flex flex-col gap-2 xl:w-1/2'>
                <p className='text-xl sm:text-2xl text-gray-200'>{name}</p>
                <p className='text-gray-300 text-lg sm:text-xl'>
                    {start} {'-'} {end}
                </p>

                <div className='text-md sm:text-lg text-slate-400'>
                    {React.Children.map(children, (child, i) => {
                        return (
                            <p key={i} className={i < React.Children.count(children) - 1 ? 'pb-4' : ''}>
                                {child}
                            </p>
                        );
                    })}
                </div>

                <div className='flex flex-row flex-wrap gap-4'>
                    {tools.map((tool) => (
                        <Tool>{tool}</Tool>
                    ))}
                </div>
            </div>
            <div className='rounded-3xl sm:w-3/4 xl:w-auto xl:h-[400px] overflow-hidden'>
                <a href={link === '' ? undefined : link} target='_blank'>
                    <img
                        className='w-full h-full object-cover cursor-pointer transition ease-in-out duration-700 hover:scale-105 hover:saturate-[1.25]'
                        src={img}
                    />
                </a>
            </div>
        </div>
    );
};
