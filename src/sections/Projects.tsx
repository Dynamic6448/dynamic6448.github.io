import React from 'react';
import { ProjectCard, Section } from '../components';
import { projects } from '../data';

export const Projects: React.FC = () => (
    <Section title='Projects'>
        <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            {projects.map((project, i) => (
                <ProjectCard key={i} {...project} />
            ))}
        </div>
    </Section>
);
