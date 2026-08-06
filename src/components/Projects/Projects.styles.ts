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
  font-size: 3rem; 
  font-weight: 700; 
  color: var(--text-primary);
  margin-bottom: 30px; 
  text-align: center; 
  letter-spacing: -0.02em;
  span { color: var(--text-secondary); }
  @media (max-width: 768px) { font-size: 2.2rem; }
`;

export const FilterContainer = styled.div`
  display: flex; 
  justify-content: center; 
  gap: 8px; 
  margin-bottom: 50px; 
  flex-wrap: wrap;
  background: var(--card-bg); 
  padding: 6px; 
  border-radius: 16px;
  border: 1px solid var(--border-color); 
  width: fit-content; 
  margin-left: auto;
  margin-right: auto;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) => ($active ? 'var(--accent-color)' : 'transparent')};
  color: ${({ $active }) => ($active ? '#fff' : 'var(--text-secondary)')};
  border: none; 
  padding: 8px 20px; 
  border-radius: 12px; 
  font-size: 0.9rem;
  font-weight: 600; 
  cursor: pointer; 
  transition: all 0.2s ease;
  box-shadow: ${({ $active }) => ($active ? '0 4px 15px var(--accent-glow)' : 'none')};
  &:hover { color: #fff; }
`;

/* Сбалансированная, предсказуемая сетка без ломающих верстку элементов */
export const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 24px; 
  width: 100%; 
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ProjectCard = styled(motion.div)`
  background-color: #0c0c0e;
  border-radius: 24px; 
  overflow: hidden;
  position: relative; 
  display: flex; 
  flex-direction: column; 
  cursor: pointer; 
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(234, 88, 12, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
    transform: translateY(-4px);
  }
`;

export const MediaContainer = styled.div`
  position: relative;
  width: 100%; 
  height: 220px; /* Фиксированная элегантная высота превью */
  overflow: hidden;
  background: #111;
  border-bottom: 1px solid var(--border-color);
`;

export const ProjectImage = styled.video`
  width: 100%; height: 100%; object-fit: cover; opacity: 0.9;
  transition: transform 0.5s cubic-bezier(0.25, 1, 0.25, 1);
  
  ${ProjectCard}:hover & { 
    transform: scale(1.04);
  }
`;

export const NoImagePlaceholder = styled.div`
  width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
  background: linear-gradient(135deg, #141416 0%, #0a0a0c 100%);
  .icon-wrapper {
    font-size: 3.5rem; 
    color: var(--accent-color);
    opacity: 0.8;
    transition: transform 0.3s ease;
  }
  ${ProjectCard}:hover .icon-wrapper { transform: scale(1.1); }
`;

export const ProjectContent = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
`;

export const ProjectTitle = styled.h3`
  margin: 0; 
  font-size: 1.25rem; 
  font-weight: 600; 
  color: var(--text-primary); 
  letter-spacing: -0.01em; 
  transition: color 0.2s ease;
  
  ${ProjectCard}:hover & {
    color: var(--accent-color);
  }
`;

export const ProjectDescription = styled.p`
  color: var(--text-secondary); 
  font-size: 0.9rem; 
  line-height: 1.5; 
  margin: 0;
  display: -webkit-box; 
  -webkit-line-clamp: 3; 
  -webkit-box-orient: vertical; 
  overflow: hidden;
`;

export const TechList = styled.div` 
  display: flex; 
  flex-wrap: wrap; 
  gap: 6px; 
  margin-top: auto; /* Прижимает теги к низу карточки для идеального выравнивания */
  padding-top: 12px;
`;

export const TechTag = styled.span`
  background: rgba(255, 255, 255, 0.03); 
  border: 1px solid var(--border-color);
  padding: 4px 10px; 
  border-radius: 6px; 
  font-size: 0.7rem; 
  font-weight: 500; 
  color: var(--text-secondary);
`;

export const GalleryBadge = styled.div`
  position: absolute; top: 12px; right: 12px; z-index: 10;
  background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(8px);
  color: var(--text-primary); border: 1px solid var(--border-color);
  padding: 4px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: 500;
  display: flex; align-items: center; gap: 6px; 
  pointer-events: none;
  svg { font-size: 0.85rem; color: var(--accent-color); }
`;