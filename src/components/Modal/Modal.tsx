import { AnimatePresence } from 'framer-motion';
import { Backdrop, ModalContent, ModalImage } from './Modal.styles';
import { ProjectContent, ProjectTitle, ProjectDescription, TechList, ProjectLinks } from '../Projects/Projects.styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
    title: string;
    image: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
}

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
                        <ModalImage src={project.image} alt={project.title} />
                        <ProjectContent>
                            <ProjectTitle>{project.title}</ProjectTitle>
                            <ProjectDescription>{project.description}</ProjectDescription>
                            <TechList>
                                {project.tech.map((tech, j) => <li key={j}>{tech}</li>)}
                            </TechList>
                        </ProjectContent>
                        <ProjectLinks>
                            <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                        </ProjectLinks>
                    </ModalContent>
                </Backdrop>
            )}
        </AnimatePresence>
    );
};

export default Modal;