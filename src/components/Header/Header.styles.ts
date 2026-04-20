import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 20px;
    left: 0;
    right: 0;
    margin: 0 auto; /* Центрирование без конфликтов с анимацией */
    width: 90%;
    max-width: 1200px;
    height: 60px;
    background-color: var(--nav-bg);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border-radius: 980px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 1000;
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 30px var(--shadow-color);

    @media (max-width: 768px) {
        width: 95%;
        padding: 0 20px;
        top: 10px;
    }
`;

export const Logo = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    cursor: pointer;
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
    transition: opacity 0.2s ease;
    opacity: 0.8;

    &:hover, &.active {
        opacity: 1;
    }
`;

export const BurgerIcon = styled.div`
    display: none;
    font-size: 1.5rem;
    color: var(--text-primary);
    cursor: pointer;

    @media (max-width: 768px) {
        display: flex;
        align-items: center;
    }
`;

export const MobileNav = styled(motion.div)`
    position: fixed; /* Прибиваем к экрану, а не к документу */
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto; /* Центрируем жестко */
    width: 95%;
    background-color: var(--nav-bg);
    padding: 24px;
    border-radius: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid var(--border-color);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    box-shadow: 0 30px 60px var(--shadow-color);
    z-index: 9999; /* Жестко поверх всего сайта, чтобы тапы работали */

    a {
        color: var(--text-primary) !important;
        text-decoration: none !important;
        font-size: 1.1rem;
        font-weight: 600;
        display: block; /* Расширяем зону клика */
        padding: 10px;
        text-align: center;
        border-radius: 12px;
        transition: background 0.2s;
        cursor: pointer;
    }

    a:active {
        background: rgba(255, 255, 255, 0.1);
    }

    @media (min-width: 769px) {
        display: none;
    }
`;