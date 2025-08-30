// src/components/Modal/Modal.tsx
import { AnimatePresence } from 'framer-motion';
import { Backdrop, ModalContent, ModalImage, CloseButton } from './Modal.styles';
import { ProjectContent, ProjectTitle, ProjectDescription, TechList, ProjectLinks, IconButton } from '../Projects/Projects.styles';
import { FaGithub, FaCompressAlt, FaTimes } from 'react-icons/fa';

// Интерфейс, описывающий, как выглядят данные одного проекта
interface Project {
    title: string;
    image: string; // Путь к видео
    description: string;
    tech: string[];
    github: string;
    live: string;
}

// Интерфейс для пропсов самого модального окна
interface ModalProps {
    project: Project | null;
    closeModal: () => void;
}

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
                        initial={{ y: "-50px", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "50px", opacity: 0 }}
                        transition={{ ease: "easeOut", duration: 0.3 }}
                    >
                        <CloseButton onClick={closeModal}>
                            <FaTimes />
                        </CloseButton>

                        <div style={{ flexGrow: 1 }}>
                            <ModalImage as="video" autoPlay loop muted playsInline>
                                <source src={project.image} type="video/mp4" />
                            </ModalImage>
                            <ProjectContent>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <TechList>
                                    {project.tech.map((tech, j) => <li key={j}>{tech}</li>)}
                                </TechList>
                            </ProjectContent>
                        </div>

                        <ProjectLinks>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <IconButton onClick={closeModal}>
                                <FaCompressAlt />
                            </IconButton>
                        </ProjectLinks>
                    </ModalContent>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;