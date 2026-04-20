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
    color: var(--text-primary);
    margin-bottom: 50px;
    text-align: center;
    letter-spacing: -0.01em;

    span {
        color: var(--text-secondary);
    }
`;

export const ProfileCard = styled.div`
    background-color: var(--card-bg);
    border-radius: 40px;
    padding: 40px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 40px;
    align-items: center;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 40px var(--shadow-color);
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
    color: var(--text-primary);
    letter-spacing: -0.02em;

    span {
        color: var(--accent-color);
    }
`;

export const Paragraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    font-weight: 400;
`;

export const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.05);
    }

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

/* --- СТИЛИ ДЛЯ ПАСХАЛКИ (EASTER EGG) --- */
export const EasterEggBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const RatVideoContainer = styled(motion.video)`
    max-width: 90vw;
    max-height: 80vh;
    width: auto;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
    border: 2px solid var(--accent-color);
    outline: none;
    backface-visibility: hidden;
    transform: translateZ(0);
    object-fit: contain;
    background-color: #000000;
`;

export const RatCloseHint = styled.p`
    color: #ffffff;
    margin-top: 20px;
    font-size: 1.1rem;
    font-weight: 500;
    cursor: pointer;
    opacity: 0.7;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 1;
    }

    @media (max-width: 768px) {
        font-size: 0.95rem;
    }
`;