import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Lenis from 'lenis';

const GlobalStyle = createGlobalStyle`
    :root {
        /* --- SOLID BACKGROUND --- */
        --bg-color: #060b14; /* Глухой цвет на стыке черного и темно-синего */

        /* --- ORIGINAL APPLE-STYLE ELEMENTS --- */
        --card-bg: #1c1c1e;
        --text-primary: #f5f5f7;
        --text-secondary: #86868b;
        --accent-color: #2997ff;
        --border-color: rgba(255, 255, 255, 0.1);
        --shadow-color: rgba(0, 0, 0, 0.5);
        --nav-bg: rgba(28, 28, 30, 0.75);
        --glass-panel: rgba(20, 20, 20, 0.6);
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    a {
        color: inherit !important;
        text-decoration: none !important;
    }

    body {
        background-color: var(--bg-color);
        color: var(--text-primary);
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: var(--bg-color); }
    ::-webkit-scrollbar-thumb {
        background-color: var(--text-secondary);
        border-radius: 10px;
        border: 3px solid var(--bg-color);
        background-clip: content-box;
    }
`;

const MainContent = styled.main`
    position: relative;
    z-index: 1;
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 24px;
`;

function App() {
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', 'dark');

        // Инициализация кинематографичного скролла
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            {/* Анимированный фон удален для чистоты и максимальной производительности */}

            <Header />

            <MainContent>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Contact />
            </MainContent>
        </>
    );
}

export default App;