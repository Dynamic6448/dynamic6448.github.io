import React from 'react';
import { Header } from './components/Header';
import { Experience } from './components/Experience';

const App: React.FC = () => {
    return (
        <div className='w-full h-full'>
            <Header />
            <div className='bg-black bg-opacity-75'>
                <Experience />
            </div>
        </div>
    );
};

export default App;
