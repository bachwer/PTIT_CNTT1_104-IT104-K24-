import { Outlet, Navigate, useLocation } from "react-router-dom";

export default function PrivateRouter() {
    const location = useLocation();
    const Auth = location.state?.Auth;

    return Auth ? <Outlet /> : <Navigate to="/login" />;
}