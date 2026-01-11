import { ExperienceSection, SectionTitle, TimelineContainer, TimelineItem, ContentBox, DateText, RoleTitle, CompanyName, DescriptionList, DescriptionItem } from './Experience.styles';

const jobs = [
    {
        company: 'Freelance / High-Load Project',
        role: 'Full Stack Engineer',
        period: 'Nov 2025 - Present',
        tasks: [
            'Architected a scalable automation farm running 10+ Android emulators.',
            'Developed a thread-safe RESTful API using Flask & SQLAlchemy.',
            'Optimized system stability with Systemd watchdogs to prevent OOM.',
        ]
    },
    {
        company: 'IT Company',
        role: 'Front-End Developer',
        period: 'Feb 2025 - Jul 2025',
        tasks: [
            'Developed complex, responsive HTML emails from scratch.',
            'Ensured cross-client compatibility (Gmail, Outlook) using MJML.',
            'Optimized rendering performance for high-volume campaigns.'
        ]
    },
    {
        company: 'E-commerce Project',
        role: 'Junior Front-End Developer',
        period: 'Jan 2024 - Dec 2024',
        tasks: [
            'Maintained a live e-commerce platform with 99.9% availability.',
            'Resolved layout bugs and implemented UI enhancements.',
            'Collaborated with senior developers on payment gateways.'
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
                        transition={{ delay: index * 0.2, duration: 0.5 }}
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