// src/components/Contact/Contact.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContactSection = styled(motion.section)`
    width: 100%;
    padding: 100px 0;
    background-color: #0a192f;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 768px) {
        padding: 80px 1rem;
    }
`;

export const Title = styled.h3`
    font-size: 3rem;
    color: #ccd6f6;
    margin: 0 0 1rem;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`;

export const Text = styled.p`
    color: #8892b0;
    line-height: 1.6;
    margin-bottom: 3rem;
    max-width: 470px;
`;

// Базовая кнопка (для Email)
export const EmailLink = styled(motion.a)`
    display: inline-flex; // Используем flex для идеального выравнивания иконки
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    border: 1px solid #00aaff;
    border-radius: 4px;
    color: #00aaff;
    text-decoration: none;
    font-size: 1rem;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    transition: all 0.3s ease;
    outline: none; // Убирает стандартную синюю обводку браузера при нажатии

    &:hover {
        background-color: rgba(0, 170, 255, 0.1);
    }
`;

// Новая кнопка специально для Telegram (наследует базу, но меняет цвета)
export const TelegramLink = styled(EmailLink)`
    border-color: #64ffda;
    color: #64ffda;

    &:hover {
        background-color: rgba(100, 255, 218, 0.1);
    }
`;