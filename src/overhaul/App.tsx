import React, { useRef } from 'react';
import { FlightPathNavbar, Hero, Projects, Skills } from './sections';

const App: React.FC = () => {
    const startRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);
    const endRef = useRef(null);

    return (
        <div className='min-h-screen bg-gradient-to-b from-slate-900 to-slate-800'>
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
    );
};

export default App;
