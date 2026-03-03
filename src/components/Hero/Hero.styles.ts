import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;
    padding: 100px 20px 60px;
    position: relative;
`;

const SubtitleStyled = styled.h2`
    font-size: 1.1rem;
    font-weight: 600;
    /* Используем акцентный цвет для привлечения внимания */
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
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.4); /* Тень отрывает текст от фона */

    @media (max-width: 768px) {
        font-size: 3.5rem;
    }
`;

const DescriptionStyled = styled.p`
    font-size: 1.3rem;
    /* Используем primary цвет с прозрачностью для идеальной читаемости */
    color: var(--text-primary);
    opacity: 0.85;
    max-width: 750px;
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.5rem;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 1.1rem;
    }
`;

/* --- НОВЫЙ БЛОК ДЛЯ СТЕКА (Skill Pills) --- */
const SkillsWrapperStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
    margin-bottom: 3.5rem;
    max-width: 800px;
`;

const SkillPillStyled = styled.span`
    /* ИСПРАВЛЕНО: Теперь фон адаптируется под тему */
    background: var(--card-bg);
    opacity: 0.9;
    border: 1px solid var(--border-color);
    padding: 10px 20px;
    border-radius: 50px;
    font-size: 0.95rem;
    font-weight: 500;
    color: var(--text-primary);
    box-shadow: 0 4px 15px var(--shadow-color);
    transition: transform 0.2s ease, background 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        background: var(--border-color);
    }
`;

const CtaButtonStyled = styled.a`
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
        box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }
`;

/* Оборачиваем в motion для анимаций */
export const Subtitle = motion(SubtitleStyled);
export const Title = motion(TitleStyled);
export const Description = motion(DescriptionStyled);
export const SkillsWrapper = motion(SkillsWrapperStyled);
export const SkillPill = motion(SkillPillStyled);
export const CtaButton = motion(CtaButtonStyled);