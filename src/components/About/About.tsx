import {AboutSection, SectionTitle, ContentWrapper, TextBlock, SkillsList, ImageWrapper} from './About.styles';
import profileImage from '../../assets/135319167.jpeg';

const About = () => {
    return (
        <AboutSection
            id="about"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.3}}
            transition={{duration: 0.8}}
        >
            <SectionTitle>01. About Me (Dossier)</SectionTitle>
            <ContentWrapper>
                <TextBlock>
                    <p>
                        Hello! I'm Alexander, a Front-End Developer who loves creating solid and intuitive web
                        interfaces. My journey into programming started as a hobby but quickly grew into a full-fledged
                        passion.
                    </p>
                    <p>
                        My background in **Aviation and Rocketry Engineering** gave me a unique foundation in structured
                        thinking and a keen eye for detail. I learned to approach complex problems analytically and
                        break them down into manageable solutions — a skill I now apply every day to building robust
                        software.
                    </p>
                    <p>Here are a few technologies I’ve been working with recently:</p>
                    <SkillsList>
                        <li>JavaScript (ES6+)</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>Angular</li>
                        <li>HTML5 & CSS3</li>
                        <li>Styled-components</li>
                    </SkillsList>
                </TextBlock>
                <ImageWrapper>
                    <img src={profileImage} alt="Alexander, Front-End Developer"/>
                </ImageWrapper>
            </ContentWrapper>
        </AboutSection>
    );
};

export default About;