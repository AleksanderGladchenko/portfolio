import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: calc(100vh - 100px);
`;

export const Subtitle = styled(motion.h2)`
    font-size: 1.2rem;
    color: #00aaff;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    margin-bottom: 1rem;
`;

export const Title = styled(motion.h1)`
    font-size: 4rem;
    color: #ccd6f6;
    margin: 0;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 3rem;
    }
    @media (max-width: 480px) {
        font-size: 2.5rem;
    }
`;

export const Description = styled(motion.p)`
    font-size: 1.2rem;
    color: #8892b0;
    max-width: 600px;
    line-height: 1.6;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

export const CtaButton = styled(motion.a)`
    display: inline-block;
    margin-top: 2rem;
    padding: 1rem 2rem;
    border: 1px solid #00aaff;
    border-radius: 4px;
    color: #00aaff;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(0, 170, 255, 0.1);
    }
`;