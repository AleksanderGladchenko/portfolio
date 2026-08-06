import styled, { keyframes } from 'styled-components';

// Ускоренные и более амплитудные анимации
const morph1 = keyframes`
  0% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
  33% { transform: translate(-15%, 20%) scale(1.1) rotate(15deg); }
  66% { transform: translate(15%, -15%) scale(0.9) rotate(-15deg); }
  100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
`;

const morph2 = keyframes`
  0% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
  33% { transform: translate(20%, -15%) scale(1.2) rotate(-15deg); }
  66% { transform: translate(-20%, 20%) scale(0.8) rotate(15deg); }
  100% { transform: translate(0%, 0%) scale(1) rotate(0deg); }
`;

const BackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: var(--bg-color);
    overflow: hidden;
    pointer-events: none;
`;

const GlowBlob = styled.div`
    position: absolute;
    border-radius: 50%;
    filter: blur(100px); /* Уменьшили блюр, чтобы пятно было более концентрированным */
    will-change: transform;
    opacity: 0.8; 
`;

const MainBlob = styled(GlowBlob)`
    top: 15%;
    left: 25%;
    width: 45vw; /* Было 80vw — уменьшили почти в 2 раза */
    height: 45vh;
    background: radial-gradient(circle, rgba(234, 88, 12, 0.75) 0%, rgba(217, 119, 6, 0.3) 40%, rgba(0, 0, 0, 0) 70%);
    animation: ${morph1} 10s ease-in-out infinite; /* Ускорили с 18s до 10s */
`;

const AccentBlob = styled(GlowBlob)`
    bottom: 15%;
    right: 20%;
    width: 40vw; /* Было 70vw */
    height: 40vh;
    background: radial-gradient(circle, rgba(194, 65, 12, 0.65) 0%, rgba(234, 88, 12, 0.25) 50%, rgba(0, 0, 0, 0) 70%);
    animation: ${morph2} 12s ease-in-out infinite; /* Ускорили с 22s до 12s */
    animation-delay: -3s;
`;

const AnimatedBackground = () => {
    return (
        <BackgroundWrapper>
            <MainBlob />
            <AccentBlob />
        </BackgroundWrapper>
    );
};

export default AnimatedBackground;