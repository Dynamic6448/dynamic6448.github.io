import React from 'react';
import { useMousePosition } from './useMousePosition';
import { Header } from './components/Header';
import { Experience } from './components/Experience';

const App: React.FC = () => {
    const mouse = useMousePosition();

    return (
        <div>
            <div
                className='fixed bg-white h-[500px] aspect-square rounded-full pointer-events-none blur-[100px] bg-gradient-to-r from-yellow-400 to-sky-600 -z-[8] transition-all ease-out duration-1000'
                style={{ top: mouse.y + 'px', left: mouse.x + 'px', animation: 'rotate 20s infinite' }}
            ></div>

            <Header />
            <div className='bg-black bg-opacity-75'>
                <Experience />
            </div>
        </div>
    );
};

export default App;
