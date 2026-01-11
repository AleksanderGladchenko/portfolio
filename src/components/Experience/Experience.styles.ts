import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ExperienceSection = styled(motion.section)`
    max-width: 1000px;
    margin: 0 auto;
    padding: 100px 24px;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 60px 16px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 60px;
    text-align: center;
    span { color: var(--text-secondary); }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 40px;
    }
`;

export const TimelineContainer = styled.div`
    position: relative;
    padding: 20px 0;
    &::after {
        content: ''; position: absolute; width: 2px;
        background: var(--border-color);
        top: 0; bottom: 0; left: 50%; margin-left: -1px;
    }

    /* АДАПТИВ ЛИНИИ */
    @media (max-width: 768px) {
        &::after { left: 20px; margin-left: 0; }
    }
`;

export const TimelineItem = styled(motion.div)`
    position: relative; width: 50%; padding: 10px 40px; box-sizing: border-box;

    &:nth-child(odd) { left: 0; text-align: right; .content-box { align-items: flex-end; } .date-badge { right: -60px; text-align: left; } }
    &:nth-child(even) { left: 50%; text-align: left; .content-box { align-items: flex-start; } .date-badge { left: -60px; text-align: right; } }

    &::after {
        content: ''; position: absolute; width: 14px; height: 14px; right: -7px;
        background-color: var(--card-bg);
        border: 3px solid var(--accent-color);
        top: 25px; border-radius: 50%; z-index: 2;
    }
    &:nth-child(even)::after { left: -7px; }

    /* МОБИЛЬНАЯ ВЕРСИЯ */
    @media (max-width: 768px) {
        width: 100%;
        padding-left: 50px; /* Отступ от линии */
        padding-right: 0;
        text-align: left !important;
        margin-bottom: 20px;

        &:nth-child(odd), &:nth-child(even) { left: 0; }
        &:nth-child(odd) .content-box, &:nth-child(even) .content-box { align-items: flex-start; }

        /* Точка переезжает влево */
        &::after { left: 14px !important; right: auto; }

        .date-badge { position: static; margin-bottom: 5px; text-align: left !important; }
    }
`;

export const ContentBox = styled.div`
    padding: 24px;
    background: var(--card-bg);
    border-radius: 20px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 20px var(--shadow-color);
    display: flex; flex-direction: column;

    @media (max-width: 768px) {
        padding: 16px;
    }
`;

export const DateText = styled.span`
    display: inline-block; font-size: 0.8rem; font-weight: 700;
    text-transform: uppercase; color: var(--accent-color); margin-bottom: 8px;
`;
export const RoleTitle = styled.h3`
    font-size: 1.3rem; font-weight: 600; color: var(--text-primary); margin: 0 0 4px 0;
    @media (max-width: 768px) { font-size: 1.1rem; }
`;
export const CompanyName = styled.h4`
    font-size: 1rem; font-weight: 500; color: var(--text-secondary); margin: 0 0 16px 0;
`;
export const DescriptionList = styled.ul`
    list-style: none; padding: 0; margin: 0; text-align: left;
`;
export const DescriptionItem = styled.li`
    position: relative; padding-left: 16px; margin-bottom: 8px;
    color: var(--text-secondary); font-size: 0.95rem; line-height: 1.5;
    &::before { content: '•'; position: absolute; left: 0; color: var(--accent-color); }
`;