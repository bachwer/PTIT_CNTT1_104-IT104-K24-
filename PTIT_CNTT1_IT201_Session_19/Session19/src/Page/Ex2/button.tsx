import {useContext} from "react";
import {ThemeContext} from "./Context.tsx";


export default function Button() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <button onClick={toggleTheme}>
                Switch to {theme === "light" ? "Dark" : "Light"} Mode
            </button>
            <p>Current, theme: {theme}</p>
        </div>
    )
}
