import type { Component } from 'solid-js';
import bg from '../images/code.png';

export const Header: Component = () => {
    return (
        <div class='w-full h-screen'>
            <img class='object-cover fixed select-none -z-10 brightness-75 blur-sm scale-[102%]' src={bg} />
            <div class='flex flex-col justify-center items-center text-center space-y-5 h-full'>
                <p class='text-8xl sm:text-9xl text-sky-600'>Fawwaz Memon</p>
                <p class='text-2xl sm:text-3xl text-pink-700'>Full-Stack Developer</p>
            </div>
        </div>
    );
};
