// src/components/Header/Header.styles.ts
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
    width: 100%;
    padding: 1rem 2rem;
    background-color: rgba(10, 25, 47, 0.85);
    border-bottom: 1px solid #00aaff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1010; // Немного увеличим, чтобы был над всем контентом
    backdrop-filter: blur(10px);

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    color: #ccd6f6;
    text-shadow: 0 0 5px #00aaff;
    z-index: 10;

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const NavLinks = styled.nav`
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
        display: none;
    }
`;

export const NavLinkStyled = styled.a`
    color: #FFFFFF !important;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: none !important;
    transition: color 0.3s ease;
    cursor: pointer;

    &:hover {
        color: #00aaff !important;
    }
`;

export const BurgerIcon = styled.div`
    display: none;
    font-size: 1.5rem;
    color: #ccd6f6;
    cursor: pointer;
    z-index: 1020; // Выше чем меню, чтобы можно было закрыть

    @media (max-width: 768px) {
        display: block;
    }
`;

export const MobileNav = styled(motion.div)`
    position: fixed;
    top: 0;
    right: 0;
    width: min(75vw, 400px);
    height: 100vh;
    background-color: #112240;
    box-shadow: -10px 0px 30px -15px rgba(2, 12, 27, 0.7);
    z-index: 1000; // <-- ВОТ ГЛАВНЫЙ ФИКС!

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    .mobile-link {
        color: #ccd6f6;
        font-size: 1.2rem;
        font-family: 'SF Mono', 'Fira Code', monospace;
        cursor: pointer;
    }
`;