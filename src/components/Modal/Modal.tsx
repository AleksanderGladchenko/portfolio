import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Backdrop, ModalContent, ModalImage, CloseButton, ModalBody,
    ModalLinks, LinkButton, ProjectGallery, GalleryImage,
    LightboxBackdrop, LightboxContent, LightboxPrev, LightboxNext, LightboxClose,
    TitleRow, NdaBadge, ArchBlock, ArchTitle, ArchList
} from './Modal.styles';
import { ProjectTitle, ProjectDescription, TechList, TechTag } from '../Projects/Projects.styles';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaTools, FaLightbulb } from 'react-icons/fa';
import styled from 'styled-components';

export interface Project {
    id: number;
    title: string;
    category: 'app' | 'ecommerce' | 'automation';
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
}

interface ModalProps {
    project: Project | null;
    closeModal: () => void;
}

const ColoredHeader = styled.div<{ $bg?: string }>`
    width: 100%; height: 200px; background: ${({ $bg }) => $bg || '#333'};
    display: flex; align-items: center; justify-content: center; font-size: 5rem;
    color: rgba(255, 255, 255, 0.9); border-bottom: 1px solid var(--border-color);
`;

const Modal = ({ project, closeModal }: ModalProps) => {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    useEffect(() => {
        if (project) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'unset';
        return () => { document.body.style.overflow = 'unset'; };
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
                            initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <CloseButton onClick={closeModal}><FaTimes /></CloseButton>

                            {project.mediaType === 'none' ? (
                                <ColoredHeader $bg={project.color}>{project.icon}</ColoredHeader>
                            ) : (
                                <ModalImage>
                                    {project.mediaType === 'image' && project.image ? ( <img src={project.image} alt={project.title} /> ) : project.mediaType === 'video' && project.image ? ( <video autoPlay loop muted playsInline><source src={project.image} type="video/mp4" /></video> ) : null}
                                </ModalImage>
                            )}

                            <ModalBody>
                                <TitleRow>
                                    <ProjectTitle style={{ fontSize: '2rem', margin: 0 }}>{project.title}</ProjectTitle>
                                    {project.nda && <NdaBadge>NDA Protected</NdaBadge>}
                                </TitleRow>

                                <TechList style={{ marginBottom: '24px' }}>
                                    {project.tech.map((tech, j) => <TechTag key={j}>{tech}</TechTag>)}
                                </TechList>

                                <ProjectDescription style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                    {project.description}
                                </ProjectDescription>

                                {/* АРХИТЕКТУРНЫЙ БЛОК */}
                                {(project.challenges || project.solutions) && (
                                    <ArchBlock>
                                        {project.challenges && (
                                            <div style={{ marginBottom: project.solutions ? '20px' : '0' }}>
                                                <ArchTitle><FaTools /> Architectural Challenges</ArchTitle>
                                                <ArchList>{project.challenges.map((c, i) => <li key={i}>{c}</li>)}</ArchList>
                                            </div>
                                        )}
                                        {project.solutions && (
                                            <div>
                                                <ArchTitle><FaLightbulb style={{ color: '#ffcc00' }} /> Solutions & Execution</ArchTitle>
                                                <ArchList>{project.solutions.map((s, i) => <li key={i}>{s}</li>)}</ArchList>
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
                                        <LinkButton href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /> Open Live</LinkButton>
                                    )}
                                    {project.github && project.github !== '#' && (
                                        <LinkButton href={project.github} target="_blank" rel="noopener noreferrer" className="secondary"><FaGithub /> Source Code</LinkButton>
                                    )}
                                </ModalLinks>
                            </ModalBody>
                        </ModalContent>
                    </Backdrop>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {lightboxIndex !== null && project?.gallery && (
                    <LightboxBackdrop onClick={() => setLightboxIndex(null)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <LightboxContent onClick={(e) => e.stopPropagation()} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ type: "spring", damping: 25, stiffness: 300 }}>
                            <LightboxClose onClick={() => setLightboxIndex(null)}><FaTimes /></LightboxClose>
                            {project.gallery.length > 1 && ( <> <LightboxPrev onClick={prevImage}><FaChevronLeft /></LightboxPrev> <LightboxNext onClick={nextImage}><FaChevronRight /></LightboxNext> </> )}
                            <motion.img key={lightboxIndex} src={project.gallery[lightboxIndex]} alt="Full screen preview" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }} />
                        </LightboxContent>
                    </LightboxBackdrop>
                )}
            </AnimatePresence>
        </>
    );
};

export default Modal;