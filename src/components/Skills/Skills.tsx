// src/components/Skills/Skills.tsx
import { SkillsSection, SectionTitle, SkillsGrid, SkillCard, SkillIcon } from './Skills.styles';
import {
    FaReact, FaAngular, FaJsSquare, FaHtml5, FaGithub, FaFigma, FaSass,
    FaPython, FaLinux, FaTerminal // <-- Новые иконки (Python, Linux, Terminal)
} from 'react-icons/fa';
import {
    SiTypescript,
    SiStyledcomponents,
    SiRedux,
    SiMui,
    SiReactivex,
    SiFlask,        // <-- Flask
    SiAppium,       // <-- Appium
    SiSqlalchemy,   // <-- SQLAlchemy
    SiGunicorn,     // <-- Gunicorn
    SiGnubash       // <-- Bash
} from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
import { TbBrandFramerMotion } from 'react-icons/tb';

const skills = [
    // --- FRONTEND ---
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'HTML5 & CSS3', icon: <FaHtml5 /> },
    { name: 'SCSS/SASS', icon: <FaSass /> },
    { name: 'Styled-comp.', icon: <SiStyledcomponents /> },
    { name: 'Material-UI', icon: <SiMui /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'RxJS', icon: <SiReactivex /> },
    { name: 'Framer Motion', icon: <TbBrandFramerMotion /> },

    // --- BACKEND & DEVOPS (Instagram Farm Stack) ---
    { name: 'Python', icon: <FaPython /> },
    { name: 'Flask', icon: <SiFlask /> },
    { name: 'Appium', icon: <SiAppium /> },
    { name: 'Linux / VPS', icon: <FaLinux /> },
    { name: 'Systemd', icon: <FaTerminal /> }, // Systemd обычно обозначают терминалом
    { name: 'SQLAlchemy', icon: <SiSqlalchemy /> },
    { name: 'Gunicorn', icon: <SiGunicorn /> },
    { name: 'Bash Scripting', icon: <SiGnubash /> },

    // --- TOOLS ---
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'SQL', icon: <FiDatabase /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'MJML', icon: <AiOutlineMail /> },
];

const Skills = () => {
    return (
        <SkillsSection
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <SectionTitle>02. Tech Arsenal</SectionTitle>
            <SkillsGrid>
                {skills.map((skill, index) => (
                    <SkillCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }} // Чуть ускорил анимацию, т.к. элементов стало больше
                    >
                        <SkillIcon>{skill.icon}</SkillIcon>
                        {skill.name}
                    </SkillCard>
                ))}
            </SkillsGrid>
        </SkillsSection>
    );
};

export default Skills;