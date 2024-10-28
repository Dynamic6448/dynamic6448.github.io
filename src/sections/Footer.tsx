import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export const Footer: React.FC = () => {
    return (
        <footer className='pb-6'>
            <div className='flex flex-row justify-center items-center text-white text-4xl space-x-4'>
                <IconLink icon={faEnvelope} href='mailto:fawwazm@tamu.edu' />
                <IconLink icon={faGithub} href='https://github.com/Dynamic6448' />
                <IconLink icon={faLinkedin} href='https://www.linkedin.com/in/fawwaz-m' />
            </div>
        </footer>
    );
};

interface IconLinkProps {
    icon: IconProp;
    href: string;
}
const IconLink: React.FC<IconLinkProps> = ({ icon, href }) => {
    return (
        <a href={href}>
            <FontAwesomeIcon icon={icon} className='cursor-pointer transition hover:text-sky-500' />
        </a>
    );
};
