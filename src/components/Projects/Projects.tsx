// src/components/Projects/Projects.tsx
import { useState } from 'react';
import { /* ... импорты стилей ... */ } from './Projects.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectFlightsImg from '../../assets/project-flights.gif';
import projectAnalyzerImg from '../../assets/project-analyzer.gif';
import Modal from '../Modal/Modal';

// 1. Создаем интерфейс для объекта проекта
interface Project {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

const projectsData: Project[] = [ // Используем тип здесь
    {
        title: 'Phrase Analyzer',
        image: projectAnalyzerImg,
        description: 'A web tool for text analysis. Allows users to get synonyms for selected words via the Datamuse API and replace them in the text.',
        tech: ['Angular', 'TypeScript', 'RxJS', 'CSS'],
        github: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
        live: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
    },
    {
        title: 'Flight Booking App',
        image: projectFlightsImg,
        description: 'A single-page application for browsing flights, viewing seat details, and adding tickets to a cart. State is managed with Redux.',
        tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Vite'],
        github: 'https://github.com/AleksanderGladchenko/flight-booking-app',
        live: 'https://github.com/AleksanderGladchenko/flight-booking-app',
    }
];

const gridVariants = { /* ... */ };
const cardVariants = { /* ... */ };

const Projects = () => {
    // 2. Указываем TypeScript правильный тип для состояния
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            {/* ... остальной JSX без изменений ... */}
        </>
    );
};

export default Projects;