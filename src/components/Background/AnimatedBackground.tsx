import styled, { keyframes } from 'styled-components';

const move = keyframes`
    0% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(50px, -50px) scale(1.2); }
    100% { transform: translate(-20px, 20px) scale(0.9); }
`;

const BackgroundContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1; /* Жестко на задний план */
    background: var(--bg-color);
    overflow: hidden; /* Чтобы шары не вызывали скролл */
    pointer-events: none; /* Чтобы сквозь него можно было кликать */
`;

const Blob = styled.div`
    position: absolute;
    border-radius: 50%;
    filter: blur(120px); /* ОЧЕНЬ сильное размытие */
    opacity: 0.5; /* Полупрозрачность */
    animation: ${move} 20s infinite ease-in-out alternate;
    will-change: transform; /* Оптимизация производительности */
`;

// Шар 1: Огромный синий слева
const Blob1 = styled(Blob)`
    top: -20%;
    left: -20%;
    width: 90vw; /* Почти на весь экран */
    height: 90vw;
    background: var(--aurora-1);
    animation-duration: 25s;
`;

// Шар 2: Огромный фиолетовый справа
const Blob2 = styled(Blob)`
    bottom: -20%;
    right: -20%;
    width: 90vw;
    height: 90vw;
    background: var(--aurora-2);
    animation-duration: 30s;
    animation-direction: reverse;
`;

// Шар 3: Центральный связующий
const Blob3 = styled(Blob)`
    top: 20%;
    left: 20%;
    width: 80vw;
    height: 80vw;
    background: var(--aurora-3);
    animation-duration: 35s;
    opacity: 0.3;
`;

/* Текстура шума для "дорогого" вида */
const NoiseOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.04;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
`;

const AnimatedBackground = () => {
    return (
        <BackgroundContainer>
            <Blob1 />
            <Blob2 />
            <Blob3 />
            <NoiseOverlay />
        </BackgroundContainer>
    );
};

export default AnimatedBackground;