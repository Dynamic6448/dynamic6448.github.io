import React, { useRef } from 'react';
import { FlightPathNavbar, Hero, Projects, Skills } from './sections';

const App: React.FC = () => {
    const heroRef = useRef(null);
    const skillsRef = useRef(null);
    const projectsRef = useRef(null);

    return (
        <div className='min-h-screen bg-gradient-to-b from-slate-900 to-slate-800'>
            {/* <Navbar activeSection={activeSection} setActiveSection={setActiveSection} /> */}
            <FlightPathNavbar
                sections={[
                    { name: 'Home', ref: heroRef },
                    { name: 'Skills', ref: skillsRef },
                    { name: 'Projects', ref: projectsRef },
                ]}
            />

            <section ref={heroRef}>
                <Hero />
            </section>
            <section ref={skillsRef}>
                <Skills />
            </section>
            <Projects />
            {/* Hack to get this to scroll to the very end of the page */}
            <div ref={projectsRef} />
        </div>
    );
};

export default App;
