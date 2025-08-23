// src/components/Header/Header.tsx
import { useState } from 'react';
import { HeaderContainer, Logo, NavLinks, NavLinkStyled, BurgerIcon, MobileNav } from './Header.styles';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { to: 'about', label: '01. Dossier' },
        { to: 'skills', label: '02. Arsenal' },
        { to: 'projects', label: '03. Hangar' },
        { to: 'contact', label: '04. Comms' },
    ];

    return (
        <>
            <HeaderContainer>
                <Logo>ALEXANDER</Logo>

                <NavLinks>
                    {navLinks.map(link => (
                        <Link key={link.to} to={link.to} smooth={true} duration={500} offset={-80} as={NavLinkStyled}>
                            {link.label}
                        </Link>
                    ))}
                </NavLinks>

                <BurgerIcon onClick={() => setMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </BurgerIcon>
            </HeaderContainer>

            <AnimatePresence>
                {isMenuOpen && (
                    <MobileNav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'tween', ease: 'easeInOut' }}
                    >
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="mobile-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </MobileNav>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;