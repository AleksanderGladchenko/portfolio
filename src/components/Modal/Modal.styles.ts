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
    background: #112240;
    padding: 2rem;
    border-radius: 8px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    border: 1px solid #00aaff;
`;

export const ModalImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 4px;
    margin-bottom: 1.5rem;
`;