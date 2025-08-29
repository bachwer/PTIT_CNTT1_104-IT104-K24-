import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export default function Dropdown() {
    const { language, changeLanguage } = useContext(LanguageContext);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        changeLanguage(e.target.value);
    };

    return (
        <div>
            <label>Choose Language: </label>
            <select value={language} onChange={handleChange}>
                <option value="en">English</option>
                <option value="vi">Tiếng Việt</option>
            </select>
        </div>
    );
}