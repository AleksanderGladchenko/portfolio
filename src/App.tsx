import { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AnimatedBackground from './components/Background/AnimatedBackground'; // ВЕРНУЛИ ИМПОРТ ФОНА
import Lenis from 'lenis';

const GlobalStyle = createGlobalStyle`
    :root {
        --bg-color: #000000;
        --card-bg: rgba(20, 20, 20, 0.6);
        --text-primary: #ffffff;
        --text-secondary: #a1a1aa;
        --accent-color: #ea580c;
        --accent-glow: rgba(234, 88, 12, 0.4);
        --border-color: rgba(255, 255, 255, 0.08);
        --shadow-color: rgba(0, 0, 0, 0.8);
        --nav-bg: rgba(10, 10, 10, 0.75);
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

    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: var(--bg-color); }
    ::-webkit-scrollbar-thumb {
        background-color: #333333;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--accent-color);
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
            {/* РЕНДЕРИМ МАССИВНЫЙ ФОН */}
            <AnimatedBackground />

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