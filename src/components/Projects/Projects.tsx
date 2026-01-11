import { useState } from 'react';
import {
    ProjectsSection,
    SectionTitle,
    FilterContainer,
    FilterButton,
    ProjectsGrid,
    ProjectCard,
    MediaContainer,
    ProjectImage,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    TechList,
    TechTag,
    NoImagePlaceholder
} from './Projects.styles';
import Modal from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';

// Импорт медиа
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import farmImg from '../../assets/farm.jpg';

// Импорт иконок (оставил только используемые)
import { FaWordpress, FaShoppingCart } from 'react-icons/fa';

// Интерфейс должен совпадать с Modal
export interface Project {
    id: number;
    title: string;
    category: 'app' | 'cms' | 'automation';
    image: string | null;
    mediaType: 'video' | 'image' | 'none';
    description: string;
    tech: string[];
    github: string;
    live: string;
    icon?: React.ReactNode;
    color?: string;
}

const projectsData: Project[] = [
    // --- НОВЫЙ ПРОЕКТ 1 (Freelance Osclass) ---
    {
        id: 1,
        title: 'Osclass Marketplace Optimization',
        category: 'cms',
        image: null,
        mediaType: 'none',
        icon: <FaShoppingCart />,
        color: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)',
        description: 'Comprehensive platform localization (UA/RU) and automated XML product feed generation. Integrated Google Tag Manager for advanced e-commerce analytics.',
        tech: ['PHP', 'Osclass', 'XML Feeds', 'GTM'],
        github: '#',
        live: '#',
    },
    // --- НОВЫЙ ПРОЕКТ 2 (WP Plugin) ---
    {
        id: 2,
        title: 'WP Geo-Traffic Shield',
        category: 'cms',
        image: null,
        mediaType: 'none',
        icon: <FaWordpress />,
        color: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
        description: 'High-performance geo-redirection plugin with bot filtering logic. Implemented "White Page" technology to protect landing pages from unwanted bot traffic.',
        tech: ['WordPress', 'PHP', 'GeoIP', 'Security'],
        github: '#',
        live: '#',
    },
    // --- СТАРЫЕ ПРОЕКТЫ ---
    {
        id: 3,
        title: 'Automation Farm',
        category: 'automation',
        image: farmImg,
        mediaType: 'image',
        description: 'Fault-tolerant automation system managing 10+ Android emulators on a dedicated Linux server with auto-healing capabilities.',
        tech: ['Python', 'Appium', 'Flask', 'Linux'],
        github: '#',
        live: '#',
    },
    {
        id: 4,
        title: 'Phrase Analyzer',
        category: 'app',
        image: video1,
        mediaType: 'video',
        description: 'Web tool for text analysis with synonym replacement using Datamuse API.',
        tech: ['Angular', 'TypeScript', 'RxJS'],
        github: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
        live: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
    },
    {
        id: 5,
        title: 'Flight Booking',
        category: 'app',
        image: video2,
        mediaType: 'video',
        description: 'SPA for browsing flights and managing tickets with Redux state management.',
        tech: ['React', 'Redux', 'MUI'],
        github: 'https://github.com/AleksanderGladchenko/flight-booking-app',
        live: 'https://github.com/AleksanderGladchenko/flight-booking-app',
    },
    {
        id: 6,
        title: 'Smart Forms',
        category: 'app',
        image: video3,
        mediaType: 'video',
        description: 'Complex reactive forms with dynamic fields and custom validators.',
        tech: ['Angular', 'Material', 'Forms'],
        github: 'https://github.com/AleksanderGladchenko/engineer-form',
        live: '#',
    }
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<'all' | 'app' | 'cms' | 'automation'>('all');

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <>
            <ProjectsSection id="projects">
                <SectionTitle>Selected <span>Projects</span></SectionTitle>

                <FilterContainer>
                    <FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>All Work</FilterButton>
                    <FilterButton $active={filter === 'app'} onClick={() => setFilter('app')}>Web Apps</FilterButton>
                    <FilterButton $active={filter === 'cms'} onClick={() => setFilter('cms')}>CMS & Solutions</FilterButton>
                    <FilterButton $active={filter === 'automation'} onClick={() => setFilter('automation')}>Automation</FilterButton>
                </FilterContainer>

                <ProjectsGrid layout>
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                layout
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <MediaContainer>
                                    {project.mediaType === 'video' && project.image ? (
                                        <ProjectImage
                                            as="video"
                                            autoPlay loop muted playsInline
                                            src={project.image}
                                        />
                                    ) : project.mediaType === 'image' && project.image ? (
                                        <ProjectImage
                                            as="img"
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    ) : (
                                        <NoImagePlaceholder style={{ background: project.color }}>
                                            <div className="icon-wrapper">
                                                {project.icon}
                                            </div>
                                        </NoImagePlaceholder>
                                    )}
                                </MediaContainer>

                                <ProjectContent>
                                    <ProjectTitle>{project.title}</ProjectTitle>
                                    <ProjectDescription>{project.description}</ProjectDescription>
                                    <TechList>
                                        {project.tech.slice(0, 3).map((t, i) => (
                                            <TechTag key={i}>{t}</TechTag>
                                        ))}
                                    </TechList>
                                </ProjectContent>
                            </ProjectCard>
                        ))}
                    </AnimatePresence>
                </ProjectsGrid>
            </ProjectsSection>

            <Modal project={selectedProject} closeModal={() => setSelectedProject(null)} />
        </>
    );
};

export default Projects;