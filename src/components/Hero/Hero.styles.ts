import styled from 'styled-components';
import { motion } from 'framer-motion';

/* 1. Сначала создаем обычные стилизованные компоненты */

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding-top: 60px;
    position: relative;
`;

const SubtitleStyled = styled.h2`
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

const TitleStyled = styled.h1`
    font-size: 5rem;
    line-height: 1.1;
    font-weight: 700;
    background: linear-gradient(135deg, var(--text-primary) 0%, var(--text-secondary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 24px;
    letter-spacing: -0.03em;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
`;

const DescriptionStyled = styled.p`
    font-size: 1.5rem;
    color: var(--text-secondary);
    max-width: 700px;
    line-height: 1.5;
    font-weight: 400;

    @media (max-width: 768px) {
        font-size: 1.1rem;
        max-width: 90%;
    }
`;

const CtaButtonStyled = styled.a`
    margin-top: 3rem;
    padding: 14px 32px;
    background-color: var(--text-primary);
    color: var(--bg-color);
    border-radius: 980px;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    transition: transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
    box-shadow: 0 0 30px var(--shadow-color);
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
    }

    &:active {
        transform: scale(0.95);
    }
`;

/* 2. Теперь превращаем их в Motion-компоненты и экспортируем */
/* Этот способ точно говорит TypeScript, что компоненты анимированные */

export const Subtitle = motion(SubtitleStyled);
export const Title = motion(TitleStyled);
export const Description = motion(DescriptionStyled);
export const CtaButton = motion(CtaButtonStyled);