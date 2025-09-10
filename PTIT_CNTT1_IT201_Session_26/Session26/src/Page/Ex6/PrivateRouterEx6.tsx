import {Navigate, useLocation} from "react-router-dom";
import {Outlet} from "react-router";


export default function (){
    const Location = useLocation();
    const {Auth, email, role} = Location.state;

    return Auth ? <Outlet context={{ email, role }} /> : <Navigate to="/loginEx6" />;
}