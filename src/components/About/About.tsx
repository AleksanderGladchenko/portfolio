import { AboutSection, SectionTitle, ProfileCard, TextContent, HighlightText, Paragraph, ImageContainer, ProfileImg } from './About.styles';
import profileImage from '../../assets/135319167.jpeg'; // Убедись, что путь к фото верный

const About = () => {
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
                        I'm Alexander, a developer with a background in <b>Aviation & Rocketry Engineering</b>.
                        I trade aerodynamics for algorithms to build high-performance web interfaces and automation systems.
                    </Paragraph>

                    <Paragraph>
                        My approach is simple: structure like an engineer, design like an artist, and execute like a machine.
                        Currently specialized in React, Python automation, and building fault-tolerant systems.
                    </Paragraph>
                </TextContent>

                <ImageContainer>
                    <ProfileImg src={profileImage} alt="Alexander" />
                </ImageContainer>
            </ProfileCard>
        </AboutSection>
    );
};

export default About;