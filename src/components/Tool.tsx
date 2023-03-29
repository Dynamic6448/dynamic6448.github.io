import React from 'react';

export const Tool: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='flex justify-center items-center bg-gray-700 bg-opacity-50 border-2 border-gray-600 border-opacity-50 rounded-full px-4 py-1 text-gray-200 text-sm sm:text-[1rem]'>
            {children}
        </div>
    );
};
