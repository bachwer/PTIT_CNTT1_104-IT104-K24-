"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export const ModeToggle: React.FC = () => {
    const { setTheme } = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => setAnchorEl(null);

    const choose = (t: "light" | "dark" | "system") => () => {
        setTheme(t);
        handleClose();
    };

    return (
        <>
            <Button
                variant="outlined"
                size="small"
                onClick={handleClick}
                aria-controls={open ? "theme-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ minWidth: 40, padding: "6px 10px", position: "relative" }}
            >
                {/* Icon Sun/Moon dùng class Tailwind để ẩn/hiện theo theme */}
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
            <Menu
                id="theme-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
                <MenuItem onClick={choose("light")}>Light</MenuItem>
                <MenuItem onClick={choose("dark")}>Dark</MenuItem>
                <MenuItem onClick={choose("system")}>System</MenuItem>
            </Menu>
        </>
    );
};