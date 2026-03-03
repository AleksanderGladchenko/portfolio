import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    AboutSection, SectionTitle, ProfileCard, TextContent, HighlightText,
    Paragraph, ImageContainer, ProfileImg,
    EasterEggBackdrop, RatVideoContainer, RatCloseHint
} from './About.styles';

import profileImage from '../../assets/135319167.jpeg';
import ratVideo from '../../assets/rat.mp4'; // Импортируем наше видео

const About = () => {
    // Состояние для отображения пасхалки
    const [showRat, setShowRat] = useState(false);

    return (
        <AboutSection
            id="about"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <SectionTitle>About <span>Me</span></SectionTitle>

            <ProfileCard>
                <TextContent>
                    <HighlightText>
                        Inspired by engineering.<br />
                        Perfected by <span>Code</span>.
                    </HighlightText>

                    <Paragraph>
                        I'm Alexander, a Full-Stack Software Engineer with a background in Aviation & Rocketry. This foundational engineering experience taught me to approach software not just as lines of code, but as complex, interconnected systems where reliability, optimization, and fault tolerance are critical.
                    </Paragraph>

                    <Paragraph>
                        Today, I design and build end-to-end web solutions. From architecting robust databases and custom API integrations (like Monobank/Stripe) to crafting pixel-perfect React interfaces, I handle the full development lifecycle. My focus is on delivering secure, scalable, and business-driven results that work flawlessly under the hood.
                    </Paragraph>
                </TextContent>

                {/* Навешиваем клик на фото */}
                <ImageContainer onClick={() => setShowRat(true)} title="Vibe Check">
                    <ProfileImg src={profileImage} alt="Alexander" />
                </ImageContainer>
            </ProfileCard>

            {/* --- СЕКРЕТНЫЙ РЕЖИМ С КРЫСОЙ --- */}
            <AnimatePresence>
                {showRat && (
                    <EasterEggBackdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowRat(false)} // Закрываем при клике на фон
                    >
                        <RatVideoContainer
                            src={ratVideo}
                            autoPlay // Сразу начинает играть
                            playsInline
                            loop // Зацикливаем видео
                            onClick={(e) => e.stopPropagation()} // Чтобы клик по видео не закрывал его
                        />
                        <RatCloseHint onClick={() => setShowRat(false)}>
                            Click anywhere to close
                        </RatCloseHint>
                    </EasterEggBackdrop>
                )}
            </AnimatePresence>
        </AboutSection>
    );
};

export default About;