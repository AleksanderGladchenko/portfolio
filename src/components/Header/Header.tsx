import { useState } from 'react';
import { HeaderContainer, Logo, NavLinks, NavLinkStyled, BurgerIcon, MobileNav, ThemeButton } from './Header.styles';
import { Link } from 'react-scroll';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

interface HeaderProps {
    toggleTheme: () => void;
    currentTheme: string;
}

const Header = ({ toggleTheme, currentTheme }: HeaderProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: 'about', label: 'About' },
        { to: 'skills', label: 'Skills' },
        { to: 'projects', label: 'Projects' },
        { to: 'experience', label: 'Experience' },
        { to: 'contact', label: 'Contact' },
    ];

    return (
        <>
            <HeaderContainer>
                <Logo onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    Alexander
                </Logo>

                <NavLinks>
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            smooth={true}
                            duration={700}
                            offset={-100}
                            spy={true}
                            activeClass="active"
                            as={NavLinkStyled}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Кнопка смены темы */}
                    <ThemeButton onClick={toggleTheme}>
                        {currentTheme === 'dark' ? <FaSun /> : <FaMoon />}
                    </ThemeButton>
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
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={700}
                                offset={-100}
                                className="mobile-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        {/* Кнопка смены темы для мобилки */}
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <ThemeButton onClick={() => { toggleTheme(); setMenuOpen(false); }} style={{ width: '100%' }}>
                                {currentTheme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            </ThemeButton>
                        </div>
                    </MobileNav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;