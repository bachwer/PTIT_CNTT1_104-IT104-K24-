
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {toggleLanguage} from "../store/State/languageSlice.tsx";

export default function LanguageSwitcher() {
    const dispatch = useAppDispatch();
    const language = useAppSelector((state) => state.language);

    return (
        <div className="p-4">
            <p>Current Language: {language === "en" ? "English Academy" : "Học Viện Rikkei"}</p>
            <button
                onClick={() => dispatch(toggleLanguage())}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            >
                Switch Language
            </button>
        </div>
    );
}