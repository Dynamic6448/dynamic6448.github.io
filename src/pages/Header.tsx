import React from 'react';
import Typewriter from 'typewriter-effect';

export const Header: React.FC = () => {
    return (
        <div className='w-full h-screen'>
            <img className='object-cover fixed -z-10 brightness-75 w-full h-full blur-sm scale-[102%]' src='code.png' />
            <div className='w-full h-full object-cover -z-10 bg-gradient-to-b from-transparent to-black opacity-75' />
            <div className='absolute top-0 left-0 w-full h-full'>
                <div className='flex flex-col justify-center items-center text-center space-y-5 h-full'>
                    <p className='text-7xl md:text-8xl lg:text-9xl text-gray-100'>
                        <Typewriter
                            options={{
                                strings: ['Fawwaz Memon'],
                                autoStart: true,
                                loop: true,
                                delay: 150,
                                deleteSpeed: 75,
                            }}
                        />
                    </p>

                    <p className='text-2xl sm:text-3xl text-sky-500'>Full-Stack Developer</p>
                </div>
            </div>
        </div>
    );
};
