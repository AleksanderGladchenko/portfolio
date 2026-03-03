import { HeroContainer, Title, Subtitle, Description, SkillsWrapper, SkillPill, CtaButton } from './Hero.styles';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.15 // Ускорили появление
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: 'blur(5px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

// Выносим навыки в массив для удобства
const skills = [
    "React & TypeScript",
    "Node.js & API Architecture",
    "Database Design",
    "FinTech Integrations",
    "CI/CD & DevOps",
    "System Monitoring"
];

const Hero = () => {
    return (
        <HeroContainer>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    maxWidth: '900px'
                }}
            >
                <Subtitle variants={itemVariants}>
                    Technical Architect & Full-Stack Engineer
                </Subtitle>

                <Title variants={itemVariants}>
                    Alexander.
                </Title>

                <Description variants={itemVariants}>
                    I specialize in engineering high-performance web applications and robust automated systems.
                    I bridge the gap between complex backend architecture and pixel-perfect user interfaces.
                </Description>

                {/* НОВЫЙ БЛОК НАВЫКОВ */}
                <SkillsWrapper variants={itemVariants}>
                    {skills.map((skill, index) => (
                        <SkillPill key={index} variants={itemVariants}>
                            {skill}
                        </SkillPill>
                    ))}
                </SkillsWrapper>

                <CtaButton
                    href="#projects"
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore My Work
                </CtaButton>
            </motion.div>
        </HeroContainer>
    );
};

export default Hero;