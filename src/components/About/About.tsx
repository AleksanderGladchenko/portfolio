import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // <-- Импорт
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
    const { t } = useTranslation(); // <-- Хук

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
            <SectionTitle>{t('about.titlePart1')} <span>{t('about.titlePart2')}</span></SectionTitle>

            <ProfileCard>
                <TextContent>
                    <HighlightText>
                        {t('about.highlight1')}<br />
                        {t('about.highlight2')} <span>{t('about.highlight3')}</span>.
                    </HighlightText>

                    <Paragraph>{t('about.p1')}</Paragraph>
                    <Paragraph>{t('about.p2')}</Paragraph>
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
                                {t('about.ratHint')}
                            </RatCloseHint>
                        )}
                    </EasterEggBackdrop>
                )}
            </AnimatePresence>
        </AboutSection>
    );
};

export default About;