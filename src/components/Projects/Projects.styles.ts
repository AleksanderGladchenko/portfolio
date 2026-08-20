import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled(motion.section)`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 24px;
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) { padding: 80px 16px; }
`;

export const SectionTitle = styled.h2`
    font-size: 3rem; font-weight: 700; color: var(--text-primary);
    margin-bottom: 40px; text-align: center; letter-spacing: -0.02em;
    span { color: var(--text-secondary); }
    @media (max-width: 768px) { font-size: 2.2rem; }
`;

/* ПРЕМИАЛЬНЫЕ ВКЛАДКИ (Segmented Control) */
export const TabsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin: 0 auto 50px;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.03);
    padding: 6px;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    width: fit-content;
`;

export const TabButton = styled.button<{ $active: boolean }>`
    background: ${({ $active }) => ($active ? 'rgba(234, 88, 12, 0.1)' : 'transparent')};
    border: 1px solid ${({ $active }) => ($active ? 'var(--accent-color)' : 'transparent')};
    color: ${({ $active }) => ($active ? 'var(--text-primary)' : 'var(--text-secondary)')};
    padding: 10px 24px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: ${({ $active }) => ($active ? '0 4px 15px rgba(234, 88, 12, 0.2)' : 'none')};

    &:hover { color: var(--text-primary); }
`;

export const ProjectsGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
    width: 100%;
    min-height: 600px; /* Удерживаем высоту, чтобы футер не прыгал при фильтрации */
    align-content: start;
    box-sizing: border-box;
`;

export const ProjectCard = styled(motion.div)`
    background-color: #080808;
    border-radius: 24px;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 30px rgba(0,0,0,0.8);
    transform-origin: center;
    transform: translateZ(0); -webkit-transform: translateZ(0);
    backface-visibility: hidden; -webkit-backface-visibility: hidden;
    transition: box-shadow 0.4s ease, transform 0.4s ease, border-color 0.4s ease;

    &:hover {
        box-shadow: 0 20px 50px var(--accent-glow);
        border-color: rgba(234, 88, 12, 0.4);
        transform: translateY(-8px) translateZ(0);
        z-index: 2;
    }
`;

export const MediaContainer = styled.div`
    position: relative;
    width: 100%;
    height: 220px;
    overflow: hidden;
    border-bottom: 1px solid var(--border-color);
`;

export const ProjectImage = styled.video`
    width: 100%; height: 100%; object-fit: cover; opacity: 0.85;
    transform: translateZ(0); -webkit-transform: translateZ(0); pointer-events: none;
    transition: transform 0.7s cubic-bezier(0.25, 1, 0.25, 1), opacity 0.4s ease;

    ${ProjectCard}:hover & {
        transform: scale(1.08) translateZ(0);
        opacity: 1;
    }
`;

export const NoImagePlaceholder = styled.div`
    width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
    background-color: #111;
    .icon-wrapper {
        font-size: 3.5rem; color: rgba(255, 255, 255, 0.4);
        transition: transform 0.4s ease, color 0.4s ease;
    }
    ${ProjectCard}:hover .icon-wrapper { transform: scale(1.1); color: var(--accent-color); }
`;

export const ProjectContent = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: transparent;
`;

export const ProjectTitle = styled.h3`
    margin: 0 0 8px; font-size: 1.4rem; font-weight: 700; color: var(--text-primary);
    letter-spacing: -0.01em; transition: color 0.3s ease;

    ${ProjectCard}:hover & { color: var(--accent-color); }
`;

export const ProjectDescription = styled.p`
    color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5; margin-bottom: 24px;
    flex-grow: 1;
`;

export const TechList = styled.div`
    display: flex; flex-wrap: wrap; gap: 8px;
`;

export const TechTag = styled.span`
    background: rgba(234, 88, 12, 0.05);
    border: 1px solid rgba(234, 88, 12, 0.2);
    padding: 4px 10px; border-radius: 6px; font-size: 0.7rem; font-weight: 600;
    color: var(--accent-color); text-transform: uppercase; letter-spacing: 0.05em;
`;

export const GalleryBadge = styled.div`
    position: absolute; top: 12px; right: 12px; z-index: 10;
    background: rgba(10, 10, 10, 0.8); backdrop-filter: blur(8px);
    color: var(--text-primary); border: 1px solid var(--border-color);
    padding: 6px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 600;
    display: flex; align-items: center; gap: 6px;
    pointer-events: none;
    svg { font-size: 0.9rem; color: var(--accent-color); }
`;