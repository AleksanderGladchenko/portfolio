import { ExperienceSection, SectionTitle, TimelineContainer, TimelineItem, ContentBox, DateText, RoleTitle, CompanyName, DescriptionList, DescriptionItem } from './Experience.styles';

const jobs = [
    {
        company: 'SaaS Platform / Custom Web Solutions',
        role: 'Technical Architect & Full-Stack Engineer',
        period: 'Dec 2025 - Present',
        tasks: [
            'Architected a custom CMS featuring an automated game server monitoring system with Cron-based data aggregation.',
            'Integrated secure payment processing via the Monobank API, ensuring fault-tolerant financial transactions.',
            'Designed interactive data visualization dashboards using Chart.js to monitor real-time server metrics.'
        ]
    },
    {
        company: 'Freelance / B2B Projects',
        role: 'Full-Stack Web Developer',
        period: 'May 2025 - Nov 2025',
        tasks: [
            'Developed and deployed specialized WordPress and Osclass plugins, including a custom Geo-Traffic Shield.',
            'Optimized high-load marketplace performance by restructuring SQL queries and automating XML product feeds.',
            'Managed full-cycle deployment across dedicated Linux servers using Nginx and Adminer.'
        ]
    },
    {
        company: 'High-Load Automation Project',
        role: 'Backend & Automation Engineer',
        period: 'Sep 2024 - Apr 2025',
        tasks: [
            'Engineered a scalable automation farm running 10+ Android emulators simultaneously.',
            'Developed a thread-safe RESTful API using Python, Flask, and SQLAlchemy.',
            'Implemented robust Systemd watchdogs and Linux bash scripts to prevent OOM errors and ensure 24/7 uptime.'
        ]
    },
    {
        company: 'E-commerce / Digital Agency',
        role: 'Middle Front-End Engineer',
        period: 'Dec 2023 - Aug 2024',
        tasks: [
            'Maintained and optimized live e-commerce platforms, significantly improving core web vitals and rendering speed.',
            'Developed responsive, high-performance web interfaces and complex pixel-perfect HTML architectures.',
            'Collaborated with backend teams to integrate secure third-party APIs and payment gateways.'
        ]
    },
    {
        company: 'Web Development Studio',
        role: 'Front-End Developer',
        period: 'Jan 2023 - Nov 2023',
        tasks: [
            'Built dynamic Single Page Applications (SPAs) using React, Redux, Angular, and RxJS.',
            'Designed reusable UI component libraries and complex form validation logic (Smart Forms).',
            'Implemented real-time search and filtering algorithms for data-heavy applications (Phrase Analyzer).'
        ]
    }
];

const Experience = () => {
    return (
        <ExperienceSection
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <SectionTitle>Career <span>History</span></SectionTitle>

            <TimelineContainer>
                {jobs.map((job, index) => (
                    <TimelineItem
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                    >
                        <ContentBox className="content-box">
                            <DateText>{job.period}</DateText>
                            <RoleTitle>{job.role}</RoleTitle>
                            <CompanyName>{job.company}</CompanyName>
                            <DescriptionList>
                                {job.tasks.map((task, i) => (
                                    <DescriptionItem key={i}>{task}</DescriptionItem>
                                ))}
                            </DescriptionList>
                        </ContentBox>
                    </TimelineItem>
                ))}
            </TimelineContainer>
        </ExperienceSection>
    );
};

export default Experience;