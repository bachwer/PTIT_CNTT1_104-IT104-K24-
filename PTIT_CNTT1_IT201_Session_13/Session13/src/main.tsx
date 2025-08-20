import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "next-themes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        {/* attribute="class" -> thêm/bỏ class 'dark' trên <html> */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>
);