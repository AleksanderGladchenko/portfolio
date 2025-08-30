// src/components/Modal/Modal.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Backdrop = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2000;
`;

export const ModalContent = styled(motion.div)`
    position: relative;
    background: #112240;
    padding: 2.5rem; /* Немного увеличим внутренний отступ */
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid #00aaff;
    /* Убираем flex, чтобы контент не растягивался */
`;

export const ModalImage = styled.video`
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1.5rem;
`;

export const CloseButton = styled.button`
    position: absolute;
    /* Смещаем крестик ближе к углу */
    top: 15px;
    right: 15px;
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #ff6b6b;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 10;

    &:hover {
        transform: scale(1.2);
    }
`;