import React from 'react';
import { Section, TechnologyIcon } from '../components';
import { skills } from '../data';

export const Skills: React.FC = () => (
    <Section title='Technical Skills'>
        <div className='flex flex-col'>
            {Object.entries(skills).map(([category, items]) => (
                <div key={category} className='space-y-4 py-2'>
                    <h3 className='text-xl font-semibold text-slate-200 capitalize'>{category}</h3>
                    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2'>
                        {items.map((item) => (
                            <TechnologyIcon key={item.name} name={item.name} imgTitle={item.img} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </Section>
);
