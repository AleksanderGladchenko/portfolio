// src/components/Contact/Contact.tsx
import { ContactSection, Title, Text, EmailLink } from './Contact.styles';
import { FaTelegramPlane, FaEnvelope } from 'react-icons/fa'; // Импорт иконок

const Contact = () => {
    return (
        <ContactSection
            id="contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
        >
            <Title>Get In Touch</Title>
            <Text>
                I'm currently looking for new opportunities and my inbox is always open.
                Whether you have a question or just want to say hi, I’ll get back to you!
            </Text>

            {/* Контейнер для кнопок, чтобы они были рядом */}
            <div style={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>

                {/* Кнопка Email */}
                <EmailLink
                    href="mailto:nininini141998@gmail.com"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <FaEnvelope style={{ marginRight: '8px' }} /> Email
                </EmailLink>

                {/* Кнопка Telegram */}
                <EmailLink
                    href="https://t.me/ai_nfinityg_69"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ background: 'transparent', border: '1px solid #64ffda', color: '#64ffda' }} // Немного другой стиль, чтобы отличалась (опционально)
                >
                    <FaTelegramPlane style={{ marginRight: '8px' }} /> Telegram
                </EmailLink>
            </div>

        </ContactSection>
    );
};

export default Contact;