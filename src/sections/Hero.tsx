import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { IconLink } from '../components';

export const Hero: React.FC = () => (
    <section className='w-full h-screen'>
        <img className='object-cover w-full h-full opacity-20' src='a350-background.png' />

        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4 pl-4 sm:pl-0 pr-20 sm:pr-0'>
            <p className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold text-white'>
                Hello, I'm
            </p>
            <p className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center font-bold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent'>
                Fawwaz Memon
            </p>
            <p className='text-md sm:text-lg md:text-xl text-center text-slate-400 w-5/6 md:w-1/2 xl:w-1/3'>
                I am a Computer Science student at{' '}
                <span className='text-slate-300 font-semibold'>Texas A&M University</span>. I am the Founder and Lead
                Software Developer at Digital Flight Dynamics, building open-source software. My interests lie in
                everything from software engineering and aviation to cooking.
            </p>
            <div className='flex flex-row justify-center items-center space-x-3 sm:space-x-10 pt-2'>
                {/* Resume button */}
                <a
                    className='w-32 h-10 sm:w-44 sm:h-14 rounded-full text-sky-400 hover:text-black border-2 border-sky-400 hover:bg-sky-400 flex items-center justify-center cursor-pointer transition duration-300 select-none'
                    href='Resume.pdf'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <p className='text-md sm:text-xl pr-2'>Resume</p>
                    <FontAwesomeIcon className='text-sm sm:text-lg' icon={faArrowUpRightFromSquare} />
                </a>

                <IconLink icon='github' href='https://github.com/Dynamic6448' />
                <IconLink icon='linkedin' href='https://www.linkedin.com/in/fawwaz-m' />
                <IconLink icon='mail' href='mailto:fawwazm@tamu.edu' />
            </div>
        </div>
    </section>
);
