import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 90%;
    max-width: 1200px;
    height: 60px;
    /* Эффект матового стекла */
    background-color: rgba(10, 10, 10, 0.75);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-radius: 980px; /* Форма пилюли */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 1000;
    border: 1px solid rgba(255, 255, 255, 0.08); /* Мягкая граница */
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        width: 92%;
        padding: 0 20px;
        top: 15px; /* Отступ от верхнего края, чтобы контент обтекал хедер */
        height: 55px;
    }
`;

export const Logo = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    cursor: pointer;
    transition: text-shadow 0.3s ease, color 0.3s ease;

    &:hover {
        color: var(--accent-color);
        text-shadow: 0 0 15px rgba(234, 88, 12, 0.4);
    }
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 30px;

    a {
        color: var(--text-primary) !important;
        text-decoration: none !important;
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLinkStyled = styled.a`
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    opacity: 0.7;
    position: relative;

    &:hover, &.active {
        opacity: 1;
        color: var(--accent-color) !important;
    }

    /* Возвращаем аккуратную точку индикатора */
    &.active::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        background-color: var(--accent-color);
        border-radius: 50%;
        box-shadow: 0 0 8px var(--accent-color);
    }
`;

export const BurgerIcon = styled.div`
    display: none;
    font-size: 1.5rem;
    color: var(--text-primary);
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover { color: var(--accent-color); }

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

export const MobileNav = styled(motion.div)`
    position: fixed;
    top: 85px; /* Аккуратно зависает под хедером, не прилипая к нему */
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 92%;
    background-color: rgba(10, 10, 10, 0.85);
    padding: 24px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.8);
    z-index: 9999;

    a {
        color: var(--text-primary) !important;
        text-decoration: none !important;
        font-size: 1.1rem;
        font-weight: 600;
        display: block;
        padding: 12px;
        text-align: center;
        border-radius: 12px;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    a:active, a.active {
        background: rgba(234, 88, 12, 0.1);
        color: var(--accent-color) !important;
    }

    @media (min-width: 769px) {
        display: none;
    }
`;