import { ContactSection, Title, Subtitle, ButtonContainer, ContactButton, Footer } from './Contact.styles';
import { FaTelegramPlane, FaEnvelope, FaArrowUp } from 'react-icons/fa'; // Убрал FaGithub

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
                Have a project in mind or just want to discuss the latest tech?
                My inbox is open for new opportunities.
            </Subtitle>

            <ButtonContainer>
                {/* Оставили только Email и Telegram */}
                <ContactButton
                    href="mailto:nininini141998@gmail.com"
                    className="primary"
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