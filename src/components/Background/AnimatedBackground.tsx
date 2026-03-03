import styled, { keyframes } from 'styled-components';

const move = keyframes`
    0% { transform: translate3d(0, 0, 0) scale(1); }
    50% { transform: translate3d(50px, -50px, 0) scale(1.2); }
    100% { transform: translate3d(-20px, 20px, 0) scale(0.9); }
`;

const BackgroundContainer = styled.div`
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

const Blob = styled.div`
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
    animation: ${move} 20s infinite ease-in-out alternate;
    will-change: transform;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
`;

const Blob1 = styled(Blob)`
    top: -20%;
    left: -20%;
    width: 90vw;
    height: 90vw;
    background: radial-gradient(circle at center, var(--aurora-1) 0%, transparent 70%);
    animation-duration: 25s;
`;

const Blob2 = styled(Blob)`
    bottom: -20%;
    right: -20%;
    width: 90vw;
    height: 90vw;
    background: radial-gradient(circle at center, var(--aurora-2) 0%, transparent 70%);
    animation-duration: 30s;
    animation-direction: reverse;
`;

const Blob3 = styled(Blob)`
    top: 20%;
    left: 20%;
    width: 80vw;
    height: 80vw;
    background: radial-gradient(circle at center, var(--aurora-3) 0%, transparent 70%);
    animation-duration: 35s;
    opacity: 0.4;
`;

const AnimatedBackground = () => {
    return (
        <BackgroundContainer>
            <Blob1 />
            <Blob2 />
            <Blob3 />
            {/* NoiseOverlay ПОЛНОСТЬЮ УДАЛЕН ДЛЯ 60 FPS В CHROME */}
        </BackgroundContainer>
    );
};

export default AnimatedBackground;