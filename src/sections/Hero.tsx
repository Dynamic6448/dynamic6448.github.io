import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { IconLink } from '../components';

export const Hero: React.FC = () => (
    <section className='w-full h-screen relative overflow-hidden'>
        {/* Hero gradient background that blends with body */}
        <div className='absolute inset-0 bg-gradient-to-b from-black-theme-950 via-black-theme-900 to-transparent'></div>
        {/* Subtle animated gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-sky-theme-900/10 to-sky-theme-800/20 animate-pulse'></div>{' '}
        <div className='relative z-10 w-full h-full flex flex-col items-center justify-center gap-6 pl-4 pr-20 sm:px-8 md:px-16'>
            {/* Main heading with improved spacing */}
            <div className='text-center space-y-4 max-w-5xl'>
                <p className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-sky-theme-100 tracking-wide'>
                    Hello, I'm
                </p>
                <h1 className='text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-sky-theme-300 via-sky-theme-400 to-sky-theme-500 bg-clip-text text-transparent leading-tight'>
                    Fawwaz Memon
                </h1>
            </div>

            {/* Description with better proportions */}
            <p className='text-lg sm:text-xl md:text-2xl text-center text-sky-theme-200 max-w-4xl leading-relaxed mt-6'>
                I am a Computer Science student at{' '}
                <span className='text-sky-theme-100 font-semibold'>Texas A&M University</span>. I am the Founder and
                Lead Software Developer at Digital Flight Dynamics, building open-source software for flight simulators.
            </p>

            {/* Action buttons with improved spacing */}
            <div className='flex flex-row justify-center items-center space-x-4 sm:space-x-8 mt-8'>
                {/* Resume button */}
                <a
                    className='px-6 py-3 sm:px-8 sm:py-4 rounded-full text-sky-theme-300 hover:text-black-theme-950 border-2 border-sky-theme-400 hover:bg-gradient-to-r hover:from-sky-theme-400 hover:to-sky-theme-300 flex items-center justify-center cursor-pointer transition-all duration-300 select-none shadow-lg hover:shadow-sky-theme-400/50 text-lg sm:text-xl font-medium'
                    href='Fawwaz_Memon_resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <span className='mr-2'>Resume</span>
                    <FontAwesomeIcon className='text-base sm:text-lg' icon={faArrowUpRightFromSquare} />
                </a>

                <div className='flex space-x-3 sm:space-x-4'>
                    <IconLink icon='github' href='https://github.com/Dynamic6448' />
                    <IconLink icon='linkedin' href='https://www.linkedin.com/in/fawwaz-m' />
                    <IconLink icon='mail' href='mailto:fawwazm@tamu.edu' />
                </div>
            </div>
        </div>
    </section>
);
