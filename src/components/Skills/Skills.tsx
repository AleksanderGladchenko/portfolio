import { SkillsSection, SectionTitle, Grid, CategoryCard, CategoryHeader, SkillsList, SkillItem } from './Skills.styles';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
/* УБРАЛ SiSass из этой строки */
import {
    SiReact, SiAngular, SiTypescript, SiJavascript, SiHtml5, SiStyledcomponents,
    SiPython, SiFlask, SiAppium, SiLinux, SiGnubash, SiDocker,
    SiGit, SiFigma, SiPostman
} from 'react-icons/si';

const Skills = () => {
    /* ... (остальной код без изменений) ... */
    const categories = [
        {
            title: "Frontend Ecosystem",
            icon: <FaLaptopCode />,
            skills: [
                { name: "React / Redux", icon: <SiReact /> },
                { name: "Angular / RxJS", icon: <SiAngular /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
                { name: "Styled Components", icon: <SiStyledcomponents /> },
                { name: "HTML5 / SCSS", icon: <SiHtml5 /> },
            ]
        },
        {
            title: "Backend & Automation",
            icon: <FaServer />,
            skills: [
                { name: "Python 3", icon: <SiPython /> },
                { name: "Flask API", icon: <SiFlask /> },
                { name: "Appium / Selenium", icon: <SiAppium /> },
                { name: "Linux Administration", icon: <SiLinux /> },
                { name: "Bash Scripting", icon: <SiGnubash /> },
                { name: "SQLAlchemy", icon: <SiPython /> },
            ]
        },
        {
            title: "Tools & Workflow",
            icon: <FaTools />,
            skills: [
                { name: "Git / GitHub", icon: <SiGit /> },
                { name: "Docker / Systemd", icon: <SiDocker /> },
                { name: "Figma", icon: <SiFigma /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "Vite / Webpack", icon: <SiReact /> },
            ]
        }
    ];

    return (
        <SkillsSection
            id="skills"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <SectionTitle>Technical <span>Specs</span></SectionTitle>

            <Grid>
                {categories.map((cat, index) => (
                    <CategoryCard
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <CategoryHeader>
                            {cat.icon}
                            {cat.title}
                        </CategoryHeader>
                        <SkillsList>
                            {cat.skills.map((skill, i) => (
                                <SkillItem key={i}>
                                    {skill.icon}
                                    {skill.name}
                                </SkillItem>
                            ))}
                        </SkillsList>
                    </CategoryCard>
                ))}
            </Grid>
        </SkillsSection>
    );
};

export default Skills;