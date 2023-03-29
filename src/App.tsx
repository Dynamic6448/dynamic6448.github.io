import React from 'react';
import { Header } from './pages/Header';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';

const App: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <Header />
            <div className='bg-black bg-opacity-75 flex flex-col px-8 sm:px-10 md:px-20'>
                <Projects />
                <Experience />
            </div>
        </div>
    );
};

export default App;
