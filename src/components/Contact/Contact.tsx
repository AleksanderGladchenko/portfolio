import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ContactSection, Title, Subtitle, ButtonContainer, ContactButton, Footer } from './Contact.styles';
import { FaTelegramPlane, FaEnvelope, FaCalendarCheck, FaArrowLeft } from 'react-icons/fa';

const Contact = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <ContactSection id="contact" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Title>{t('contact.title')}</Title>
            <Subtitle>{t('contact.subtitle')}</Subtitle>

            <ButtonContainer>
                <ContactButton href="https://calendly.com/nininini141998/15-min-sync" target="_blank" rel="noopener noreferrer" className="primary" whileTap={{ scale: 0.95 }}>
                    <FaCalendarCheck /> {t('contact.book')}
                </ContactButton>

                <ContactButton href="mailto:nininini141998@gmail.com" className="secondary" whileTap={{ scale: 0.95 }}>
                    <FaEnvelope /> {t('contact.email')}
                </ContactButton>

                <ContactButton href="https://t.me/ai_nfinityg_69" target="_blank" rel="noopener noreferrer" className="secondary" whileTap={{ scale: 0.95 }}>
                    <FaTelegramPlane /> {t('contact.telegram')}
                </ContactButton>
            </ButtonContainer>

            <Footer>
                <p>{t('contact.designedBy')}</p>
                {/* Теперь кнопка возвращает на главную страницу */}
                <div style={{ cursor: 'pointer', marginTop: '10px' }} onClick={() => navigate('/')}>
                    <FaArrowLeft /> Back to Home
                </div>
            </Footer>
        </ContactSection>
    );
};

export default Contact;