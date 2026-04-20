import { useState, useEffect } from 'react';
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
    NoImagePlaceholder,
    GalleryBadge
} from './Projects.styles';
import Modal, { type Project } from '../Modal/Modal';
import { AnimatePresence } from 'framer-motion';

// Импорт старых медиа
import video1 from '../../assets/1.mp4';
import video2 from '../../assets/2.mp4';
import video3 from '../../assets/3.mp4';
import farmImg from '../../assets/farm.jpg';
import server1 from '../../assets/server1.jpg';
import server2 from '../../assets/server2.jpg';
import server3 from '../../assets/server3.jpg';

// НОВЫЕ ИМПОРТЫ КАРТИНОК БОТА
import karma1 from '../../assets/karma1.jpg';
import karma2 from '../../assets/karma2.jpg';
import karma3 from '../../assets/karma3.jpg';
import karma4 from '../../assets/karma4.jpg';

import { FaWordpress, FaShoppingCart, FaServer, FaImages, FaShopify, FaTelegramPlane } from 'react-icons/fa';

const projectsData: Project[] = [
    // --- НОВЫЙ ПРОЕКТ: KARMA-CASE TELEGRAM WEB APP ---
    {
        id: 9,
        title: 'Karma-Case Telegram Web App',
        category: 'app',
        image: karma1, // Главная обложка карточки
        mediaType: 'image',
        icon: <FaTelegramPlane />,
        color: 'linear-gradient(135deg, #0088cc 0%, #005580 100%)',
        description: 'High-load Telegram Web App functioning as a gamified platform. Engineered via Webhook architecture with a secure dual-tier Role-Based Access Control (RBAC) system for administrators.',
        tech: ['Python 3.10', 'Aiogram 3', 'Nginx', 'Systemd', 'aiosqlite'],
        github: '#',
        live: '#',
        nda: true,
        gallery: [karma1, karma2, karma3, karma4],
        challenges: [
            'Preventing database lockups (database is locked) and race conditions during simultaneous high-frequency transactions from multiple users.',
            'Guaranteeing strict mathematical validity of roulette odds (strict sum of 1.0) on the backend.'
        ],
        solutions: [
            'Implemented an asynchronous SQLite driver (aiosqlite) ensuring thread-safe, non-blocking I/O operations.',
            'Configured a production-grade Linux environment utilizing Nginx as a reverse proxy with Let\'s Encrypt SSL and automated Systemd watchdogs for zero-downtime recovery.'
        ]
    },
    {
        id: 8,
        title: 'Shopify Configurator & Cart API',
        category: 'ecommerce',
        image: null,
        mediaType: 'none',
        icon: <FaShopify />,
        color: 'linear-gradient(135deg, #95bf47 0%, #5e8e3e 100%)',
        description: 'Integrated a complex HTML/JS product configurator with the Shopify Cart API. Implemented dynamic price calculations and ensured custom user parameters (line item properties) are strictly passed to the checkout via AJAX Cart routing.',
        tech: ['Shopify Liquid', 'Cart API', 'JavaScript', 'HTML'],
        github: '#',
        live: '#',
        nda: true,
        challenges: [
            'Synchronizing custom JS state with the native Shopify Cart API without breaking the checkout flow.',
            'Handling complex line-item properties for custom user inputs (dimensions, custom text).'
        ],
        solutions: [
            'Developed a vanilla JS reactive bridge to intercept native form submissions.',
            'Utilized Shopify AJAX API to construct and push multi-variant payloads reliably.'
        ]
    },
    {
        id: 1,
        title: 'Osclass Marketplace Optimization',
        category: 'ecommerce',
        image: null,
        mediaType: 'none',
        icon: <FaShoppingCart />,
        color: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)',
        description: 'Comprehensive platform localization (UA/RU) and automated XML product feed generation. Integrated Google Tag Manager for advanced e-commerce analytics.',
        tech: ['PHP', 'Osclass', 'XML Feeds', 'GTM'],
        github: '#',
        live: '#',
        nda: true
    },
    {
        id: 2,
        title: 'WP Geo-Traffic Shield',
        category: 'ecommerce',
        image: null,
        mediaType: 'none',
        icon: <FaWordpress />,
        color: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)',
        description: 'High-performance geo-redirection plugin with bot filtering logic. Implemented "White Page" technology to protect landing pages from unwanted bot traffic.',
        tech: ['WordPress', 'PHP', 'GeoIP', 'Security'],
        github: '#',
        live: '#',
        nda: true
    },
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
    },
    {
        id: 7,
        title: 'Game Server Monitoring',
        category: 'ecommerce',
        image: null,
        mediaType: 'none',
        icon: <FaServer />,
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        description: 'Architected a custom server monitoring architecture within a classifieds CMS. Engineered an automated Cron-based system querying servers every 5 minutes to fetch and store real-time player metrics.',
        tech: ['PHP', 'MySQL', 'Cron', 'Monobank API', 'Data Viz', 'Adminer'],
        github: '#',
        live: '#',
        nda: true,
        gallery: [server1, server2, server3],
        challenges: [
            'Extremely high database load due to continuous polling of real-time player metrics across multiple servers.',
            'Integrating a modern visualization library (Chart.js) into a legacy PHP monolithic architecture.'
        ],
        solutions: [
            'Implemented a decoupled Cron-job architecture with optimized SQL indexing to drastically reduce query times.',
            'Built an asynchronous JS wrapper to fetch cached metrics and render Chart.js graphics without blocking the main thread.'
        ]
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [filter, setFilter] = useState<'all' | 'app' | 'ecommerce' | 'automation'>('all');

    useEffect(() => {
        const handleFilterChange = (e: Event) => {
            const customEvent = e as CustomEvent;
            if (customEvent.detail) {
                setFilter(customEvent.detail as 'all' | 'app' | 'ecommerce' | 'automation');
            }
        };
        window.addEventListener('setProjectFilter', handleFilterChange);
        return () => window.removeEventListener('setProjectFilter', handleFilterChange);
    }, []);

    const filteredProjects = filter === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <>
            <ProjectsSection id="projects">
                <SectionTitle>Selected <span>Projects</span></SectionTitle>

                <FilterContainer>
                    <FilterButton $active={filter === 'all'} onClick={() => setFilter('all')}>All Work</FilterButton>
                    <FilterButton $active={filter === 'app'} onClick={() => setFilter('app')}>Web Applications</FilterButton>
                    <FilterButton $active={filter === 'ecommerce'} onClick={() => setFilter('ecommerce')}>E-commerce & CMS</FilterButton>
                    <FilterButton $active={filter === 'automation'} onClick={() => setFilter('automation')}>Scripts & Automation</FilterButton>
                </FilterContainer>

                <ProjectsGrid>
                    <AnimatePresence mode='wait'>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                {project.gallery && project.gallery.length > 0 && (
                                    <GalleryBadge>
                                        <FaImages />
                                        {project.gallery.length} Images
                                    </GalleryBadge>
                                )}

                                <MediaContainer>
                                    {project.mediaType === 'video' && project.image ? (
                                        <ProjectImage as="video" autoPlay loop muted playsInline src={project.image} />
                                    ) : project.mediaType === 'image' && project.image ? (
                                        <ProjectImage as="img" src={project.image} alt={project.title} />
                                    ) : (
                                        <NoImagePlaceholder style={{ background: project.color || '#333' }}>
                                            <div className="icon-wrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%'}}>
                                                {project.icon || <span>No Icon</span>}
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