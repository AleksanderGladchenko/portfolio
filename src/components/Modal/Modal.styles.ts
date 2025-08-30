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
    z-index: 2000;

    /* Эти три строчки вернут центрирование */
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled(motion.div)`
    position: relative;
    background: #112240;
    padding: 2.5rem;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid #00aaff;

    @media (orientation: landscape) and (max-height: 600px) {
        width: 90vw;
        max-width: 90vw;
        padding: 1.5rem;
    }
`;

export const ModalImage = styled.video`
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1.5rem;

    @media (orientation: landscape) and (max-height: 600px) {
        max-height: 50vh;
    }
`;

export const CloseButton = styled.button`
    position: fixed;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #ff6b6b;
    cursor: pointer;
    transition: transform 0.3s ease;
    z-index: 2010;

    &:hover {
        transform: scale(1.2);
    }
`;