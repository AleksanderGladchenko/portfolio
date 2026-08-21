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
    GalleryBadge,
    SkeletonLoader
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
        image: geoprint1,
        mediaType: 'image',
        icon: <FaPrint />,
        color: 'linear-gradient(135deg, #ea580c 0%, #000000 100%)',
        description: 'Commercial catalog platform for a printing service. Focus was on strict data validation and isolating heavy UI animations from the main rendering thread.',
        tech: ['Next.js 16', 'Tailwind', 'Zod', 'Telegram API'],
        github: '#',
        live: 'https://geoprint.com.ua',
        nda: false,
        gallery: [geoprint1, geoprint2, geoprint3, geoprint4],
        challenges: [
            'Client-side validation is a security risk in a hostile frontend environment.',
            'Heavy UI blending effects causing GPU lag.'
        ],
        solutions: [
            'Moved all validation to the Next.js backend using Zod before interacting with the Telegram API.',
            'Offloaded animations to separate GPU layers via transform constraints.'
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
        description: 'Telegram Web App handling concurrent user requests. Built on Webhook architecture with a dual-tier RBAC admin system.',
        tech: ['Python', 'Aiogram 3', 'Nginx', 'Systemd'],
        github: '#',
        live: '#',
        nda: true,
        gallery: [karma1, karma2, karma3, karma4],
        challenges: [
            'Database locks and race conditions under simultaneous high-frequency requests.'
        ],
        solutions: [
            'Implemented aiosqlite for non-blocking, thread-safe asynchronous I/O operations.'
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
        description: 'Integrated a custom JS product configurator with the Shopify Cart API. Replaced standard cart logic with dynamic pricing calculations.',
        tech: ['Shopify Liquid', 'JavaScript', 'Cart API'],
        github: '#',
        live: '#',
        nda: true
    },
    {
        id: 7,
        title: 'Game Server Monitoring',
        category: 'ecommerce',
        image: server1,
        mediaType: 'image',
        icon: <FaServer />,
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)',
        description: 'Custom server telemetry architecture within a classifieds CMS. Engineered a Cron-based daemon querying external servers every 5 minutes to aggregate uptime data.',
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
        description: 'Platform localization and backend optimization. Automated XML product feed generation to sync with external aggregators.',
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
        description: 'Security plugin for WordPress. Implemented geo-redirection and IP filtering logic to mitigate bot traffic.',
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
        description: 'Headless automation architecture managing concurrent Android emulators on Linux. Features auto-healing via Systemd and thread-safe API task queuing.',
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
        description: 'Client-side text analysis tool. Integrates the Datamuse API for real-time synonym fetching and text replacement.',
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
        description: 'Angular-based reactive forms engine with dynamic field generation and strict custom validators.',
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

    const [loadedMedia, setLoadedMedia] = useState<Record<number, boolean>>({});

    const handleMediaLoad = (id: number) => {
        setLoadedMedia(prev => ({ ...prev, [id]: true }));
    };

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
                                    {/* Скелетон показывается, пока медиа не загружено */}
                                    {project.mediaType !== 'none' && !loadedMedia[project.id] && <SkeletonLoader />}

                                    {project.mediaType === 'video' && project.image ? (
                                        <ProjectImage
                                            as="video"
                                            autoPlay loop muted playsInline
                                            src={project.image}
                                            onLoadedData={() => handleMediaLoad(project.id)}
                                            $isLoaded={loadedMedia[project.id]}
                                        />
                                    ) : project.mediaType === 'image' && project.image ? (
                                        <ProjectImage
                                            as="img"
                                            src={project.image}
                                            alt={project.title}
                                            onLoad={() => handleMediaLoad(project.id)}
                                            $isLoaded={loadedMedia[project.id]}
                                        />
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