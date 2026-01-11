import { HeroContainer, Title, Subtitle, Description, CtaButton } from './Hero.styles';
import { motion } from 'framer-motion';

// Настройки анимации (Apple Style Easing)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            // Задержка перед стартом и интервал между появлением элементов
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30, // Элемент выезжает снизу (30px)
        filter: 'blur(10px)' // Добавляем легкий блюр при появлении для мягкости
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 1, // Длительность 1 секунда (медленно и плавно)
            ease: [0.25, 0.1, 0.25, 1], // Математическая кривая плавности (Cubic Bezier)
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
                    maxWidth: '900px' // Ограничиваем ширину контейнера
                }}
            >
                {/* 1. Приветствие */}
                <Subtitle variants={itemVariants}>
                    Hi, my name is
                </Subtitle>

                {/* 2. Имя (Градиент) */}
                <Title variants={itemVariants}>
                    Alexander.
                </Title>

                {/* 3. Описание */}
                <Description variants={itemVariants}>
                    I build impressive things for the web. I'm a Front-End Developer with
                    a unique background in engineering, specializing in creating
                    responsive, pixel-perfect user interfaces in Angular & React.
                </Description>

                {/* 4. Кнопка */}
                <CtaButton
                    href="#projects" // Ссылка на проекты
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