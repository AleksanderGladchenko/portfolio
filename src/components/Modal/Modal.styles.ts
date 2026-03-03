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

/* СТИЛИ ДЛЯ ГАЛЕРЕИ ВНУТРИ МОДАЛКИ */
export const ProjectGallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 16px;
    margin-top: 32px;
    margin-bottom: 16px;
`;

export const GalleryImage = styled.img`
    width: 100%;
    height: 140px;
    object-fit: cover;
    border-radius: 16px;
    border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: zoom-in; /* Намек, что можно открыть (на будущее) */

    &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 12px 24px var(--shadow-color);
    }
`;

/* --- СТИЛИ ДЛЯ ПОЛНОЭКРАННОЙ ГАЛЕРЕИ (LIGHTBOX) --- */

export const LightboxBackdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    z-index: 9999; /* Поверх всего, даже основной модалки */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LightboxContent = styled(motion.div)`
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 12px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
        user-select: none; /* Чтобы не выделялась при кликах */
    }
`;

export const LightboxButton = styled.button`
    position: absolute;

    /* ИСПРАВЛЕНО: Адаптивный плотный фон и цвет иконки */
    background-color: var(--card-bg);
    color: var(--text-primary);
    border: 1px solid var(--border-color);

    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease;
    z-index: 10000;

    /* Жесткая тень, чтобы кнопка не сливалась с картинкой */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);

    &:hover {
        transform: scale(1.1);
        background-color: var(--border-color);
    }

    @media (max-width: 768px) {
        /* Делаем удобный размер для тапа пальцем на мобилке */
        width: 44px;
        height: 44px;
    }
`;

export const LightboxPrev = styled(LightboxButton)`
    left: -70px;
    @media (max-width: 1024px) { left: 16px; }
`;

export const LightboxNext = styled(LightboxButton)`
    right: -70px;
    @media (max-width: 1024px) { right: 16px; }
`;

export const LightboxClose = styled(LightboxButton)`
    top: -60px;
    right: -60px;
    /* На десктопе крестик чуть меньше стрелок, это нормально */
    width: 40px;    
    height: 40px;

    @media (max-width: 1024px) {
        top: 16px;
        right: 16px;
        /* А на мобилке уравниваем размеры для удобства */
        width: 44px;
        height: 44px;
    }
`;