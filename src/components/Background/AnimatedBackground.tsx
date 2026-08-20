import styled from 'styled-components';

const BackgroundWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-color: #000000;

    /* Элегантная статичная подсветка сверху по центру (Spotlight) */
    background-image: radial-gradient(circle at 50% -20%, rgba(234, 88, 12, 0.15) 0%, rgba(0, 0, 0, 0) 70%);
`;

/*
  Генерация шума через SVG. Это не грузит сеть (нет внешних картинок)
  и создает идеальную премиальную текстуру матового покрытия.
*/
const NoiseOverlay = styled.div`
    position: absolute;
    inset: 0;
    opacity: 0.35;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    pointer-events: none;
    mix-blend-mode: overlay;
    z-index: 1;
`;

const AnimatedBackground = () => {
    return (
        <BackgroundWrapper>
            <NoiseOverlay />
        </BackgroundWrapper>
    );
};

export default AnimatedBackground;