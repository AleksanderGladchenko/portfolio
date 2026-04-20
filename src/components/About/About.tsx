import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import {
    AboutSection, SectionTitle, ProfileCard, TextContent, HighlightText,
    Paragraph, ImageContainer, ProfileImg,
    EasterEggBackdrop, RatVideoContainer, RatCloseHint
} from './About.styles';

import profileImage from '../../assets/135319167.jpeg';
import ratVideo from '../../assets/rat.mp4';

const About = () => {
    const [showRat, setShowRat] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const closeRatMode = () => {
        setShowRat(false);
        setVideoLoaded(false);
    };

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
                        Eliminating system bottlenecks.<br />
                        Delivering <span>Scalable Architecture</span>.
                    </HighlightText>

                    <Paragraph>
                        I'm Alexander, a Full-Stack Software Engineer with a background in Aviation & Rocketry. This foundational engineering experience taught me to approach software not just as lines of code, but as complex, interconnected systems where reliability, optimization, and fault tolerance are critical.
                    </Paragraph>

                    {/* ОБНОВЛЕНО: Добавлены Telegram Web Apps */}
                    <Paragraph>
                        Today, I design and build end-to-end web solutions. From architecting robust databases, complex Telegram Web Apps (Python/Aiogram), and custom API integrations to crafting pixel-perfect React interfaces, I handle the full development lifecycle. My focus is on delivering secure, scalable, and business-driven results that work flawlessly under the hood.
                    </Paragraph>
                </TextContent>

                <ImageContainer onClick={() => setShowRat(true)} title="Vibe Check">
                    <ProfileImg src={profileImage} alt="Alexander" />
                </ImageContainer>
            </ProfileCard>

            <AnimatePresence>
                {showRat && (
                    <EasterEggBackdrop
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeRatMode}
                    >
                        <RatVideoContainer
                            src={ratVideo}
                            autoPlay
                            playsInline
                            loop
                            onClick={(e) => e.stopPropagation()}
                            onLoadedData={() => setVideoLoaded(true)}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{
                                opacity: videoLoaded ? 1 : 0,
                                scale: videoLoaded ? 1 : 0.95,
                                transition: { duration: 0.5, ease: "easeOut" }
                            }}
                        />

                        {videoLoaded && (
                            <RatCloseHint onClick={closeRatMode}>
                                Click anywhere to close
                            </RatCloseHint>
                        )}
                    </EasterEggBackdrop>
                )}
            </AnimatePresence>
        </AboutSection>
    );
};

export default About;