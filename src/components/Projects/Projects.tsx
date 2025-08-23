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
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectFlightsImg from '../../assets/project-flights.gif';
import projectAnalyzerImg from '../../assets/project-analyzer.gif';
import Modal from '../Modal/Modal';

// Определяем тип для объекта проекта
interface Project {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

const projectsData: Project[] = [
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

// Здесь были пустые объекты в твоей версии
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
                    {projectsData.map((project, i) => (
                        <ProjectCard key={i} variants={cardVariants}>
                            <div>
                                <ProjectImage src={project.image} alt={project.title} />
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
                                <IconButton onClick={() => setSelectedProject(project)}>
                                    <FaExternalLinkAlt />
                                </IconButton>
                            </ProjectLinks>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </ProjectsSection>

            <Modal project={selectedProject} closeModal={() => setSelectedProject(null)} />
        </>
    );
};

export default Projects;