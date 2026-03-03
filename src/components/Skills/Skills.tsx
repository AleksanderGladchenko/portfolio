import { SkillsSection, SectionTitle, Grid, CategoryCard, CategoryHeader, SkillsList, SkillItem } from './Skills.styles';

// Импортируем новые иконки для БД, кредиток (API оплат) и графиков
import { FaLaptopCode, FaServer, FaTools, FaCreditCard, FaDatabase } from 'react-icons/fa';

// Импортируем логотипы технологий (добавили PHP, Chart.js, Node.js)
import {
    SiReact, SiAngular, SiTypescript, SiHtml5, SiStyledcomponents,
    SiPython, SiAppium, SiLinux, SiGnubash, SiDocker,
    SiGit, SiPostman, SiPhp, SiChartdotjs, SiNodedotjs
} from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Ecosystem",
            icon: <FaLaptopCode />,
            skills: [
                { name: "React / Redux", icon: <SiReact /> },
                { name: "Angular / RxJS", icon: <SiAngular /> },
                { name: "TypeScript / ES6+", icon: <SiTypescript /> },
                { name: "Data Viz (Chart.js)", icon: <SiChartdotjs /> }, // Новое
                { name: "Styled Components", icon: <SiStyledcomponents /> },
                { name: "HTML5 / SCSS", icon: <SiHtml5 /> },
            ]
        },
        {
            title: "Backend Architecture",
            icon: <FaServer />,
            skills: [
                { name: "Python / Flask", icon: <SiPython /> },
                { name: "PHP & MySQL", icon: <SiPhp /> }, // Новое
                { name: "Node.js & APIs", icon: <SiNodedotjs /> },
                { name: "FinTech (Monobank API)", icon: <FaCreditCard /> }, // Новое
                { name: "Cron Jobs & Automation", icon: <SiGnubash /> }, // Выделили Cron
                { name: "Appium / Selenium", icon: <SiAppium /> },
            ]
        },
        {
            title: "DevOps & Workflow",
            icon: <FaTools />,
            skills: [
                { name: "Linux Administration", icon: <SiLinux /> },
                { name: "Docker / Systemd", icon: <SiDocker /> },
                { name: "DB Mgt (Adminer / SQL)", icon: <FaDatabase /> }, // Новое
                { name: "Git / GitHub", icon: <SiGit /> },
                { name: "Postman / API Testing", icon: <SiPostman /> },
                { name: "Vite / Webpack", icon: <FaTools /> },
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