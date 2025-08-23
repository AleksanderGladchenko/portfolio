import { useState } from 'react';
import { ExperienceSection, SectionTitle, TabsContainer, TabList, TabButton, TabContent } from './Experience.styles';
import { motion } from 'framer-motion';

const jobs = [
    {
        company: 'E-commerce Project', // <-- Теперь это первая работа
        role: 'Junior Front-End Developer',
        period: 'Jan 2024 - Dec 2024',
        tasks: [
            'Maintained and updated a live e-commerce website, ensuring high performance and a seamless user experience.',
            'Resolved front-end bugs, fixed layout issues, and updated website content, including text, images, and product descriptions.',
            'Collaborated with senior developers to implement design requirements, such as integrating custom fonts and UI enhancements.'
        ]
    },
    {
        company: 'IT Company', // <-- А это вторая
        role: 'Front-End Developer',
        period: 'Feb 2025 - Jul 2025',
        tasks: [
            'Developed complex, responsive HTML emails from scratch based on design mockups from Figma.',
            'Mastered cross-client compatibility challenges to ensure consistent rendering across all major email platforms (Gmail, Outlook, Apple Mail).',
            'Translated static designs into functional, interactive email templates.'
        ]
    }
];

const Experience = () => {
    const [activeJobIndex, setActiveJobIndex] = useState(0);
    const activeJob = jobs[activeJobIndex];

    return (
        <ExperienceSection
            id="experience"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <SectionTitle>03. Mission Logs</SectionTitle>
            <TabsContainer>
                <TabList>
                    {jobs.map((job, index) => (
                        <TabButton
                            key={index}
                            $isActive={index === activeJobIndex}
                            onClick={() => setActiveJobIndex(index)}
                        >
                            {job.company}
                        </TabButton>
                    ))}
                </TabList>
                <TabContent
                    key={activeJobIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h3>{activeJob.role} @ {activeJob.company}</h3>
                    <p>{activeJob.period}</p>
                    <ul>
                        {activeJob.tasks.map((task, i) => <li key={i}>{task}</li>)}
                    </ul>
                </TabContent>
            </TabsContainer>
        </ExperienceSection>
    );
};

export default Experience;