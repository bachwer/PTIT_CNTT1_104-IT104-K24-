import { Link, useLocation } from "react-router-dom";

export default function CustomLink() {
    const location = useLocation();


    const isValid = location.pathname === "/home-page";

    return (
        <div>
            <Link to={isValid ? "/home-page" : "/not-found"}>
                Go to Home
            </Link>
        </div>
    );
}