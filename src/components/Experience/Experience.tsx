import { ExperienceSection, SectionTitle, TimelineContainer, TimelineItem, ContentBox, DateText, RoleTitle, CompanyName, DescriptionList, DescriptionItem } from './Experience.styles';

const jobs = [
    {
        company: 'SaaS Platform / Custom Web Solutions',
        role: 'Technical Architect & Full-Stack Engineer',
        period: 'Dec 2025 - Present',
        tasks: [
            'Built a custom CMS and automated game server telemetry. Replaced manual tracking with a Cron-driven aggregation engine.',
            'Integrated Monobank API. Engineered a fault-tolerant checkout flow with strict server-side transaction validation.',
            'Developed real-time dashboards (Chart.js) to visualize live business metrics.'
        ]
    },
    {
        company: 'Freelance / B2B Projects',
        role: 'Full-Stack Web Developer',
        period: 'May 2025 - Nov 2025',
        tasks: [
            'Wrote a custom Geo-Traffic Shield for WordPress, dropping 10k+ malicious bot requests per month before they hit the app layer.',
            'Refactored heavy SQL queries in an Osclass marketplace. Automated XML feed generation, cutting CPU spikes by 40%.',
            'Set up zero-downtime CI/CD deployments across bare-metal Linux servers using Nginx.'
        ]
    },
    {
        company: 'High-Load Automation Project',
        role: 'Backend & Automation Engineer',
        period: 'Sep 2024 - Apr 2025',
        tasks: [
            'Designed and maintained a headless farm running 10+ concurrent Android emulators on a single Ubuntu server.',
            'Built a thread-safe REST API (Flask/SQLAlchemy) to orchestrate Appium tasks without database deadlocks.',
            'Prevented server OOM crashes by configuring Systemd watchdogs and writing bash recovery scripts.'
        ]
    },
    {
        company: 'E-commerce / Digital Agency',
        role: 'Middle Front-End Engineer',
        period: 'Dec 2023 - Aug 2024',
        tasks: [
            'Migrated legacy e-commerce frontends to React. Squeezed Core Web Vitals (LCP < 1.5s) to improve SEO and UX.',
            'Collaborated with backend teams to integrate third-party APIs and payment gateways within strict sprint deadlines.'
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