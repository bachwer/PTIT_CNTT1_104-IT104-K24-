
import React from "react";

type Language = "english" | "vietnamese";

interface Props {
    value: Language;
    onChange: (l: Language) => void;
}

const LanguageSelect: React.FC<Props> = ({ value, onChange }) => {
    return (
        <div>
            <label style={{ marginRight: 8 }}>Language:</label>
            <select value={value} onChange={(e) => onChange(e.target.value as Language)}>
                <option value="english">english</option>
                <option value="vietnamese">vietnamese</option>
            </select>
        </div>
    );
};

export default LanguageSelect;