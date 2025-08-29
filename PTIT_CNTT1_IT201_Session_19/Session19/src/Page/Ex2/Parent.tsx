import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "./Context.tsx";
import Button from "./button.tsx";
import "./Ex2.css";

export default function Parent() {
    const { theme } = useContext(ThemeContext);

    return (
        <ThemeProvider>
            <Button />
            <div>
                <p style={{ color: theme === "light" ? "black" : "white" }}>
                    This is the content area.
                </p>
            </div>
        </ThemeProvider>
    );
}