import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled(motion.section)`
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 24px 100px;
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 50px;
    text-align: center;

    span {
        color: var(--text-secondary);
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
    justify-content: center;
`;

export const CategoryCard = styled(motion.div)`
    background: var(--card-bg);
    border-radius: 28px;
    padding: 30px;
    border: 1px solid var(--border-color); /* Возвращаем строгую границу */
    box-shadow: 0 10px 30px var(--shadow-color); /* Базовая черная тень */
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: transform 0.3s ease, border-color 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        border-color: rgba(234, 88, 12, 0.4); /* Только цвет рамки */
        box-shadow: 0 15px 40px var(--shadow-color); /* Тень остается черной, просто становится чуть больше из-за поднятия */
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary);
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-color);

    svg {
        color: var(--accent-color);
        font-size: 1.4rem;
    }
`;

export const SkillsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
`;

export const SkillItem = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.85rem;
    font-weight: 500;
    color: var(--text-primary);

    background: rgba(255, 255, 255, 0.03); /* Очень легкая прозрачность вместо глухого цвета */
    border: 1px solid var(--border-color);
    padding: 8px 16px;
    border-radius: 50px;
    transition: all 0.2s ease;

    svg {
        font-size: 1.1rem;
        color: var(--text-secondary);
        transition: color 0.2s ease;
    }

    &:hover {
        transform: translateY(-2px);
        background: rgba(234, 88, 12, 0.1);
        border-color: var(--accent-color);
        box-shadow: 0 4px 10px rgba(234, 88, 12, 0.2);
        
        svg {
            color: var(--accent-color);
        }
    }
`;