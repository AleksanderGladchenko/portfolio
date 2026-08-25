import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SwitcherContainer, LangButton } from './LanguageSwitcher.styles';

const LANGUAGES = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'es', label: 'ES' },
    { code: 'ja', label: 'JA' },
    { code: 'zh', label: 'ZH' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLang = i18n.resolvedLanguage || i18n.language || 'en';
    const [isSwitching, setIsSwitching] = useState(false);

    const handleSwitch = (langCode: string) => {
        if (langCode === currentLang || isSwitching) return;
        setIsSwitching(true);

        // Находим контейнер MainContent, чтобы хедер оставался статичным
        const mainContent = document.querySelector('main');

        if (mainContent) {
            mainContent.style.transition = 'opacity 0.3s ease-in-out';
            mainContent.style.opacity = '0';
        }

        // Ждем, пока контент полностью погаснет
        setTimeout(() => {
            // Подставляем новые словари
            i18n.changeLanguage(langCode);

            // Проявляем переведенный контент
            if (mainContent) {
                mainContent.style.opacity = '1';
            }

            // Снимаем блокировку кнопки
            setTimeout(() => {
                setIsSwitching(false);
            }, 300);
        }, 300);
    };

    return (
        <SwitcherContainer>
            {LANGUAGES.map((lang) => (
                <LangButton
                    key={lang.code}
                    $isActive={currentLang.startsWith(lang.code)}
                    onClick={() => handleSwitch(lang.code)}
                    disabled={isSwitching}
                >
                    {lang.label}
                </LangButton>
            ))}
        </SwitcherContainer>
    );
};

export default LanguageSwitcher;