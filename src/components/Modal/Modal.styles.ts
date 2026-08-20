import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.8); backdrop-filter: blur(10px);
    z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;

    @media (max-width: 768px) {
        padding: 0;
        align-items: flex-end; /* На мобилках прижимаем к низу (Bottom Sheet) */
    }
`;

export const ModalContent = styled(motion.div)`
    position: relative;
    background: var(--bg-color);
    border-radius: 24px;
    width: 100%; max-width: 850px;
    max-height: 90vh;
    display: flex; flex-direction: column;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.9);
    border: 1px solid var(--border-color);
    overflow: hidden; /* ВАЖНО: Внешний контейнер больше не скроллится! */
    color: var(--text-primary);

    @media (max-width: 768px) {
        max-height: 90vh;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: none;
    }
`;

/* НОВЫЙ КОНТЕЙНЕР ДЛЯ СКРОЛЛА */
export const ScrollableArea = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch; /* Плавный скролл на iOS */

    &::-webkit-scrollbar { width: 6px; }
    &::-webkit-scrollbar-track { background: transparent; }
    &::-webkit-scrollbar-thumb { background-color: var(--text-secondary); border-radius: 4px; }
    &::-webkit-scrollbar-thumb:hover { background-color: var(--accent-color); }
`;

/* Визуальный индикатор для мобилок (полоска сверху) */
export const MobileDragHandle = styled.div`
    display: none;
    width: 40px;
    height: 4px;
    background: var(--text-secondary);
    border-radius: 4px;
    margin: 12px auto;
    opacity: 0.5;

    @media (max-width: 768px) { display: block; }
`;

/* Минималистичный премиальный крестик */
export const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 36px;
    height: 36px;
    background: rgba(0, 0, 0, 0.6) !important; /* Полупрозрачный фон */
    backdrop-filter: blur(10px);
    border: 1px solid var(--border-color);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 100; /* Поверх всего */
    box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    transition: all 0.2s ease;

    & > * {
        color: var(--text-secondary) !important;
        font-size: 16px;
        transition: color 0.2s ease;
    }

    &:hover {
        transform: scale(1.1);
        border-color: var(--accent-color);
    }
    
    &:hover > * {
        color: var(--accent-color) !important;
    }

    @media (max-width: 768px) {
        top: 12px; right: 16px; /* На мобилках чуть сдвигаем */
    }
`;

export const ModalImage = styled.div`
    width: 100%;
    video, img { width: 100%; max-height: 45vh; object-fit: cover; display: block; border-bottom: 1px solid var(--border-color); }
`;

export const ModalBody = styled.div`
    padding: 32px;
    p { color: var(--text-secondary) !important; }
    @media (max-width: 768px) { padding: 24px; }
`;

export const TitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
    flex-wrap: wrap;
`;

export const NdaBadge = styled.span`
    background: rgba(234, 88, 12, 0.1);
    color: var(--accent-color);
    border: 1px solid rgba(234, 88, 12, 0.3);
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
`;

export const ArchBlock = styled.div`
    margin-top: 24px;
    background: rgba(255, 255, 255, 0.03);
    border-left: 3px solid var(--accent-color);
    padding: 16px 20px;
    border-radius: 0 12px 12px 0;
`;

export const ArchTitle = styled.h4`
    font-size: 1rem;
    color: var(--text-primary);
    margin: 0 0 12px 0;
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const ArchList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        position: relative;
        padding-left: 16px;
        margin-bottom: 8px;
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.5;

        &::before {
            content: '▹';
            position: absolute;
            left: 0;
            color: var(--accent-color);
        }
    }
`;

export const ModalLinks = styled.div` display: flex; gap: 12px; margin-top: 24px; flex-wrap: wrap; `;

export const LinkButton = styled.a`
    display: inline-flex; align-items: center; gap: 8px; padding: 12px 20px;
    background: var(--accent-color); color: white; text-decoration: none; border-radius: 980px;
    font-size: 0.9rem; font-weight: 600; transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);

    &.secondary {
        background: transparent; color: var(--text-primary);
        border: 1px solid var(--border-color); box-shadow: none;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(234, 88, 12, 0.5);
    }
    &.secondary:hover {
        border-color: var(--accent-color);
        background: rgba(234, 88, 12, 0.05);
    }
`;

export const ProjectGallery = styled.div`
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 32px; margin-bottom: 16px;
`;

export const GalleryImage = styled.img`
    width: 100%; height: 140px; object-fit: cover; border-radius: 16px; border: 1px solid var(--border-color);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease; cursor: zoom-in;

    &:hover {
        transform: translateY(-4px) scale(1.02);
        box-shadow: 0 12px 24px var(--accent-glow);
        border-color: var(--accent-color);
    }
`;

export const LightboxBackdrop = styled(motion.div)`
    position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.9);
    backdrop-filter: blur(15px); -webkit-backdrop-filter: blur(15px); z-index: 9999; display: flex; justify-content: center; align-items: center;
`;

export const LightboxContent = styled(motion.div)`
    position: relative; max-width: 90vw; max-height: 90vh; display: flex; justify-content: center; align-items: center;
    img { max-width: 100%; max-height: 90vh; object-fit: contain; border-radius: 12px; box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8); user-select: none; }
`;

export const LightboxButton = styled.button`
    position: absolute; background-color: var(--card-bg); color: var(--text-primary); border: 1px solid var(--border-color);
    width: 50px; height: 50px; border-radius: 50%; display: flex; justify-content: center; align-items: center;
    font-size: 1.2rem; cursor: pointer; transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease; z-index: 10000;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);

    &:hover {
        transform: scale(1.1);
        background-color: var(--accent-color);
        border-color: var(--accent-color);
        color: #ffffff;
    }
    @media (max-width: 768px) { width: 44px; height: 44px; }
`;

export const LightboxPrev = styled(LightboxButton)` left: -70px; @media (max-width: 1024px) { left: 16px; } `;
export const LightboxNext = styled(LightboxButton)` right: -70px; @media (max-width: 1024px) { right: 16px; } `;
export const LightboxClose = styled(LightboxButton)` top: -60px; right: -60px; width: 40px; height: 40px; @media (max-width: 1024px) { top: 16px; right: 16px; width: 44px; height: 44px; } `;