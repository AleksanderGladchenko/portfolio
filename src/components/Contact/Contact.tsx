import { ContactSection, Title, Subtitle, ButtonContainer, ContactButton, Footer } from './Contact.styles';
import { FaTelegramPlane, FaEnvelope, FaArrowUp, FaCalendarCheck } from 'react-icons/fa';

const Contact = () => {
    return (
        <ContactSection
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <Title>Let’s Work Together.</Title>
            <Subtitle>
                I'm always open to discussing complex architectural challenges, high-load systems, or new engineering roles. Drop me a line.
            </Subtitle>

            <ButtonContainer>
                {/* ГЛАВНАЯ ВОРОНКА: Звонок */}
                <ContactButton
                    href="https://calendly.com/nininini141998/15-min-sync"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary"
                    whileTap={{ scale: 0.95 }}
                >
                    <FaCalendarCheck /> Book a 15-min Sync
                </ContactButton>

                <ContactButton
                    href="mailto:nininini141998@gmail.com"
                    className="secondary"
                    whileTap={{ scale: 0.95 }}
                >
                    <FaEnvelope /> Email Me
                </ContactButton>

                <ContactButton
                    href="https://t.me/ai_nfinityg_69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="secondary"
                    whileTap={{ scale: 0.95 }}
                >
                    <FaTelegramPlane /> Telegram
                </ContactButton>
            </ButtonContainer>

            <Footer>
                <p>Designed & Built by Alexander.</p>
                <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                    <FaArrowUp /> Back to Top
                </div>
            </Footer>
        </ContactSection>
    );
};

export default Contact;