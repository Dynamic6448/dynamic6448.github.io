import React, { useState, useEffect, useRef } from 'react';

interface FlightPathNavbarProps {
    sections: { name: string; ref: React.MutableRefObject<HTMLElement | null> }[];
}

export const FlightPathNavbar: React.FC<FlightPathNavbarProps> = ({ sections }) => {
    const [scrollProgress, setScrollProgress] = useState(0);

    // Use refs for scrolling variables to avoid re-renders (it'll rerender anyway because scrollProgress changes)
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const startScrollY = useRef(0);
    const trackContainerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        startY.current = e.clientY;
        startScrollY.current = window.scrollY;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        const containerHeight = trackContainerRef.current?.clientHeight || window.innerHeight;
        const deltaY = e.clientY - startY.current;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDelta = (deltaY / containerHeight) * totalScrollHeight;
        const newScrollY = startScrollY.current + scrollDelta;

        const clampedScrollY = Math.max(0, Math.min(totalScrollHeight, newScrollY));
        window.scrollTo(0, clampedScrollY);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Update cursor style based on dragging state
    useEffect(() => {
        if (isDragging) {
            document.body.style.cursor = 'grabbing';
        } else {
            document.body.style.cursor = 'default';
        }
    }, [isDragging]);

    return (
        <nav className='fixed right-0 top-0 h-full flex items-center pr-4 select-none z-50'>
            <div className='h-5/6 flex justify-center rounded-full px-4 py-8'>
                <div className='relative w-8 h-full' ref={trackContainerRef}>
                    {/* Progress line */}
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-slate-600'>
                        <div
                            className='absolute top-0 bg-emerald-500 w-full'
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>
                    {/* Section Circles */}
                    <div className='absolute left-1/2 right-0 top-[-6px] h-[102%] flex flex-col items-end justify-between -translate-x-1/2 '>
                        {sections.map((section, i) => {
                            const sectionEl = section.ref.current;
                            let circlePosition = 0;

                            if (sectionEl) {
                                const rect = sectionEl.getBoundingClientRect();
                                const sectionTop = rect.top + window.scrollY;
                                const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
                                circlePosition = Math.min((sectionTop / totalHeight) * 100, 100);
                            }

                            const isScrolledPast =
                                i === 0 ? true : scrollProgress > 0 && scrollProgress >= circlePosition;

                            return (
                                <div
                                    key={section.name}
                                    className='flex flex-row items-center space-x-4 group cursor-pointer'
                                    onClick={() => {
                                        section.ref.current?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <p
                                        className={`text-lg transition-colors ${
                                            isScrolledPast ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                        }`}
                                    >
                                        {section.name}
                                    </p>
                                    <div
                                        className={`w-4 h-4 rounded-full border-[4px] group-hover:scale-125 transition-all duration-100 ${
                                            isScrolledPast
                                                ? 'border-emerald-500 bg-emerald-500'
                                                : 'border-slate-600 group-hover:border-emerald-500 bg-slate-600'
                                        }`}
                                        style={{ top: `${circlePosition}%` }}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    {/* Airplane Icon */}
                    <div
                        className='absolute left-1/2 -translate-x-1/2 w-11 h-11 cursor-grab active:cursor-grabbing'
                        style={{ top: `${scrollProgress * 0.98 - 2}%` }}
                        onMouseDown={handleMouseDown}
                    >
                        <img src='airplane.png' className='w-full h-full' alt='Airplane' />
                    </div>
                </div>
            </div>
        </nav>
    );
};
