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
    background: var(--card-bg); /* ВАЖНО: Фон пузыря */
    border-radius: 28px;
    padding: 30px;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 30px var(--shadow-color);
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: transform 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

export const CategoryHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--text-primary); /* Цвет заголовка */
    padding-bottom: 16px;
    border-bottom: 1px solid var(--border-color);

    svg {
        color: var(--accent-color);
        font-size: 1.4rem;
    }
`;

export const SkillsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.95rem;
    color: var(--text-secondary); /* Цвет текста */

    svg {
        font-size: 1.1rem;
        color: var(--text-secondary);
        min-width: 20px;
    }

    &:hover {
        color: var(--text-primary);
        svg {
            color: var(--accent-color);
        }
    }
`;