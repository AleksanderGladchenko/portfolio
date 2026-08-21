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
                        Less magic.<br />
                        More <span>Engineering</span>.
                    </HighlightText>

                    <Paragraph>
                        I'm Alexander. My background is in Aviation & Rocketry — an industry where failure isn't an option and tolerances are absolute. I traded aerodynamics for software engineering, bringing that same strict, paranoid mindset to web architecture.
                    </Paragraph>

                    <Paragraph>
                        I don't just write code; I solve business problems. Whether it's orchestrating a headless farm of Android emulators via Python, securing payment flows, or structuring a clean React frontend, I focus on system resilience. No spaghetti code, no fragile 'magic' one-liners. Just modular, scalable solutions that work predictably.
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