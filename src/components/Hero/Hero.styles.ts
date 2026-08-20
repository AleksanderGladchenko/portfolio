import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContentWrapper = styled(motion.div)`
    position: relative;
    z-index: 2;
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
`;

const SubtitleStyled = styled.h2`
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--accent-color);
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) { font-size: 0.9rem; }
`;

const TitleStyled = styled.h1`
    font-size: 5.5rem;
    line-height: 1.1;
    font-weight: 700;
    /* Строгий металлический градиент текста вместо простого белого */
    background: linear-gradient(180deg, #ffffff 0%, #a1a1aa 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1.5rem;
    letter-spacing: -0.04em;
    /* Убрали оранжевый text-shadow, оставили едва заметную черную тень для четкости */
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) { font-size: 3.5rem; }
`;

const DescriptionStyled = styled.p`
    font-size: 1.3rem;
    color: var(--text-secondary);
    max-width: 750px;
    line-height: 1.6;
    font-weight: 400;
    text-align: center;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) { font-size: 1.1rem; }
`;

const SkillsWrapperStyled = styled.div`
    display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 3.5rem; max-width: 800px;
`;

const SkillPillStyled = styled.div`
    display: inline-flex; align-items: center; justify-content: center;
    background: var(--card-bg);
    backdrop-filter: blur(10px); border: 1px solid var(--border-color);
    padding: 10px 20px; border-radius: 50px; font-size: 0.95rem; font-weight: 500;
    color: var(--text-primary); transition: all 0.2s ease; cursor: pointer;

    &:hover {
        transform: translateY(-2px);
        background: rgba(234, 88, 12, 0.1);
        border-color: var(--accent-color);
        box-shadow: 0 4px 20px var(--accent-glow);
    }
`;

const ButtonGroupStyled = styled.div`
    display: flex; gap: 16px; flex-wrap: wrap; justify-content: center;
`;

const CtaButtonStyled = styled.a`
    display: inline-flex; align-items: center; justify-content: center;
    padding: 16px 40px; background-color: var(--accent-color);
    color: #ffffff; border-radius: 980px; font-size: 1.1rem; font-weight: 600;
    text-decoration: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 30px var(--accent-glow);

    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 15px 40px rgba(234, 88, 12, 0.6);
    }
`;

const SecondaryCtaButtonStyled = styled.a`
    display: inline-flex; align-items: center; justify-content: center;
    padding: 14px 32px; font-size: 1.1rem; font-weight: 600;
    color: var(--text-secondary); /* Сделали более приглушенной */
    background-color: rgba(255, 255, 255, 0.02); /* Чуть заметный фон */
    border: 1px solid var(--border-color);
    border-radius: 50px;
    text-decoration: none; transition: all 0.3s ease; cursor: pointer;
    backdrop-filter: blur(5px);

    &:hover {
        color: var(--text-primary);
        border-color: rgba(255, 255, 255, 0.2);
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