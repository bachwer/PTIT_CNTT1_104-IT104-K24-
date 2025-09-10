import {NavLink} from "react-router-dom";


export default function(){




    return(
        <div className="flex gap-4">
            <NavLink
                to="/Ex6Home"
                className={({ isActive }) =>
                    isActive
                        ? "px-4 py-2 bg-red-600 text-white "
                        : "px-4 py-2 bg-gray-200 text-black "
                }
            >
                Home
            </NavLink>

            <NavLink
                to="/Ex6Product"
                className={({ isActive }) =>
                    isActive
                        ? "px-4 py-2 bg-red-600 text-white "
                        : "px-4 py-2 bg-gray-200 text-black "
                }
            >
                Product
            </NavLink>

            <NavLink
                to="/Ex6Detail"
                className={({ isActive }) =>
                    isActive
                        ? "px-4 py-2 bg-red-600 text-white "
                        : "px-4 py-2 bg-gray-200 text-black "
                }
            >
                Detail
            </NavLink>
        </div>
    )
}