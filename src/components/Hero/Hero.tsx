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

// АКТУАЛИЗИРОВАННЫЕ ТЕГИ
const skills = [
    { name: "System Architecture", filter: "flagship" },
    { name: "High-Load Backend", filter: "tools" },
    { name: "Zero-Trust Security", filter: "ecommerce" },
    { name: "React Ecosystem", filter: "flagship" },
    { name: "DevOps & Automation", filter: "tools" }
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
                    Alexander — Technical Architect
                </Subtitle>

                <Title variants={itemVariants}>
                    Engineering robust web architecture.
                </Title>

                <Description variants={itemVariants}>
                    I build software that doesn't break under pressure. Moving from aviation engineering to full-stack development, I apply a zero-trust approach to architecture, automating infrastructure, and writing predictable, maintainable code.
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