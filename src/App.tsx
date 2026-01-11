import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import AnimatedBackground from './components/Background/AnimatedBackground';

// Определение тем
const GlobalStyle = createGlobalStyle`
    :root {
        /* --- DARK MODE --- */
        --bg-color: #050505;
        --card-bg: #1c1c1e;
        --text-primary: #f5f5f7;
        --text-secondary: #86868b;
        --accent-color: #2997ff;
        --border-color: rgba(255, 255, 255, 0.1);
        --shadow-color: rgba(0, 0, 0, 0.5);
        --nav-bg: rgba(28, 28, 30, 0.75);
        --glass-panel: rgba(20, 20, 20, 0.6);

        /* Цвета Aurora Dark */
        --aurora-1: #004060;
        --aurora-2: #3a0ca3;
        --aurora-3: #005f73;
    }

    /* --- LIGHT MODE --- */
    [data-theme='light'] {
        --bg-color: #ffffff;
        --card-bg: #ffffff;
        --text-primary: #1d1d1f;
        --text-secondary: #86868b;
        --accent-color: #0071e3;
        --border-color: rgba(0, 0, 0, 0.05);
        --shadow-color: rgba(0, 0, 0, 0.05);
        --nav-bg: rgba(255, 255, 255, 0.75);
        --glass-panel: rgba(255, 255, 255, 0.65);

        /* Цвета Aurora Light (Пастель) */
        --aurora-1: #dbeafe;
        --aurora-2: #f3e8ff;
        --aurora-3: #ccfbf1;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
        background-color: var(--bg-color);
        color: var(--text-primary);
        font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        transition: background-color 0.5s ease;
        overflow-x: hidden;
    }

    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb {
        background-color: var(--text-secondary);
        border-radius: 10px;
        border: 3px solid transparent;
        background-clip: content-box;
    }
`;

/* ВАЖНОЕ ИСПРАВЛЕНИЕ: Контент должен быть выше фона */
const MainContent = styled.main`
    position: relative; /* Чтобы z-index работал */
    z-index: 1;         /* Выше, чем background (у которого -1) */
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 24px;
`;

function App() {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <>
            <GlobalStyle />
            <AnimatedBackground /> {/* Фон лежит отдельно */}

            <Header currentTheme={theme} toggleTheme={toggleTheme} />

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