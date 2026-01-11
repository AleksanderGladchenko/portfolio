import { AnimatePresence } from 'framer-motion';
import { Backdrop, ModalContent, ModalImage, CloseButton, ModalBody, ModalLinks, LinkButton } from './Modal.styles';
import { ProjectTitle, ProjectDescription, TechList, TechTag } from '../Projects/Projects.styles';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// 1. Обновляем интерфейс (копия из Projects.tsx)
interface Project {
    id: number;
    title: string;
    category: 'app' | 'cms' | 'automation';
    image: string | null;
    mediaType: 'video' | 'image' | 'none'; // Добавили 'none'
    description: string;
    tech: string[];
    github: string;
    live: string;
    icon?: React.ReactNode; // Новое поле
    color?: string; // Новое поле
}

interface ModalProps {
    project: Project | null;
    closeModal: () => void;
}

// Специальный компонент для заголовка в модалке без картинки
const ColoredHeader = styled.div<{ $bg?: string }>`
    width: 100%;
    height: 200px;
    background: ${({ $bg }) => $bg || '#333'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5rem;
    color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid var(--border-color);
`;

const Modal = ({ project, closeModal }: ModalProps) => {
    return (
        <AnimatePresence>
            {project && (
                <Backdrop
                    onClick={closeModal}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <ModalContent
                        onClick={(e) => e.stopPropagation()}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <CloseButton onClick={closeModal}>
                            <FaTimes />
                        </CloseButton>

                        {/* ЛОГИКА ОТОБРАЖЕНИЯ МЕДИА */}
                        {project.mediaType === 'none' ? (
                            // Если нет картинки/видео — показываем цветной хедер с иконкой
                            <ColoredHeader $bg={project.color}>
                                {project.icon}
                            </ColoredHeader>
                        ) : (
                            <ModalImage>
                                {project.mediaType === 'image' && project.image ? (
                                    <img src={project.image} alt={project.title} />
                                ) : project.mediaType === 'video' && project.image ? (
                                    <video autoPlay loop muted playsInline>
                                        <source src={project.image} type="video/mp4" />
                                    </video>
                                ) : null}
                            </ModalImage>
                        )}

                        <ModalBody>
                            <ProjectTitle style={{ fontSize: '2rem', marginBottom: '16px' }}>
                                {project.title}
                            </ProjectTitle>

                            <TechList style={{ marginBottom: '24px' }}>
                                {project.tech.map((tech, j) => (
                                    <TechTag key={j}>{tech}</TechTag>
                                ))}
                            </TechList>

                            <ProjectDescription style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
                                {project.description}
                            </ProjectDescription>

                            <ModalLinks>
                                {project.live && project.live !== '#' && (
                                    <LinkButton href={project.live} target="_blank" rel="noopener noreferrer">
                                        <FaExternalLinkAlt /> Open Live
                                    </LinkButton>
                                )}

                                {project.github && project.github !== '#' && (
                                    <LinkButton href={project.github} target="_blank" rel="noopener noreferrer" className="secondary">
                                        <FaGithub /> Source Code
                                    </LinkButton>
                                )}
                            </ModalLinks>
                        </ModalBody>
                    </ModalContent>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;