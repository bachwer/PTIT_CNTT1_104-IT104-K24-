import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex gap-4 p-4 bg-gray-200">
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800"
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/product"
                className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800"
                }
            >
                Product
            </NavLink>

            <NavLink
                to="/detail"
                className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : "text-gray-800"
                }
            >
                Detail
            </NavLink>
        </nav>
    );
}