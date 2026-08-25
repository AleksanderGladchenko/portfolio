import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import {
    Backdrop, ModalContent, ScrollableArea, MobileDragHandle, ModalImage, CloseButton, ModalBody,
    ModalLinks, LinkButton, ProjectGallery, GalleryImage,
    LightboxBackdrop, LightboxContent, LightboxPrev, LightboxNext, LightboxClose,
    TitleRow, NdaBadge, ArchBlock, ArchTitle, ArchList
} from './Modal.styles';
import { ProjectTitle, ProjectDescription, TechList, TechTag } from '../Projects/Projects.styles';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaTools, FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

export interface Project {
    id: string | number;
    title: string;
    category: 'app' | 'ecommerce' | 'automation' | 'flagship' | 'tools' | string;
    image: string | null;
    mediaType: 'video' | 'image' | 'none';
    description: string;
    tech: string[];
    github: string;
    live: string;
    icon?: React.ReactNode;
    color?: string;
    gallery?: string[];
    nda?: boolean;
    challenges?: string[];
    solutions?: string[];
    hasChallenges?: boolean;
    hasSolutions?: boolean;
}

interface ModalProps {
    project: Project | null;
    closeModal: () => void;
}

const ColoredHeader = styled.div<{ $bg?: string }>`
    width: 100%; height: 250px; background: ${({ $bg }) => $bg || '#333'};
    display: flex; align-items: center; justify-content: center; font-size: 5rem;
    color: rgba(255, 255, 255, 0.9); border-bottom: 1px solid var(--border-color);
`;

const Modal = ({ project, closeModal }: ModalProps) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (project) {
            // ИНЖЕНЕРНЫЙ ФИКС 1: Вычисляем ширину скроллбара
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

            document.body.style.overflow = 'hidden';
            // Добавляем паддинг, чтобы компенсировать исчезнувший скроллбар
            document.body.style.paddingRight = `${scrollbarWidth}px`;

            // Компенсируем сдвиг для фиксированного хедера
            const header = document.querySelector('header');
            if (header) {
                const currentPadding = window.getComputedStyle(header).paddingRight;
                header.style.paddingRight = `calc(${currentPadding} + ${scrollbarWidth}px)`;
            }
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
            const header = document.querySelector('header');
            if (header) header.style.paddingRight = '';
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.paddingRight = '0px';
            const header = document.querySelector('header');
            if (header) header.style.paddingRight = '';
        };
    }, [project]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (lightboxIndex === null || !project?.gallery) return;
            if (e.key === 'Escape') setLightboxIndex(null);
            if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null && prev === project.gallery!.length - 1 ? 0 : prev! + 1);
            if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null && prev === 0 ? project.gallery!.length - 1 : prev! - 1);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxIndex, project]);

    const nextImage = (e: React.MouseEvent) => { e.stopPropagation(); if (project?.gallery) setLightboxIndex((prev) => prev !== null && prev === project.gallery!.length - 1 ? 0 : prev! + 1); };
    const prevImage = (e: React.MouseEvent) => { e.stopPropagation(); if (project?.gallery) setLightboxIndex((prev) => prev !== null && prev === 0 ? project.gallery!.length - 1 : prev! - 1); };

    return (
        <>
            <AnimatePresence>
                {project && (
                    <Backdrop onClick={closeModal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <ModalContent
                            onClick={(e) => e.stopPropagation()}
                            // ИНЖЕНЕРНЫЙ ФИКС 2: Убрали spring, поставили премиальную кинематику ease-out
                            initial={{ scale: 0.95, opacity: 0, y: 30 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 30 }}
                            transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <CloseButton onClick={closeModal}><FaTimes /></CloseButton>
                            <MobileDragHandle />

                            <ScrollableArea data-lenis-prevent="true">
                                {project.mediaType === 'none' ? (
                                    <ColoredHeader $bg={project.color}>{project.icon}</ColoredHeader>
                                ) : (
                                    <ModalImage>
                                        {project.mediaType === 'image' && project.image ? ( <img src={project.image} alt={project.title} /> ) : project.mediaType === 'video' && project.image ? ( <video autoPlay loop muted playsInline><source src={project.image} type="video/mp4" /></video> ) : null}
                                    </ModalImage>
                                )}

                                <ModalBody>
                                    <TitleRow>
                                        <ProjectTitle style={{ fontSize: '2rem', margin: 0 }}>
                                            {t(`projects.items.${project.id}.title`, project.title)}
                                        </ProjectTitle>
                                        {project.nda && <NdaBadge>{t('projects.modal.nda', 'NDA Protected')}</NdaBadge>}
                                    </TitleRow>

                                    <TechList style={{ marginBottom: '24px' }}>
                                        {project.tech.map((tech, j) => <TechTag key={j}>{tech}</TechTag>)}
                                    </TechList>

                                    <ProjectDescription style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                        {t(`projects.items.${project.id}.description`, project.description)}
                                    </ProjectDescription>

                                    {(project.challenges || project.hasChallenges || project.solutions || project.hasSolutions) && (
                                        <ArchBlock>
                                            {(project.challenges || project.hasChallenges) && (
                                                <div style={{ marginBottom: (project.solutions || project.hasSolutions) ? '20px' : '0' }}>
                                                    <ArchTitle><FaTools /> {t('projects.modal.archChallenges', 'Architectural Challenges')}</ArchTitle>
                                                    <ArchList>
                                                        {((t(`projects.items.${project.id}.challenges`, { returnObjects: true, defaultValue: project.challenges }) as string[]) || project.challenges || []).map((c, i) => <li key={i}>{c}</li>)}
                                                    </ArchList>
                                                </div>
                                            )}
                                            {(project.solutions || project.hasSolutions) && (
                                                <div>
                                                    <ArchTitle><FaLightbulb style={{ color: 'var(--accent-color)' }} /> {t('projects.modal.solutions', 'Solutions & Execution')}</ArchTitle>
                                                    <ArchList>
                                                        {((t(`projects.items.${project.id}.solutions`, { returnObjects: true, defaultValue: project.solutions }) as string[]) || project.solutions || []).map((s, i) => <li key={i}>{s}</li>)}
                                                    </ArchList>
                                                </div>
                                            )}
                                        </ArchBlock>
                                    )}

                                    {project.gallery && project.gallery.length > 0 && (
                                        <ProjectGallery>
                                            {project.gallery.map((img, idx) => ( <GalleryImage key={idx} src={img} alt={`Screenshot ${idx + 1}`} onClick={() => setLightboxIndex(idx)} /> ))}
                                        </ProjectGallery>
                                    )}

                                    <ModalLinks>
                                        {project.live && project.live !== '#' && (
                                            <LinkButton href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> {t('projects.modal.openLive', 'Open Live')}</LinkButton>
                                        )}
                                        {project.github && project.github !== '#' && (
                                            <LinkButton href={project.github} target="_blank" rel="noopener noreferrer" className="secondary"><FaGithub /> {t('projects.modal.sourceCode', 'Source Code')}</LinkButton>
                                        )}
                                    </ModalLinks>
                                </ModalBody>
                            </ScrollableArea>
                        </ModalContent>
                    </Backdrop>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {lightboxIndex !== null && project?.gallery && (
                    <LightboxBackdrop onClick={() => setLightboxIndex(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <LightboxContent
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        >
                            <LightboxClose onClick={() => setLightboxIndex(null)}><FaTimes /></LightboxClose>
                            {project.gallery.length > 1 && ( <> <LightboxPrev onClick={prevImage}><FaChevronLeft /></LightboxPrev> <LightboxNext onClick={nextImage}><FaChevronRight /></LightboxNext> </> )}

                            {/* ИНЖЕНЕРНЫЙ ФИКС 3: Убрали резкий выезд (x: 20). Сделали мягкий Crossfade (opacity + scale) */}
                            <motion.img
                                key={lightboxIndex}
                                src={project.gallery[lightboxIndex]}
                                alt="Full screen preview"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                            />
                        </LightboxContent>
                    </LightboxBackdrop>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;