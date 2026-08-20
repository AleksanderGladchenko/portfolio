import { useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaBug, FaTimes } from 'react-icons/fa';
import {
    FloatingButton, ModalOverlay, ModalContainer, CloseIcon,
    Title, Subtitle, Form, TextArea, SubmitButton, StatusMessage
} from './BugReport.styles';

const BugReport = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ message: string; isError: boolean } | null>(null);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setIsSubmitting(true);
        setStatus(null);

        const formData = new FormData(formRef.current);
        // ВАЖНО: Твой скопированный Access Key из Web3Forms
        formData.append("access_key", "48e76fd9-564d-4742-a21c-e6167bb4f7d1");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus({ message: 'Report submitted successfully. Thank you!', isError: false });
                formRef.current.reset();
                setTimeout(() => {
                    setIsOpen(false);
                    setStatus(null);
                }, 3000);
            } else {
                setStatus({ message: data.message || 'Something went wrong.', isError: true });
            }
        } catch (error) {
            setStatus({ message: 'Network error. Please try again.', isError: true });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <FloatingButton
                onClick={() => setIsOpen(true)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                title="Report an Issue"
            >
                <FaBug />
            </FloatingButton>

            <AnimatePresence>
                {isOpen && (
                    <ModalOverlay
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        <ModalContainer
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        >
                            <CloseIcon onClick={() => setIsOpen(false)}>
                                <FaTimes />
                            </CloseIcon>

                            <Title><FaBug /> Report an Issue</Title>
                            <Subtitle>
                                Spotted a bug or have a suggestion? Let me know below.
                                You can include a link to a screenshot (Lightshot, Imgur, etc.) if needed.
                            </Subtitle>

                            <Form ref={formRef} onSubmit={handleSubmit}>
                                <TextArea
                                    name="message"
                                    placeholder="Describe the issue or paste a screenshot link here..."
                                    required
                                />

                                <SubmitButton type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Sending...' : 'Send Report'}
                                </SubmitButton>

                                {status && (
                                    <StatusMessage $isError={status.isError}>
                                        {status.message}
                                    </StatusMessage>
                                )}
                            </Form>
                        </ModalContainer>
                    </ModalOverlay>
                )}
            </AnimatePresence>
        </>
    );
};

export default BugReport;