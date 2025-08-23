// src/components/Skills/Skills.tsx
import { SkillsSection, SectionTitle, SkillsGrid, SkillCard, SkillIcon } from './Skills.styles';
// 1. Добавляем новые иконки
import {
    FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaGithub, FaFigma, FaSass
} from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents } from 'react-icons/si';
import { AiOutlineMail } from 'react-icons/ai'; // Для MJML
import { FiDatabase } from 'react-icons/fi'; // для SQL


// 2. Расширяем массив навыков
const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'SCSS/SASS', icon: <FaSass /> },
    { name: 'MJML', icon: <AiOutlineMail /> },
    { name: 'HTML5 & CSS3', icon: <FaHtml5 /> },
    { name: 'Styled-comp.', icon: <SiStyledcomponents /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'SQL', icon: <FiDatabase /> },
    { name: 'MailChimp', icon: 'MC' }, // Просто текст, так как иконки нет
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