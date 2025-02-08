import React, { useState, useEffect, useRef } from 'react';

interface FlightPathNavbarProps {
    sections: { name: string; ref: React.MutableRefObject<HTMLElement | null> }[];
}

export const FlightPathNavbar: React.FC<FlightPathNavbarProps> = ({ sections }) => {
    const [isNavHovered, setIsNavHovered] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Used to rerender the component on window resize
    const [, setWindowSize] = useState(0);

    // Use refs for scrolling variables to avoid re-renders (it'll rerender anyway because scrollProgress changes)
    const [isDragging, setIsDragging] = useState(false);
    const startY = useRef(0);
    const startScrollY = useRef(0);
    const trackContainerRef = useRef<HTMLDivElement>(null);

    // Rerender the component (by manipulating state) on window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowSize((prev) => prev + 1);
        };

        // Initial call after a short delay to ensure layout is correct
        const timeoutId = setTimeout(() => {
            handleResize();
        }, 50);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(timeoutId);
        };
    }, []);

    // When mouse is clicked down on the airplane icon, start tracking mouse movement
    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        startY.current = e.clientY;
        startScrollY.current = window.scrollY;

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

    // When mouse is moved while dragging, scroll the window
    const handleMouseMove = (e: MouseEvent) => {
        const containerHeight = trackContainerRef.current?.clientHeight || window.innerHeight;
        const deltaY = e.clientY - startY.current;
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollDelta = (deltaY / containerHeight) * totalScrollHeight;
        const newScrollY = startScrollY.current + scrollDelta;

        const clampedScrollY = Math.max(0, Math.min(totalScrollHeight, newScrollY));
        window.scrollTo(0, clampedScrollY);
    };

    // When mouse is released, stop tracking mouse movement
    const handleMouseUp = () => {
        setIsDragging(false);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
    };

    // Update scroll progress on scroll
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
            document.body.style.cursor = '';
        }
    }, [isDragging]);

    return (
        <nav className='fixed right-0 top-0 h-full flex items-center pr-4 select-none z-50'>
            <div
                className='h-5/6 flex justify-end rounded-[2rem] bg-black bg-opacity-50 px-4 py-8'
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => setIsNavHovered(false)}
                // For mobile
                style={{
                    width: isNavHovered ? `${Math.max(...sections.map((section) => section.name.length)) * 17}px` : '',
                    transition: 'width 0.3s ease-in-out',
                }}
            >
                <div className='relative w-8 h-full' ref={trackContainerRef}>
                    {/* Progress line */}
                    <div className='absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-slate-600'>
                        <div
                            className='absolute top-0 bg-emerald-500 w-full'
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>
                    {/* Clickable sections */}
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
                            i === 0 ? true : scrollProgress > 0 && scrollProgress >= Math.floor(circlePosition);

                        return (
                            <a
                                key={section.name}
                                className='absolute left-1/2 right-0 -translate-x-1/2 group cursor-pointer'
                                onClick={() => {
                                    section.ref.current?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{ top: `${circlePosition}%` }}
                            >
                                <div className='flex flex-row items-center justify-end space-x-4 -translate-y-1/2'>
                                    {/* Label */}
                                    <p
                                        className={`text-lg transition-colors ${
                                            isScrolledPast ? 'text-white' : 'text-gray-400 group-hover:text-white'
                                        }`}
                                    >
                                        {isNavHovered ? section.name : ''}
                                    </p>
                                    {/* Circle */}
                                    <div
                                        className={`w-4 h-4 aspect-square rounded-full border-[4px] group-hover:scale-125 transition-all duration-100 ${
                                            isScrolledPast
                                                ? 'border-emerald-500 bg-emerald-500'
                                                : 'border-slate-600 group-hover:border-emerald-500 bg-slate-600'
                                        }`}
                                    />
                                </div>
                            </a>
                        );
                    })}
                    {/* Airplane Icon */}
                    <div
                        className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 cursor-grab active:cursor-grabbing'
                        style={{ top: `${scrollProgress}%` }}
                        onMouseDown={handleMouseDown}
                    >
                        <img src='airplane.png' className='w-full h-full' alt='Airplane' />
                    </div>
                </div>
            </div>
        </nav>
    );
};
