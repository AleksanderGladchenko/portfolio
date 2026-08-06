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
    transition: text-shadow 0.3s ease, color 0.3s ease;
    
    &:hover {
        color: var(--accent-color);
        text-shadow: 0 0 15px var(--accent-glow);
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
    top: 80px;
    left: 0;
    right: 0;
    margin: 0 auto;
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
    z-index: 9999;

    a {
        color: var(--text-primary) !important;
        text-decoration: none !important;
        font-size: 1.1rem;
        font-weight: 600;
        display: block;
        padding: 10px;
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