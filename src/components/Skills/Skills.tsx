import { SkillsSection, SectionTitle, SkillsGrid, SkillCard, SkillIcon } from './Skills.styles';
import { FaReact, FaAngular, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiStyledcomponents } from 'react-icons/si';

const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Angular', icon: <FaAngular /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
    { name: 'JavaScript', icon: <FaJsSquare /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
    { name: 'Styled-comp.', icon: <SiStyledcomponents /> },
    { name: 'Git', icon: <FaGitAlt /> },
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