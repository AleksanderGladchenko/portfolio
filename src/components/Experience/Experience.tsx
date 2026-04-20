import { ExperienceSection, SectionTitle, TimelineContainer, TimelineItem, ContentBox, DateText, RoleTitle, CompanyName, DescriptionList, DescriptionItem } from './Experience.styles';

const jobs = [
    {
        company: 'SaaS Platform / Custom Web Solutions',
        role: 'Technical Architect & Full-Stack Engineer',
        period: 'Dec 2025 - Present',
        tasks: [
            'Architected a custom CMS with an automated game server monitoring system, reducing manual tracking overhead by 100% via Cron-based data aggregation.',
            'Integrated Monobank API for secure payment processing, achieving a 99.9% success rate for fault-tolerant financial transactions.',
            'Designed interactive real-time dashboards (Chart.js), improving data visibility and business decision-making speed.'
        ]
    },
    {
        company: 'Freelance / B2B Projects',
        role: 'Full-Stack Web Developer',
        period: 'May 2025 - Nov 2025',
        tasks: [
            'Engineered a custom WordPress Geo-Traffic Shield, effectively blocking 10,000+ malicious bot requests monthly and securing landing pages.',
            'Optimized high-load Osclass marketplace: restructured SQL queries and automated XML feeds, decreasing server CPU load by 40% and cutting feed generation time in half.',
            'Managed zero-downtime deployments across dedicated Linux servers using Nginx.'
        ]
    },
    {
        company: 'High-Load Automation Project',
        role: 'Backend & Automation Engineer',
        period: 'Sep 2024 - Apr 2025',
        tasks: [
            'Scaled a robust automation farm to 10+ concurrent Android emulators on a single dedicated server without performance degradation.',
            'Developed a thread-safe RESTful API (Python/Flask/SQLAlchemy), increasing task processing throughput by 300%.',
            'Eliminated Out-Of-Memory (OOM) crashes and achieved 24/7 uptime by implementing Systemd watchdogs and custom Bash recovery scripts.'
        ]
    },
    {
        company: 'E-commerce / Digital Agency',
        role: 'Middle Front-End Engineer',
        period: 'Dec 2023 - Aug 2024',
        tasks: [
            'Optimized live e-commerce platforms, improving Core Web Vitals (LCP under 1.5s) and boosting organic conversion rates.',
            'Refactored legacy codebase into a scalable, pixel-perfect HTML/React architecture, reducing technical debt.',
            'Collaborated seamlessly with backend teams to integrate third-party APIs and payment gateways ahead of strict deadlines.'
        ]
    },
    {
        company: 'Web Development Studio',
        role: 'Front-End Developer',
        period: 'Jan 2023 - Nov 2023',
        tasks: [
            'Delivered dynamic Single Page Applications (React, Angular, RxJS) ensuring 60 FPS rendering performance.',
            'Developed "Smart Forms" with complex reactive validation logic, reducing user input errors by over 60%.',
            'Implemented real-time search and filtering algorithms (Phrase Analyzer) capable of processing large datasets client-side without lag.'
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