import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled(motion.section)`
    max-width: 1000px;
    margin: 0 auto;
    padding: 120px 24px;
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-primary); /* Используем переменную */
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: -0.01em;

    span {
        color: var(--text-secondary); /* Используем переменную */
    }
`;

export const ProfileCard = styled.div`
    background-color: var(--card-bg); /* ВАЖНО: Цвет фона пузыря из темы */
    border-radius: 40px;
    padding: 40px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 40px;
    align-items: center;
    border: 1px solid var(--border-color); /* Бордер из темы */
    box-shadow: 0 20px 40px var(--shadow-color); /* Тень из темы */
    margin: 0 auto;

    @media (max-width: 850px) {
        grid-template-columns: 1fr;
        padding: 30px;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const HighlightText = styled.h3`
    font-size: 1.8rem;
    line-height: 1.3;
    font-weight: 600;
    color: var(--text-primary); /* Цвет текста из темы */
    letter-spacing: -0.02em;

    span {
        color: var(--accent-color);
    }
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary); /* Вторичный текст из темы */
    font-weight: 400;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;

    &::after {
        content: '';
        display: block;
        padding-bottom: 100%;
    }
`;

export const ProfileImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 40px var(--shadow-color);
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
    }
`;