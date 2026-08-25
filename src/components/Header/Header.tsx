import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { HeaderContainer, Logo, NavLinks, NavLinkStyled, BurgerIcon, MobileNav } from './Header.styles';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    // Проверяем, находимся ли мы на главной странице
    const isHomePage = location.pathname === '/';

    const handleLogoClick = () => {
        if (isHomePage) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    // Оставляем только безопасные секции
    const navLinks = [
        { to: 'about', label: t('header.about') },
        { to: 'skills', label: t('header.skills') },
        { to: 'projects', label: t('header.projects') },
        { to: 'experience', label: t('header.experience') },
    ];

    const renderNavItems = (isMobile: boolean) => (
        <>
            {navLinks.map(link => (
                isHomePage ? (
                    <ScrollLink
                        key={link.to}
                        to={link.to}
                        href={`#${link.to}`}
                        smooth={true}
                        duration={700}
                        offset={-100}
                        spy={true}
                        activeClass="active"
                        className={isMobile ? "mobile-link" : ""}
                        as={isMobile ? 'a' : NavLinkStyled}
                        onClick={() => isMobile && setMenuOpen(false)}
                    >
                        {link.label}
                    </ScrollLink>
                ) : (
                    <NavLinkStyled
                        key={link.to}
                        as={RouterLink}
                        to="/"
                        className={isMobile ? "mobile-link" : ""}
                        onClick={() => isMobile && setMenuOpen(false)}
                    >
                        {link.label}
                    </NavLinkStyled>
                )
            ))}

            {/* КНОПКА "CONTACT" ПОЛНОСТЬЮ УДАЛЕНА ИЗ UI */}
        </>
    );

    return (
        <>
            <HeaderContainer>
                <Logo onClick={handleLogoClick}>
                    Alexander
                </Logo>

                <NavLinks>
                    {renderNavItems(false)}
                    <LanguageSwitcher />
                </NavLinks>

                <BurgerIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </BurgerIcon>
            </HeaderContainer>

            <AnimatePresence>
                {isMenuOpen && (
                    <MobileNav
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderNavItems(true)}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <LanguageSwitcher />
                        </div>
                    </MobileNav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;