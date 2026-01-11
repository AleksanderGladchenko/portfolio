import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0, 0, 0, 0.6); backdrop-filter: blur(10px); /* Чуть меньше блюр для производительности */
    z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;

    @media (max-width: 768px) {
        padding: 0; /* На мобилке на весь экран */
        align-items: flex-end; /* Выезжает снизу или просто снизу */
    }
`;

export const ModalContent = styled(motion.div)`
    position: relative;
    background: var(--card-bg);
    border-radius: 24px;
    width: 100%; max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    box-shadow: 0 40px 80px var(--shadow-color);
    border: 1px solid var(--border-color);
    display: flex; flex-direction: column;
    color: var(--text-primary);

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background-color: var(--text-secondary); border-radius: 4px; }

    @media (max-width: 768px) {
        max-height: 85vh;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }
`;

export const ModalImage = styled.div`
    width: 100%;
    video, img { width: 100%; max-height: 40vh; object-fit: cover; display: block; border-bottom: 1px solid var(--border-color); }
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    background: #ffffff !important;
    border: none;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 20;
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);

    & > * {
        color: #000000 !important;
        fill: #000000 !important;
        font-size: 20px;
    }
`;

export const ModalBody = styled.div`
    padding: 32px;

    /* Исправляем цвет описания внутри модалки */
    p {
        color: var(--text-secondary) !important;
    }

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const ModalLinks = styled.div` display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; `;

export const LinkButton = styled.a`
    display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px;
    background: var(--accent-color); color: white; text-decoration: none; border-radius: 980px;
    font-size: 0.9rem; font-weight: 600;

    &.secondary { background: var(--bg-color); color: var(--text-primary); border: 1px solid var(--border-color); }
`;