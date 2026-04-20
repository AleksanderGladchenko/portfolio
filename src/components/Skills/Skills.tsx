import { SkillsSection, SectionTitle, Grid, CategoryCard, CategoryHeader, SkillsList, SkillItem } from './Skills.styles';

// Добавлены FaShopify и FaShoppingCart
import { FaLaptopCode, FaServer, FaTools, FaCreditCard, FaDatabase, FaShopify, FaShoppingCart } from 'react-icons/fa';

// Добавлен SiJavascript для нативной JS логики
import {
    SiReact, SiAngular, SiTypescript, SiHtml5, SiStyledcomponents,
    SiPython, SiAppium, SiLinux, SiGnubash, SiDocker,
    SiGit, SiPostman, SiPhp, SiChartdotjs, SiNodedotjs, SiJavascript
} from 'react-icons/si';

const Skills = () => {
    const categories = [
        {
            title: "Frontend Ecosystem",
            icon: <FaLaptopCode />,
            skills: [
                { name: "React / Redux", icon: <SiReact /> },
                { name: "Angular / RxJS", icon: <SiAngular /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Advanced JS (DOM/AJAX)", icon: <SiJavascript /> }, // Добавлено из ТЗ
                { name: "Data Viz (Chart.js)", icon: <SiChartdotjs /> },
                { name: "HTML5 / SCSS", icon: <SiHtml5 /> },
                { name: "Styled Components", icon: <SiStyledcomponents /> },
            ]
        },
        {
            title: "Backend & E-commerce", // Переименовано для Shopify
            icon: <FaServer />,
            skills: [
                { name: "Shopify Liquid", icon: <FaShopify /> }, // Добавлено
                { name: "Cart API Integrations", icon: <FaShoppingCart /> }, // Добавлено
                { name: "Python / Flask", icon: <SiPython /> },
                { name: "PHP & MySQL", icon: <SiPhp /> },
                { name: "Node.js & APIs", icon: <SiNodedotjs /> },
                { name: "FinTech (Monobank)", icon: <FaCreditCard /> },
                { name: "Cron & Automation", icon: <SiGnubash /> },
            ]
        },
        {
            title: "DevOps & Workflow",
            icon: <FaTools />,
            skills: [
                { name: "Linux Administration", icon: <SiLinux /> },
                { name: "Docker / Systemd", icon: <SiDocker /> },
                { name: "DB Mgt (Adminer/SQL)", icon: <FaDatabase /> },
                { name: "Appium / Selenium", icon: <SiAppium /> }, // Перенесено для баланса
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