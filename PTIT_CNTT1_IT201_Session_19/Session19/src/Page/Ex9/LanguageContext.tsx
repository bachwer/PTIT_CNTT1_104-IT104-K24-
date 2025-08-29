import { createContext, useState, type ReactNode } from "react";

interface LanguageContextType {
    language: string;
    changeLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    changeLanguage: () => {},
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState("en");

    const changeLanguage = (lang: string) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};