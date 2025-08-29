import { LanguageProvider } from "./LanguageContext";
import Dropdown from "./DropDown.tsx";
import Content from "./Content";

export default function App() {
    return (
        <LanguageProvider>
            <div style={{ padding: "20px" }}>
                <h1>React Context Demo - Language</h1>
                <Dropdown />
                <Content />
            </div>
        </LanguageProvider>
    );
}