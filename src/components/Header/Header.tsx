import { useState } from 'react';
import { HeaderContainer, Logo, NavLinks, NavLinkStyled, BurgerIcon, MobileNav } from './Header.styles';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
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
                            href={`#${link.to}`}
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
                                href={`#${link.to}`}
                                smooth={true}
                                duration={700}
                                offset={-100}
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