import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Content() {
    const { language } = useContext(LanguageContext);

    return (
        <div style={{ marginTop: "20px" }}>
            {language === "en" ? (
                <p>Hello, welcome to our website!</p>
            ) : (
                <p>Xin chào, chào mừng bạn đến với website của chúng tôi!</p>
            )}
        </div>
    );
}