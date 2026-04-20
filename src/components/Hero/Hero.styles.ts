import styled from 'styled-components';
import { motion } from 'framer-motion';

/* --- СЛОИ ДЛЯ ВИДЕО И ПАРАЛЛАКСА --- */
export const VideoContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%; /* С запасом для параллакс-скролла */
    z-index: 0;
    overflow: hidden;
    pointer-events: none;
`;

/* Градиент, который плавно сводит видео в цвет фона сайта снизу */
export const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
            to bottom,
            rgba(5, 5, 5, 0.3) 0%,
            rgba(5, 5, 5, 0.8) 70%,
            var(--bg-color) 100%
    );
    z-index: 1;
`;

export const ContentWrapper = styled(motion.div)`
    position: relative;
    z-index: 2; /* Текст строго поверх оверлея */
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 900px;
    width: 100%;
`;

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding: 100px 20px 60px;
    position: relative;
    overflow: hidden; /* Обрезаем вылезающее видео */
`;

const SubtitleStyled = styled.h2`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;

const TitleStyled = styled.h1`
    font-size: 5.5rem;
    line-height: 1.1;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    letter-spacing: -0.04em;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);

    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
`;

const DescriptionStyled = styled.p`
    font-size: 1.3rem;
    color: var(--text-primary);
    opacity: 0.85;
    max-width: 750px;
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

const SkillsWrapperStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-bottom: 3.5rem;
    max-width: 800px;
`;

const SkillPillStyled = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    background: rgba(28, 28, 30, 0.6); /* Полупрозрачный фон для pill-ов поверх видео */
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
    box-shadow: 0 4px 15px var(--shadow-color);
    transition: transform 0.2s ease, background 0.2s ease;

    cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        background: rgba(255, 255, 255, 0.1);
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;
`;

const CtaButtonStyled = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px 40px;
    background-color: var(--text-primary);
    color: var(--bg-color);
    border-radius: 980px;
    font-size: 1.1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);

    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 40px rgba(255,255,255,0.2); /* Светлая тень для темного фона */
    }
`;

const SecondaryCtaButtonStyled = styled.a`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 14px 32px;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text-primary);
    background-color: transparent;
    border: 2px solid var(--border-color);
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    backdrop-filter: blur(5px);

    &:hover {
        border-color: var(--text-secondary);
        background-color: rgba(255, 255, 255, 0.05);
    }
`;

export const Subtitle = motion(SubtitleStyled);
export const Title = motion(TitleStyled);
export const Description = motion(DescriptionStyled);
export const SkillsWrapper = motion(SkillsWrapperStyled);
export const SkillPill = motion(SkillPillStyled);
export const ButtonGroup = motion(ButtonGroupStyled);
export const CtaButton = motion(CtaButtonStyled);
export const SecondaryCtaButton = motion(SecondaryCtaButtonStyled);