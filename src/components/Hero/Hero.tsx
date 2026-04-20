import { HeroContainer, Title, Subtitle, Description, SkillsWrapper, SkillPill, ButtonGroup, CtaButton, SecondaryCtaButton, ContentWrapper } from './Hero.styles';
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';

const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.15 } }
};

const itemVariants: any = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: "easeOut" } }
};

const skills = [
    { name: "React & UI/UX", filter: "app" },
    { name: "Telegram Web Apps", filter: "app" },
    { name: "Node.js & APIs", filter: "ecommerce" },
    { name: "Shopify & CMS", filter: "ecommerce" },
    { name: "Python Automation", filter: "automation" }
];

const Hero = () => {
    const handleTagClick = (filterCategory: string) => {
        window.dispatchEvent(new CustomEvent('setProjectFilter', { detail: filterCategory }));
    };

    return (
        <HeroContainer>
            <ContentWrapper
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Subtitle variants={itemVariants}>
                    Technical Architect & Full-Stack Engineer
                </Subtitle>

                <Title variants={itemVariants}>
                    Alexander.
                </Title>

                <Description variants={itemVariants}>
                    I specialize in engineering high-performance web applications, robust automated systems, and enterprise-grade Telegram Bots.
                    I bridge the gap between heavy backend architecture and pixel-perfect user interfaces.
                </Description>

                <SkillsWrapper variants={itemVariants}>
                    {skills.map((skill, index) => (
                        <Link
                            key={index}
                            to="projects"
                            href="#projects"
                            smooth={true}
                            duration={700}
                            offset={-100}
                            onClick={() => handleTagClick(skill.filter)}
                            style={{ textDecoration: 'none' }}
                        >
                            <SkillPill variants={itemVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                {skill.name}
                            </SkillPill>
                        </Link>
                    ))}
                </SkillsWrapper>

                <ButtonGroup variants={itemVariants}>
                    <CtaButton href="#projects" whileTap={{ scale: 0.95 }}>
                        Explore My Work
                    </CtaButton>

                    <SecondaryCtaButton
                        href="/portfolio/Alexander_Gladchenko_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload style={{ marginRight: '8px', fontSize: '0.9rem' }} /> Resume
                    </SecondaryCtaButton>
                </ButtonGroup>
            </ContentWrapper>
        </HeroContainer>
    );
};

export default Hero;