// src/components/Projects/Projects.tsx
import { useState } from 'react';
import {
    ProjectsSection,
    SectionTitle,
    ProjectsGrid,
    ProjectCard,
    ProjectImage,
    ProjectContent,
    ProjectTitle as ProjectTitleComponent,
    ProjectDescription,
    TechList,
    ProjectLinks,
    IconButton
} from './Projects.styles';
import { FaGithub, FaExternalLinkAlt, FaCompressAlt } from 'react-icons/fa';

// Импорт видео
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';

// --- ИМПОРТ НАШЕГО СКРИНШОТА ---
// Убедись, что файл называется farm.png (или поменяй расширение на .jpg тут)
import farmImg from '../../assets/farm.jpg';

import Modal from '../Modal/Modal';

interface Project {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    mediaType: 'video' | 'image'; // Новое поле: тип медиа
}

const projectsData: Project[] = [
    // --- НАШ НОВЫЙ ПРОЕКТ (С КАРТИНКОЙ) ---
    {
        title: 'High-Load Appium Farm',
        image: farmImg, // Используем картинку
        mediaType: 'image', // Указываем, что это картинка
        description: 'Fault-tolerant automation system managing 10+ Android emulators on a dedicated Linux server. Features Flask REST API, Systemd watchdogs for auto-healing, and safe multithreading with SQLAlchemy.',
        tech: ['Python', 'Appium', 'Flask', 'Linux', 'SQLAlchemy'],
        github: '#',
        live: '#',
    },
    // ----------------------------------------
    {
        title: 'Phrase Analyzer',
        image: video1,
        mediaType: 'video',
        description: 'A web tool for text analysis. Allows users to get synonyms for selected words via the Datamuse API and replace them in the text.',
        tech: ['Angular', 'TypeScript', 'RxJS', 'CSS'],
        github: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
        live: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
    },
    {
        title: 'Flight Booking App',
        image: video2,
        mediaType: 'video',
        description: 'A single-page application for browsing flights, viewing seat details, and adding tickets to a cart. State is managed with Redux.',
        tech: ['React', 'TypeScript', 'Redux', 'MUI', 'Vite'],
        github: 'https://github.com/AleksanderGladchenko/flight-booking-app',
        live: 'https://github.com/AleksanderGladchenko/flight-booking-app',
    },
    {
        title: 'Frontend Engineer Form',
        image: video3,
        mediaType: 'video',
        description: 'A complex reactive form with dynamic fields and custom validators, built with Angular and Angular Material.',
        tech: ['Angular', 'TypeScript', 'Reactive Forms', 'Material'],
        github: 'https://github.com/AleksanderGladchenko/engineer-form',
        live: '#',
    }
];

const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return (
        <>
            <ProjectsSection id="projects">
                <SectionTitle>03. Hangar</SectionTitle>
                <ProjectsGrid
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projectsData.map((project) => {
                        const isExpanded = selectedProject && selectedProject.title === project.title;

                        return (
                            <ProjectCard key={project.title} variants={cardVariants}>
                                <div>
                                    {/* УМНАЯ ОТРИСОВКА: Проверяем, видео это или картинка */}
                                    {project.mediaType === 'video' ? (
                                        <ProjectImage as="video" autoPlay loop muted playsInline>
                                            <source src={project.image} type="video/mp4" />
                                        </ProjectImage>
                                    ) : (
                                        // Если картинка — рендерим img
                                        <ProjectImage as="img" src={project.image} alt={project.title} />
                                    )}

                                    <ProjectContent>
                                        <ProjectTitleComponent>{project.title}</ProjectTitleComponent>
                                        <ProjectDescription>{project.description}</ProjectDescription>
                                        <TechList>
                                            {project.tech.map((tech, j) => <li key={j}>{tech}</li>)}
                                        </TechList>
                                    </ProjectContent>
                                </div>
                                <ProjectLinks>
                                    <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                    <IconButton
                                        onClick={() => isExpanded ? setSelectedProject(null) : setSelectedProject(project)}
                                    >
                                        {isExpanded ? <FaCompressAlt /> : <FaExternalLinkAlt />}
                                    </IconButton>
                                </ProjectLinks>
                            </ProjectCard>
                        );
                    })}
                </ProjectsGrid>
            </ProjectsSection>

            <Modal project={selectedProject} closeModal={() => setSelectedProject(null)} />
        </>
    );
};

export default Projects;