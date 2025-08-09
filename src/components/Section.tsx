import React from 'react';

interface SectionProps {
    title: string;
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div className='pl-4 pr-24 xl:px-24 py-16 md:py-24 relative'>
        {/* Much more subtle background overlay for sections */}
        <div className='absolute inset-0 bg-gradient-to-r from-transparent via-sky-theme-900/5 to-transparent'></div>

        <div className='max-w-6xl mx-auto relative z-10'>
            <h2 className='text-3xl md:text-4xl font-bold text-sky-theme-200 mb-10'>{title}</h2>
            {children}
        </div>
    </div>
);
