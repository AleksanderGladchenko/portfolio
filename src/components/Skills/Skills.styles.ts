import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SkillsSection = styled(motion.section)`
    max-width: 800px;
    margin: 0 auto;
    padding: 100px 0;
    text-align: center;
`;

export const SectionTitle = styled.h2`
    font-size: 2rem;
    color: #ccd6f6;
    margin-bottom: 3rem;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
`;

export const SkillCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 1.5rem;
    background-color: #112240;
    border-radius: 4px;
    color: #8892b0;
    font-size: 1rem;
    transition: transform 0.3s, color 0.3s;

    &:hover {
        transform: translateY(-5px);
        color: #00aaff;
    }
`;

export const SkillIcon = styled.div`
    font-size: 3rem;
`;