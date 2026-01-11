import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeaderContainer = styled.header`
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 50px;
    padding: 0 8px 0 24px;
    border-radius: 100px;
    background-color: var(--nav-bg);
    backdrop-filter: saturate(180%) blur(20px);
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    border: 1px solid var(--border-color);
    box-shadow: 0 10px 40px var(--shadow-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    transition: all 0.3s ease;

    @media (max-width: 768px) {
        top: 10px; width: 90%; padding: 0 16px;
    }
`;

export const Logo = styled.div`
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--text-primary);
    cursor: pointer;
    margin-right: 30px;
`;

export const NavLinks = styled.nav`
    display: flex;
    align-items: center;
    gap: 4px;

    /* ХАК: Принудительно задаем курсор для всех ссылок внутри */
    & > * {
        cursor: pointer !important;
    }

    @media (max-width: 768px) { display: none; }
`;

export const NavLinkStyled = styled.a`
    color: var(--text-secondary) !important;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    padding: 8px 16px;
    border-radius: 20px;
    transition: all 0.2s ease;
    cursor: pointer !important; /* Еще раз дублируем */
    position: relative;
    user-select: none;

    &:hover {
        color: var(--text-primary) !important;
        background-color: var(--border-color);
    }

    &.active {
        color: var(--text-primary) !important;
        background-color: var(--card-bg);
        box-shadow: 0 2px 10px var(--shadow-color);
    }
`;

export const ThemeButton = styled.button`
    background: transparent;
    border: none;
    color: var(--text-primary);
    font-size: 1rem;
    cursor: pointer !important;
    padding: 8px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: transform 0.2s;
    margin-left: 8px;

    &:hover {
        transform: scale(1.1);
        background-color: var(--border-color);
    }
`;

export const BurgerIcon = styled.div`
    display: none; font-size: 1.2rem; color: var(--text-primary); cursor: pointer; margin-left: auto;
    @media (max-width: 768px) { display: block; }
`;

export const MobileNav = styled(motion.div)`
    position: fixed; top: 70px; left: 50%; transform: translateX(-50%) !important;
    width: 90%; border-radius: 24px; background-color: var(--nav-bg);
    backdrop-filter: blur(20px); border: 1px solid var(--border-color);
    z-index: 9998; display: flex; flex-direction: column; padding: 20px; gap: 10px;

    .mobile-link {
        color: var(--text-primary);
        font-size: 16px; font-weight: 500; padding: 12px; text-align: center; border-radius: 12px; cursor: pointer;
        &:active { background-color: var(--border-color); }
    }
`;