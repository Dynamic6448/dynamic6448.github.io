/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}'],
    darkMode: 'class',
    theme: {
        extend: {
            animation: {},
            colors: {
                slate:{
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily:{
                sans: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
