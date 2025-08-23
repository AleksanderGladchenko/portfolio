import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        display: flex;
        align-items: center;
        flex-direction: column;
        background-color: #0a192f;
        color: #ccd6f6;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const MainContent = styled.main`
    margin: 0 auto;
    max-width: 1000px;
    padding: 0 1rem;
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <MainContent>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
            </MainContent>
            <Contact />
        </>
    );
}


export default App;