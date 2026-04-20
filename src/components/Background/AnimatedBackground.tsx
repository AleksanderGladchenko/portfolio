import { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import heroVideoPath from '../../assets/hero-bg.mp4';

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

const VideoOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(5, 5, 5, 0.3) 0%, rgba(5, 5, 5, 0.9) 100%);
    z-index: 1;
`;

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isReady, setIsReady] = useState(false);

    // Рефы для хранения математики без ререндера компонента
    const targetTimeRef = useRef(0);
    const maxProgressRef = useRef(0); // ЗАМОК: Хранит максимальный достигнутый прогресс
    const heightRef = useRef(0);

    // 1. Инициализация видео
    useEffect(() => {
        const video = document.createElement('video');
        video.src = heroVideoPath;
        video.muted = true;
        video.playsInline = true;
        video.preload = "auto";
        video.style.display = 'none';

        const initVideo = async () => {
            try {
                await video.play();
                video.pause();

                if (canvasRef.current) {
                    canvasRef.current.width = video.videoWidth;
                    canvasRef.current.height = video.videoHeight;
                    videoRef.current = video;
                    setIsReady(true);

                    // Рисуем первый кадр сразу
                    const ctx = canvasRef.current.getContext('2d');
                    ctx?.drawImage(video, 0, 0, canvasRef.current.width, canvasRef.current.height);
                }
            } catch (e) {
                console.warn("Autoplay blocked:", e);
            }
        };

        video.addEventListener('loadeddata', initVideo);
        video.load();

        return () => video.removeEventListener('loadeddata', initVideo);
    }, []);

    // 2. Отслеживание точной высоты документа (защита от скачков анимаций)
    useEffect(() => {
        const updateHeight = () => {
            heightRef.current = document.documentElement.scrollHeight - window.innerHeight;
        };

        // Обновляем высоту при изменении DOM (появлении карточек)
        const observer = new ResizeObserver(updateHeight);
        observer.observe(document.body);
        updateHeight();

        return () => observer.disconnect();
    }, []);

    // 3. Главный Render Loop (Работает вне реактивности React)
    useEffect(() => {
        if (!isReady || !videoRef.current || !canvasRef.current) return;

        const video = videoRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d', { alpha: false }); // Оптимизация производительности
        let animationId: number;

        const renderLoop = () => {
            // 3.1 Вычисляем текущий прогресс скролла
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            let rawProgress = heightRef.current > 0 ? currentScroll / heightRef.current : 0;
            rawProgress = Math.max(0, Math.min(1, rawProgress));

            // 3.2 ЗАМОК РЕВЕРСА: Прогресс может только расти (пока мы не докрутили до конца)
            // Это жестко блокирует скачки видео назад при динамическом изменении высоты
            if (rawProgress > maxProgressRef.current) {
                maxProgressRef.current = rawProgress;
            } else if (rawProgress < maxProgressRef.current - 0.05) {
                // Если пользователь явно и сильно крутит вверх, сбрасываем замок
                maxProgressRef.current = rawProgress;
            }

            // 3.3 Устанавливаем целевое время
            if (video.duration) {
                const safeDuration = video.duration - 0.1; // Оставляем 0.1с до конца видео
                targetTimeRef.current = maxProgressRef.current * safeDuration;
            }

            // 3.4 LERP (Плавное догоняние)
            const easing = 0.08; // Коэффициент плавности
            const diff = targetTimeRef.current - video.currentTime;

            // Двигаем видео только если разница существенна
            if (Math.abs(diff) > 0.005) {
                video.currentTime += diff * easing;
            }

            // 3.5 Отрисовка кадра
            if (ctx && video.readyState >= 2) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            }

            animationId = requestAnimationFrame(renderLoop);
        };

        renderLoop();

        return () => cancelAnimationFrame(animationId);
    }, [isReady]);

    return (
        <BackgroundContainer>
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.5,
                    willChange: 'transform' /* Подсказка для GPU */
                }}
            />
            <VideoOverlay />
        </BackgroundContainer>
    );
};

export default AnimatedBackground;