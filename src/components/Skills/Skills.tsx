// src/components/Skills/Skills.tsx
import { SkillsSection, SectionTitle, SkillsGrid, SkillCard, SkillIcon } from './Skills.styles';
import {
    FaReact, FaAngular, FaJsSquare, FaHtml5, FaGithub, FaFigma, FaSass
} from 'react-icons/fa';
import {
    SiTypescript,
    SiStyledcomponents,
    SiRedux,        // <-- Новый импорт
    SiMui,          // <-- Новый импорт
    SiReactivex     // <-- Новый импорт (для RxJS)
} from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai';
import { FiDatabase } from 'react-icons/fi';
import { TbBrandFramerMotion } from 'react-icons/tb'; // <-- Новый импорт

const skills = [
    // Основные фреймворки и языки
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    // Стилизация
    { name: 'HTML5 & CSS3', icon: <FaHtml5 /> },
    { name: 'SCSS/SASS', icon: <FaSass /> },
    { name: 'Styled-comp.', icon: <SiStyledcomponents /> },
    { name: 'Material-UI', icon: <SiMui /> }, // <-- ДОБАВЛЕНО
    // Стейт-менеджмент и асинхронность
    { name: 'Redux', icon: <SiRedux /> },     // <-- ДОБАВЛЕНО
    { name: 'RxJS', icon: <SiReactivex /> },  // <-- ДОБАВЛЕНО
    // Анимации
    { name: 'Framer Motion', icon: <TbBrandFramerMotion /> }, // <-- ДОБАВЛЕНО
    // Инструменты и другое
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'MJML', icon: <AiOutlineMail /> },
    { name: 'SQL', icon: <FiDatabase /> },
    { name: 'MailChimp', icon: 'MC' },
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
                        transition={{ duration: 0.5, delay: index * 0.1 }}
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