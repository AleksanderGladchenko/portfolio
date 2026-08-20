import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FloatingButton = styled(motion.button)`
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 1000;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
    transition: border-color 0.3s ease;

    &:hover {
        border-color: var(--accent-color);
        color: var(--accent-color);
    }

    @media (max-width: 768px) {
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
    }
`;

export const ModalOverlay = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    z-index: 2000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const ModalContainer = styled(motion.div)`
    width: 100%;
    max-width: 500px;
    background: #0a0a0a;
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 32px;
    position: relative;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
`;

export const CloseIcon = styled.button`
    position: absolute;
    top: 24px;
    right: 24px;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 1.2rem;
    cursor: pointer;
    transition: color 0.2s;

    &:hover { color: var(--text-primary); }
`;

export const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 10px;

    svg { color: var(--accent-color); }
`;

export const Subtitle = styled.p`
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: 24px;
    line-height: 1.5;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const TextArea = styled.textarea`
    width: 100%;
    min-height: 120px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 16px;
    color: var(--text-primary);
    font-family: inherit;
    font-size: 0.95rem;
    resize: none;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
        border-color: var(--accent-color);
        background: rgba(255, 255, 255, 0.05);
    }

    &::placeholder { color: var(--text-secondary); }
`;

export const FileUploadWrapper = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100%;
    padding: 16px;
    background: rgba(255, 255, 255, 0.02);
    border: 1px dashed var(--border-color);
    border-radius: 12px;
    cursor: pointer;
    color: var(--text-secondary);
    font-size: 0.9rem;
    transition: all 0.3s;

    &:hover {
        border-color: var(--accent-color);
        color: var(--text-primary);
        background: rgba(234, 88, 12, 0.05);
    }

    input { display: none; }
    svg { font-size: 1.2rem; }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 16px;
    background: var(--accent-color);
    color: #fff;
    border: none;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 8px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:hover:not(:disabled) {
        filter: brightness(1.1);
        box-shadow: 0 4px 15px var(--accent-glow);
    }
`;

export const StatusMessage = styled.p<{ $isError?: boolean }>`
    text-align: center;
    font-size: 0.9rem;
    margin-top: 16px;
    color: ${({ $isError }) => ($isError ? '#ef4444' : '#10b981')};
`;