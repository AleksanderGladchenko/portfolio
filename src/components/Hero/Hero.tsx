import { HeroContainer, Title, Subtitle, Description, CtaButton } from './Hero.styles';
// ВОТ ТУТ ГЛАВНОЕ ИСПРАВЛЕНИЕ: слово type
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
                    Hi, my name is
                </Subtitle>

                <Title variants={itemVariants}>
                    Alexander.
                </Title>

                <Description variants={itemVariants}>
                    I build impressive things for the web. I'm a Front-End Developer with
                    a unique background in engineering, specializing in creating
                    responsive, pixel-perfect user interfaces in Angular & React.
                </Description>

                <CtaButton
                    href="#projects"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Check out my work!
                </CtaButton>
            </motion.div>
        </HeroContainer>
    );
};

export default Hero;