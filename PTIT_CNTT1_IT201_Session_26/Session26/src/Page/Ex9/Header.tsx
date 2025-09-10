import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex gap-6 p-4 bg-gray-200">
            <NavLink
                to="/contact"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "")}
            >
                Contact
            </NavLink>
            <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "")}
            >
                About
            </NavLink>
            <NavLink
                to="/post"
                className={({ isActive }) => (isActive ? "text-blue-600 font-bold" : "")}
            >
                Post
            </NavLink>
        </nav>
    );
}
