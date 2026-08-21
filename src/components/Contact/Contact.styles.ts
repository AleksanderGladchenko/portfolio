import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled(motion.section)`
    max-width: 1000px;
    margin: 60px auto 40px;
    padding: 80px 40px 40px;
    background-color: var(--card-bg);
    border-radius: 40px;
    border: 1px solid var(--border-color);
    box-shadow: 0 20px 60px var(--shadow-color);
    text-align: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 40px 20px 30px; /* Убрали жир */
        margin: 40px 0 20px; /* Убрали боковые отступы, пусть тянется */
        border-radius: 24px;
    }
`;

export const Title = styled.h2`
    font-size: 3rem; font-weight: 700; color: var(--text-primary);
    margin-bottom: 20px; letter-spacing: -0.02em;
    @media (max-width: 768px) { font-size: 2.2rem; }
`;

export const Subtitle = styled.p`
    font-size: 1.2rem; color: var(--text-secondary); max-width: 500px; margin: 0 auto 40px; line-height: 1.5;
`;

export const ButtonContainer = styled.div`
    display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-bottom: 60px;

    @media (max-width: 768px) {
        flex-direction: column; /* На телефоне кнопки должны быть в столбик 100% ширины */
        width: 100%;
        margin-bottom: 40px;
    }
`;

export const ContactButton = styled(motion.a)`
    /* Базовые стили не трогаем... */
    display: inline-flex; align-items: center; justify-content: center; gap: 10px; padding: 14px 28px;
    border-radius: 980px; font-size: 1rem; font-weight: 500; text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s, border-color 0.2s; cursor: pointer;

    @media (max-width: 768px) {
        width: 100%; /* Растягиваем кнопку на всю карточку */
        padding: 16px;
    }
`;

export const Footer = styled.footer`
    border-top: 1px solid var(--border-color); padding-top: 30px;
    color: var(--text-secondary); font-size: 0.85rem; display: flex; flex-direction: column; gap: 8px;
    div { display: inline-flex; align-items: center; justify-content: center; gap: 6px; transition: color 0.2s; cursor: pointer; }
    div:hover { color: var(--accent-color); }
`;