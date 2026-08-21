import { useState } from 'react';
import {
    ProjectsSection,
    SectionTitle,
    TabsContainer,
    TabButton,
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

// ИМПОРТЫ МЕДИА
import video1 from '../../assets/1.mp4';
import geoprint1 from '../../assets/geoprint1.jpg';
import geoprint2 from '../../assets/geoprint2.jpg';
import geoprint3 from '../../assets/geoprint3.jpg';
import geoprint4 from '../../assets/geoprint4.jpg';
import video3 from '../../assets/3.mp4';
import farmImg from '../../assets/farm.jpg';
import server1 from '../../assets/server1.jpg';
import server2 from '../../assets/server2.jpg';
import server3 from '../../assets/server3.jpg';
import karma1 from '../../assets/karma1.jpg';
import karma2 from '../../assets/karma2.jpg';
import karma3 from '../../assets/karma3.jpg';
import karma4 from '../../assets/karma4.jpg';

// Иконки
import { FaWordpress, FaShoppingCart, FaServer, FaImages, FaShopify, FaTelegramPlane, FaPrint } from 'react-icons/fa';

// ДАННЫЕ ПРОЕКТОВ
const projectsData: Project[] = [
    {
        id: 10,
        title: 'Geoprint Next.js Platform',
        category: 'flagship',
        image: geoprint1, // Вставили главную обложку
        mediaType: 'image', // Указали, что рендерить нужно картинку
        icon: <FaPrint />,
        color: 'linear-gradient(135deg, #ea580c 0%, #000000 100%)',
        description: 'High-performance commercial landing page and catalog for a premium printing service. Features a dark-themed UI, ambient phantom effects, and a secure server-side order processing system.',
        tech: ['Next.js 16', 'Tailwind', 'Zod', 'Telegram API'],
        github: '#',
        live: 'https://geoprint.com.ua',
        nda: false,
        gallery: [geoprint1, geoprint2, geoprint3, geoprint4], // Добавили галерею скриншотов
        challenges: [
            'Client-side validation is insufficient for secure order routing in a hostile frontend environment.',
            'Managing complex ambient UI effects (mix-blend-mode) without sacrificing layout performance and causing GPU lag.'
        ],
        solutions: [
            'Implemented strict server-side validation using Zod and Next.js API routes before dispatching to the Telegram bot.',
            'Offloaded ambient animations to separate GPU layers (will-change: transform) and strictly isolated them from the document flow.'
        ]
    },
    {
        id: 9,
        title: 'Karma-Case Telegram Web App',
        category: 'flagship',
        image: karma1,
        mediaType: 'image',
        icon: <FaTelegramPlane />,
        color: 'linear-gradient(135deg, #0088cc 0%, #005580 100%)',
        description: 'High-load Telegram Web App functioning as a gamified platform. Engineered via Webhook architecture with a secure dual-tier Role-Based Access Control (RBAC) system for administrators.',
        tech: ['Python', 'Aiogram 3', 'Nginx', 'Systemd'],
        github: '#',
        live: '#',
        nda: true,
        gallery: [karma1, karma2, karma3, karma4],
        challenges: [
            'Preventing database lockups and race conditions during simultaneous high-frequency transactions from multiple users.'
        ],
        solutions: [
            'Implemented an asynchronous SQLite driver (aiosqlite) ensuring thread-safe, non-blocking I/O operations.'
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
        description: 'Integrated a complex HTML/JS product configurator with the Shopify Cart API. Implemented dynamic price calculations.',
        tech: ['Shopify Liquid', 'JavaScript', 'Cart API'],
        github: '#',
        live: '#',
        nda: true
    },
    {
        id: 7,
        title: 'Game Server Monitoring',
        category: 'ecommerce',
        image: server1, // <-- ВАЖНО: передаем переменную импортированной картинки
        mediaType: 'image', // <-- ВАЖНО: меняем 'none' на 'image', чтобы сработал рендер тега <img>
        icon: <FaServer />,
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        description: 'Architected a custom server monitoring architecture within a classifieds CMS. Engineered an automated Cron-based system querying servers every 5 minutes.',
        tech: ['PHP', 'MySQL', 'Cron', 'Monobank API'],
        github: '#',
        live: '#',
        nda: true,
        gallery: [server1, server2, server3]
    },
    {
        id: 1,
        title: 'Osclass Marketplace Optimization',
        category: 'ecommerce',
        image: null,
        mediaType: 'none',
        icon: <FaShoppingCart />,
        color: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)',
        description: 'Comprehensive platform localization (UA/RU) and automated XML product feed generation. Integrated Google Tag Manager.',
        tech: ['PHP', 'Osclass', 'XML Feeds'],
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
        description: 'High-performance geo-redirection plugin with bot filtering logic. Implemented "White Page" technology.',
        tech: ['WordPress', 'PHP', 'GeoIP'],
        github: '#',
        live: '#',
        nda: true
    },
    {
        id: 3,
        title: 'Automation Farm',
        category: 'tools',
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
        category: 'tools',
        image: video1,
        mediaType: 'video',
        description: 'Web tool for text analysis with synonym replacement using Datamuse API.',
        tech: ['Angular', 'TypeScript', 'RxJS'],
        github: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
        live: 'https://github.com/AleksanderGladchenko/phrase-analyzer',
    },
    {
        id: 6,
        title: 'Smart Forms',
        category: 'tools',
        image: video3,
        mediaType: 'video',
        description: 'Complex reactive forms with dynamic fields and custom validators.',
        tech: ['Angular', 'Material', 'Forms'],
        github: 'https://github.com/AleksanderGladchenko/engineer-form',
        live: '#',
    }
];

const tabs = [
    { id: 'all', label: 'All Work' },
    { id: 'flagship', label: 'Flagship Solutions' },
    { id: 'ecommerce', label: 'Commercial & E-commerce' },
    { id: 'tools', label: 'Infrastructure & Tools' },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<string>('all');

    // Логика фильтрации
    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === activeTab);

    return (
        <>
            <ProjectsSection id="projects">
                <SectionTitle>Selected <span>Projects</span></SectionTitle>

                {/* ПРЕМИАЛЬНЫЙ ТАБ-КОНТРОЛЛЕР */}
                <TabsContainer>
                    {tabs.map((tab) => (
                        <TabButton
                            key={tab.id}
                            $active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.label}
                        </TabButton>
                    ))}
                </TabsContainer>

                <ProjectsGrid>
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                layout
                                onClick={() => setSelectedProject(project)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
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
                                        <NoImagePlaceholder style={{ background: project.color || '#111' }}>
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
                                        {project.tech.map((t, index) => (
                                            <TechTag key={index}>{t}</TechTag>
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