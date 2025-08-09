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
                },
                // New sky-blue theme colors
                'sky-theme': {
                    50: '#f0f9ff',   // lightest sky blue
                    100: '#e0f2fe',  // very light sky blue
                    200: '#bae6fd',  // light sky blue
                    300: '#7dd3fc',  // medium sky blue
                    400: '#38bdf8',  // sky blue
                    500: '#0ea5e9',  // primary sky blue
                    600: '#0284c7',  // darker sky blue
                    700: '#0369a1',  // dark sky blue
                    800: '#075985',  // very dark sky blue
                    900: '#0c4a6e',  // darkest sky blue
                },
                'black-theme': {
                    50: '#f8fafc',   // almost white
                    100: '#f1f5f9',  // very light gray
                    200: '#e2e8f0',  // light gray
                    300: '#cbd5e1',  // gray
                    400: '#94a3b8',  // medium gray
                    500: '#64748b',  // darker gray
                    600: '#475569',  // dark gray
                    700: '#334155',  // very dark gray
                    800: '#1e293b',  // almost black
                    900: '#0f172a',  // near black
                    950: '#000000',  // pure black
                }
            },
            fontFamily:{
                sans: ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-sky': 'linear-gradient(135deg, #000000 0%, #0f172a 30%, #1e293b 60%, #000000 100%)',
                'gradient-sky-card': 'linear-gradient(145deg, #111827 0%, #1e3a8a 50%, #111827 100%)',
                'gradient-sky-hover': 'linear-gradient(135deg, #1e3a8a 0%, #38bdf8 50%, #1e3a8a 100%)',
            }
        },
    },
    plugins: [require('tailwind-scrollbar')],
};
