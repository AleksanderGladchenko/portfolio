import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ProjectsSection = styled(motion.section)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 24px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 80px 16px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: -0.02em;

  span {
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

/* НОВЫЙ БЛОК: ФИЛЬТРЫ (Segmented Control) */
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
  background: ${({ $active }) => ($active ? 'var(--text-primary)' : 'transparent')};
  color: ${({ $active }) => ($active ? 'var(--bg-color)' : 'var(--text-secondary)')};
  border: none;
  padding: 8px 20px;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ $active }) => ($active ? 'var(--bg-color)' : 'var(--text-primary)')};
  }
`;

export const ProjectsGrid = styled(motion.div)`
  display: grid;
  /* Используем minmax, чтобы карточки не сжимались в точку */
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  width: 100%;

  /* ЖЕСТКАЯ ФИКСАЦИЯ, чтобы не прыгало */
  min-height: 600px; /* Резервируем место под проекты */
  align-content: start; /* Карточки всегда сверху */

  /* Исправление бага "поплывшей" ширины */
  box-sizing: border-box;
`;

/* ... остальной код выше ... */

export const ProjectCard = styled(motion.div)`
  background-color: var(--card-bg);
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  aspect-ratio: 4/3;
  cursor: pointer;
  border: 1px solid var(--border-color);
  box-shadow: 0 10px 30px var(--shadow-color);

  /* ВАЖНО: */
  transform-origin: center;

  /* --- ОПТИМИЗАЦИЯ ДЛЯ SAFARI (Лечим тормоза) --- */
  will-change: transform, opacity; /* Говорим браузеру заранее готовиться к анимации */
  transform: translateZ(0); /* Включаем 3D-ускорение */
  -webkit-transform: translateZ(0);
  backface-visibility: hidden; /* Убираем мерцание */
  -webkit-backface-visibility: hidden;
  /* ----------------------------------------------- */

  transition: box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease;

  &:hover {
    box-shadow: 0 20px 50px var(--shadow-color);
    transform: translateY(-5px) translateZ(0); /* Сохраняем translateZ при ховере */
    z-index: 2;
  }
`;

/* ... остальной код ниже ... */

export const MediaContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const ProjectImage = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  transition: transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

/* ЗАГЛУШКА ДЛЯ ПРОЕКТОВ БЕЗ КАРТИНКИ */
export const NoImagePlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Иконка в центре */
  .icon-wrapper {
    font-size: 4rem;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
    transform: translateY(-20px); /* Чуть выше центра, чтобы текст влез */
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover .icon-wrapper {
    transform: translateY(-25px) scale(1.1);
  }
`;

export const ProjectContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  padding: 16px 20px;

  background-color: var(--glass-panel);
  backdrop-filter: blur(25px) saturate(180%);
  -webkit-backdrop-filter: blur(25px) saturate(180%);

  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
`;

export const ProjectTitle = styled.h3`
  margin: 0 0 4px;
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-primary);
  letter-spacing: -0.01em;
`;

export const ProjectDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.85rem;
  line-height: 1.4;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TechTag = styled.span`
  background: rgba(128, 128, 128, 0.2); 
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--text-primary);
`;