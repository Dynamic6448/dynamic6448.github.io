import React from 'react';

export const Header: React.FC = () => {
    return (
        <div className='w-full h-screen'>
            <img className='object-cover fixed select-none -z-10 brightness-75 blur-sm scale-[102%]' src='code.png' />
            <div className='flex flex-col justify-center items-center text-center space-y-5 h-full'>
                <p className='text-8xl sm:text-9xl text-white'>Fawwaz Memon</p>
                <p className='text-2xl sm:text-3xl text-sky-500'>Full-Stack Developer</p>
            </div>
        </div>
    );
};
