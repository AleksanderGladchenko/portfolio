import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceSection = styled(motion.section)`
    max-width: 700px;
    margin: 0 auto;
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
    }
`;

export const TabsContainer = styled.div`
    display: flex;
    min-height: 340px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const TabList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const TabButton = styled.button<{ $isActive: boolean }>`
    padding: 10px 20px;
    border: none;
    border-left: 2px solid #233554;
    background-color: transparent;
    color: ${({ $isActive }) => ($isActive ? '#00aaff' : '#8892b0')};
    cursor: pointer;
    font-size: 0.9rem;
    text-align: left;
    white-space: nowrap;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(0, 170, 255, 0.1);
        color: #00aaff;
    }
`;

export const TabContent = styled(motion.div)`
    padding: 10px 20px;
    color: #8892b0;

    h3 {
        color: #ccd6f6;
        font-size: 1.4rem;
        margin-top: 0;
    }

    p {
        font-size: 0.9rem;
        color: #a8b2d1;
    }

    ul {
        list-style: none;
        padding: 0;
        margin-top: 20px;

        li {
            position: relative;
            padding-left: 30px;
            margin-bottom: 10px;

            &::before {
                content: '▹';
                position: absolute;
                left: 0;
                color: #00aaff;
            }
        }
    }
`;