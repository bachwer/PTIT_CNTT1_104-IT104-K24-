import { createContext, type ReactNode, useState } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {},
});

interface Props {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: Props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };


    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div
                className={theme === "light" ? "light-theme" : "dark-theme"}
                style={{ width: "100vw", height: "100vh", padding: "0", margin: "0" }}
            >
                {children}
            </div>
        </ThemeContext.Provider>

    );
};