import { ContactSection, Title, Text, EmailLink } from './Contact.styles';

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
            <EmailLink
                href="mailto:nininini141998@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Say Hello
            </EmailLink>
        </ContactSection>
    );
};

export default Contact;