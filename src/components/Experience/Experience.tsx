import { useTranslation } from 'react-i18next';
import { ExperienceSection, SectionTitle, TimelineContainer, TimelineItem, ContentBox, DateText, RoleTitle, CompanyName, DescriptionList, DescriptionItem } from './Experience.styles';

interface Job {
    company: string;
    role: string;
    period: string;
    tasks: string[];
}

const Experience = () => {
    const { t } = useTranslation();

    // Получаем массив jobs напрямую из JSON с помощью returnObjects: true
    const jobs = t('experience.jobs', { returnObjects: true }) as Job[];

    return (
        <ExperienceSection
            id="experience"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <SectionTitle>{t('experience.titlePart1')} <span>{t('experience.titlePart2')}</span></SectionTitle>

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