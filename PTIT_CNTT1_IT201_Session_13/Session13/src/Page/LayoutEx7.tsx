import React from "react";
import { ModeToggle } from "./LayoutEx7_ModeToggle";
import { useTheme } from "next-themes";

const LayoutEx7: React.FC = () => {
    const { resolvedTheme } = useTheme(); // hook theo dõi theme hiện tại

    return (
        <div
            className="layout-ex7"
            style={{
                minHeight: "100vh",
                background: "var(--bg)",
                color: "var(--fg)",
                transition: "background-color .2s ease, color .2s ease",
            }}
        >
            <header
                style={{ display: "flex", justifyContent: "flex-end", padding: 12 }}
            >
                <ModeToggle />
            </header>

            <main style={{ padding: 16 }}>
                <h1>{resolvedTheme === "dark" ? "Nền Đen" : "Nền Sáng"}</h1>
            </main>
        </div>
    );
};

export default LayoutEx7;