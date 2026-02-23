import { HeroContainer, Title, Subtitle, Description, CtaButton } from './Hero.styles';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        filter: 'blur(10px)'
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1,
            ease: "easeInOut",
        }
    }
};

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
                    Strong Full-Stack Developer & Technical Architect
                </Subtitle>

                <Title variants={itemVariants}>
                    Alexander.
                </Title>

                <Description variants={itemVariants}>
                    <div>
                        I specialize in engineering high-performance web applications and complex
                        automated systems. With a <strong>focus on scalable architecture</strong>,
                        I transform sophisticated business logic into seamless user experiences.
                    </div>
                    <ul>
                        <li><strong>Core:</strong> React, TypeScript, Angular, Node.js</li>
                        <li><strong>System:</strong> Database Design, API Architectures, Cron Jobs</li>
                        <li><strong>FinTech:</strong> Monobank / Stripe API Integrations</li>
                        <li><strong>Infrastructure:</strong> Linux (SSH/Bash), Nginx, CI/CD</li>
                    </ul>
                </Description>

                <CtaButton
                    href="#projects"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Explore My Projects
                </CtaButton>
            </motion.div>
        </HeroContainer>
    );
};

export default Hero;