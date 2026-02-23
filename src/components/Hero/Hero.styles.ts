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
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
    letter-spacing: 0.05em;

    @media (max-width: 768px) {
        font-size: 1.1rem;
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
        font-size: 3.2rem;
    }
`;

// ИЗМЕНЕНО: Теперь это div, чтобы внутри могли быть списки
const DescriptionStyled = styled.div`
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 800px;
    line-height: 1.7;
    font-weight: 400;
    text-align: center;

    strong {
        color: var(--text-primary);
        font-weight: 600;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 25px 0;
        display: grid;
        grid-template-columns: 1fr 1fr; /* Две колонки для скиллов */
        gap: 12px 30px;
        text-align: left;
    }

    li {
        position: relative;
        padding-left: 20px;
        font-size: 1.05rem;
        &:before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--text-primary);
            font-weight: bold;
        }
    }

    @media (max-width: 768px) {
        font-size: 1.1rem;
        ul {
            grid-template-columns: 1fr;
            margin: 20px 0;
        }
    }
`;

const CtaButtonStyled = styled.a`
    margin-top: 2rem;
    padding: 16px 36px;
    background-color: var(--text-primary);
    color: var(--bg-color);
    border-radius: 980px;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 30px rgba(0,0,0,0.2);
        filter: brightness(1.1);
    }
`;

/* 2. Оборачиваем их в motion */
export const Subtitle = motion(SubtitleStyled);
export const Title = motion(TitleStyled);
export const Description = motion(DescriptionStyled);
export const CtaButton = motion(CtaButtonStyled);