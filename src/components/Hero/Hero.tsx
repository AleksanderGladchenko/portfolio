import { HeroContainer, Subtitle, Title, Description, CtaButton } from './Hero.styles';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
    return (
        <HeroContainer>
            <Subtitle variants={fadeIn} initial="hidden" animate="visible">
                Hi, my name is
            </Subtitle>
            <Title variants={fadeIn} initial="hidden" animate="visible" style={{ transitionDelay: '0.2s' }}>
                Alexander.
            </Title>
            <Description variants={fadeIn} initial="hidden" animate="visible" style={{ transitionDelay: '0.4s' }}>
                I build impressive things for the web. I'm a Front-End Developer with a unique background in engineering, specializing in creating responsive, pixel-perfect user interfaces in Angular & React.
            </Description>
            <CtaButton href="#projects" variants={fadeIn} initial="hidden" animate="visible" style={{ transitionDelay: '0.6s' }}>
                Check out my work!
            </CtaButton>
        </HeroContainer>
    );
};

export default Hero;