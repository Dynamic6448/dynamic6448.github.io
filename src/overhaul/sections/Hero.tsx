import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { IconLink } from '../components';

export const Hero: React.FC = () => (
    <section className='w-full h-screen'>
        <img className='object-cover w-full h-full opacity-20' src='a350-background.png' />
        <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-4'>
            <p className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-white'>
                Hello, I'm
            </p>
            <p className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-emerald-300 to-emerald-400 bg-clip-text text-transparent'>
                Fawwaz Memon
            </p>
            <div className='flex flex-row justify-center items-center space-x-7 sm:space-x-10 pt-2'>
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
