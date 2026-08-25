import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    ProjectsSection, SectionTitle, TabsContainer, TabButton, ProjectsGrid, ProjectCard,
    MediaContainer, ProjectImage, ProjectVideo, ProjectContent, ProjectTitle, ProjectDescription,
    TechList, TechTag, NoImagePlaceholder, GalleryBadge, SkeletonLoader
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

const projectsData: Project[] = [
    {
        id: 'geoprint', category: 'flagship', image: geoprint1, mediaType: 'image', icon: <FaPrint />,
        color: 'linear-gradient(135deg, #ea580c 0%, #000000 100%)', tech: ['Next.js 16', 'Tailwind', 'Zod', 'Telegram API'],
        github: '#', live: 'https://geoprint.com.ua', nda: false, gallery: [geoprint1, geoprint2, geoprint3, geoprint4],
        hasChallenges: true, hasSolutions: true
    },
    {
        id: 'karma', category: 'flagship', image: karma1, mediaType: 'image', icon: <FaTelegramPlane />,
        color: 'linear-gradient(135deg, #0088cc 0%, #005580 100%)', tech: ['Python', 'Aiogram 3', 'Nginx', 'Systemd'],
        github: '#', live: '#', nda: true, gallery: [karma1, karma2, karma3, karma4],
        hasChallenges: true, hasSolutions: true
    },
    {
        id: 'shopify', category: 'ecommerce', image: null, mediaType: 'none', icon: <FaShopify />,
        color: 'linear-gradient(135deg, #95bf47 0%, #5e8e3e 100%)', tech: ['Shopify Liquid', 'JavaScript', 'Cart API'],
        github: '#', live: '#', nda: true
    },
    {
        id: 'server', category: 'ecommerce', image: server1, mediaType: 'image', icon: <FaServer />,
        color: 'linear-gradient(135deg, #11998e 0%, #38ef7d 100%)', tech: ['PHP', 'MySQL', 'Cron', 'Monobank API'],
        github: '#', live: '#', nda: true, gallery: [server1, server2, server3]
    },
    {
        id: 'osclass', category: 'ecommerce', image: null, mediaType: 'none', icon: <FaShoppingCart />,
        color: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)', tech: ['PHP', 'Osclass', 'XML Feeds'],
        github: '#', live: '#', nda: true
    },
    {
        id: 'wpgeo', category: 'ecommerce', image: null, mediaType: 'none', icon: <FaWordpress />,
        color: 'linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)', tech: ['WordPress', 'PHP', 'GeoIP'],
        github: '#', live: '#', nda: true
    },
    {
        id: 'farm', category: 'tools', image: farmImg, mediaType: 'image', tech: ['Python', 'Appium', 'Flask', 'Linux'],
        github: '#', live: '#'
    },
    {
        id: 'phrase', category: 'tools', image: video1, mediaType: 'video', tech: ['Angular', 'TypeScript', 'RxJS'],
        github: 'https://github.com/AleksanderGladchenko/phrase-analyzer', live: 'https://github.com/AleksanderGladchenko/phrase-analyzer'
    },
    {
        id: 'form', category: 'tools', image: video3, mediaType: 'video', tech: ['Angular', 'Material', 'Forms'],
        github: 'https://github.com/AleksanderGladchenko/engineer-form', live: '#'
    }
];

const tabs = [
    { id: 'all', key: 'all' },
    { id: 'flagship', key: 'flagship' },
    { id: 'ecommerce', key: 'ecommerce' },
    { id: 'tools', key: 'tools' },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeTab, setActiveTab] = useState<string>('all');
    const [loadedMedia, setLoadedMedia] = useState<Record<string, boolean>>({});

    const { t } = useTranslation();

    const handleMediaLoad = (id: string) => {
        setLoadedMedia(prev => ({ ...prev, [id]: true }));
    };

    const filteredProjects = activeTab === 'all'
        ? projectsData
        : projectsData.filter(p => p.category === activeTab);

    return (
        <>
            <ProjectsSection id="projects">
                <SectionTitle>{t('projects.titlePart1')} <span>{t('projects.titlePart2')}</span></SectionTitle>

                <TabsContainer>
                    {tabs.map((tab) => (
                        <TabButton
                            key={tab.id}
                            $active={activeTab === tab.id}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {t(`projects.tabs.${tab.key}`)}
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
                                        {project.gallery.length} {t('projects.modal.images')}
                                    </GalleryBadge>
                                )}

                                <MediaContainer>
                                    {project.mediaType !== 'none' && !loadedMedia[project.id] && <SkeletonLoader />}

                                    {project.mediaType === 'video' && project.image ? (
                                        <ProjectVideo
                                            autoPlay loop muted playsInline
                                            src={project.image}
                                            onLoadedData={() => handleMediaLoad(project.id)}
                                            $isLoaded={loadedMedia[project.id]}
                                        />
                                    ) : project.mediaType === 'image' && project.image ? (
                                        <ProjectImage
                                            src={project.image}
                                            alt={project.id}
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
                                    <ProjectTitle>{t(`projects.items.${project.id}.title`)}</ProjectTitle>
                                    <ProjectDescription>{t(`projects.items.${project.id}.description`)}</ProjectDescription>
                                    <TechList>
                                        {project.tech.map((tItem, index) => (
                                            <TechTag key={index}>{tItem}</TechTag>
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