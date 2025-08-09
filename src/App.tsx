import React, { useRef } from 'react';
import { FlightPathNavbar, Hero, Projects, Skills } from './sections';

const App: React.FC = () => {
    const startRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const endRef = useRef(null);

    return (
        <div className='min-h-screen bg-gradient-sky relative'>
            {/* Additional overlay gradient for depth */}
            <div className='absolute inset-0 bg-gradient-to-br from-transparent via-sky-theme-900/20 to-black-theme-950/40 pointer-events-none'></div>

            <div className='relative z-10'>
                <FlightPathNavbar
                    sections={[
                        { name: '', ref: startRef },
                        { name: 'Skills', ref: skillsRef },
                        { name: 'Projects', ref: projectsRef },
                        { name: '', ref: endRef },
                    ]}
                />

                <section ref={startRef}>
                    <Hero />
                </section>
                <section ref={skillsRef}>
                    <Skills />
                </section>
                <section ref={projectsRef}>
                    <Projects />
                </section>

                <div ref={endRef} />
            </div>
        </div>
    );
};

export default App;
