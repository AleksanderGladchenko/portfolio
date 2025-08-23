import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AboutSection = styled(motion.section)`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: #ccd6f6;
    margin-bottom: 2rem;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }
`;

export const TextBlock = styled.div`
    color: #8892b0;
    font-size: 1.1rem;
    line-height: 1.6;

    p {
        margin: 0 0 15px 0;
    }
`;

export const SkillsList = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: 0.9rem;

    li {
        position: relative;
        margin-bottom: 10px;
        padding-left: 20px;
        &::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: #00aaff;
        }
    }
`;

export const ImageWrapper = styled.div`
    position: relative;
    max-width: 300px;

    img {
        width: 100%;
        height: auto;
        border-radius: 4px;
        filter: grayscale(100%) contrast(1);
        transition: filter 0.3s ease;
    }

    &:hover img {
        filter: none;
    }

    @media (max-width: 768px) {
        margin: 3rem auto 0;
    }
`;