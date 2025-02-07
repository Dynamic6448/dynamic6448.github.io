import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className='px-6 py-16 md:py-24'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl md:text-4xl font-bold text-slate-100 mb-10'>{title}</h2>
            {children}
        </div>
    </div>
);
