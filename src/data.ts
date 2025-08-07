export enum ProjectLinkType {
    DEVPOST,
    DISCORD,
    GITHUB,
    YOUTUBE,
}

export interface Project {
    title: string;
    imgTitle: string;
    date: string;
    technologies: string[];
    description: string;
    links: { link: string; type: ProjectLinkType }[];
}

export const projects: Project[] = [
    {
        title: 'Digital Flight Dynamics A350X',
        imgTitle: 'a350x',
        date: 'Aug 2020 - Present',
        technologies: ['React', 'Rust', 'MSFS SDK', 'MongoDB'],
        description:
            'I built and led a team of software developers and 3D artists to develop a free and open-source airliner add-on for ' +
            'Microsoft Flight Simulator. As the lead software developer, I primarily build high-fidelity avionics using React with ' +
            'pixel-perfect accuracy. I also develop core aircraft systems using Rust, including electrical, hydraulics, and air ' +
            'conditioning.',
        links: [
            { link: 'https://github.com/Digital-Flight-Dynamics', type: ProjectLinkType.GITHUB },
            { link: 'https://youtube.com/@dfdsim', type: ProjectLinkType.YOUTUBE },
            { link: 'https://discord.gg/dfd', type: ProjectLinkType.DISCORD },
        ],
    },
    {
        title: 'SkyLounge',
        imgTitle: 'skylounge',
        date: 'Jan 2025',
        technologies: ['React', 'TailwindCSS', 'Python', 'Flask', 'SQLite'],
        description:
            "An enhanced in-flight entertainment system created for TAMUHack 2025's American Airlines challenge. Our project, " +
            'completed in just 24 hours, features a food ordering menu, a flight attendant mobile app for handling orders, and it ' +
            'even has built-in games like Chess and Pac-Man. The system also includes real-time flight information, which is stored ' +
            'and managed in an SQLite database, among other data. ',
        links: [
            { link: 'https://github.com/Dynamic6448/tamuhack-2025', type: ProjectLinkType.GITHUB },
            {
                link: 'https://devpost.com/software/american-airlines-in-flight-entertainment',
                type: ProjectLinkType.DEVPOST,
            },
        ],
    },
    {
        title: 'Smart Clock',
        imgTitle: 'smart_clock',
        date: 'Aug 2024 - Dec 2024',
        technologies: ['React', 'Tauri'],
        description:
            'A Tauri application built for a smart wall clock prototype powered by a Raspberry Pi 5. The app features both analog and ' +
            'digital clock styles, displaying real-time weather updates, commute time to work, and scheduled events. It integrates ' +
            'with the OpenWeatherMap and OpenRouteService APIs to provide accurate weather data and travel times.',
        links: [{ link: 'https://github.com/Dynamic6448/smart-clock', type: ProjectLinkType.GITHUB }],
    },
    {
        title: 'Note Nook',
        imgTitle: 'note_nook',
        date: 'Jan 2023 - Mar 2023',
        technologies: ['React', 'TailwindCSS', 'Firebase'],
        description:
            'I developed Note Nook to learn Firebase Firestore and Authentication. This web application allows users to create, ' +
            'edit, and delete notes with a simple and intuitive interface. It features a calendar for scheduling events, a secure ' +
            'authentication system, and real-time data synchronization using Firebase.',
        links: [{ link: 'https://github.com/Dynamic6448/note-nook', type: ProjectLinkType.GITHUB }],
    },
];

export const skills = {
    languages: [
        { name: 'C', img: 'c' },
        { name: 'C++', img: 'cpp' },
        { name: 'C#', img: 'csharp' },
        { name: 'Java', img: 'java' },
        { name: 'Python', img: 'python' },
        { name: 'JavaScript', img: 'javascript' },
        { name: 'TypeScript', img: 'typescript' },
        { name: 'Rust', img: 'rust' },
        { name: 'HTML', img: 'html' },
        { name: 'CSS', img: 'css' },
    ],
    technologies: [
        { name: 'Node.js', img: 'nodejs' },
        { name: 'Express', img: 'express' },
        { name: 'React', img: 'react' },
        { name: 'TailwindCSS', img: 'tailwindcss' },
        { name: 'Electron', img: 'electron' },
        { name: 'Tauri', img: 'tauri' },
        { name: 'Firebase', img: 'firebase' },
        { name: 'MongoDB', img: 'mongodb' },
        { name: '.NET', img: 'dotnet' },
        { name: 'Unity3D', img: 'unity' },
        { name: 'TensorFlow', img: 'tensorflow' },
    ],
};
