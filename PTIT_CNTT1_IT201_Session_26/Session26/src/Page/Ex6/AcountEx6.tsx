import {useOutletContext} from "react-router-dom";



type ContextType = {
    email: string;
    role: string;
};

export default function (){

    const { email, role } = useOutletContext<ContextType>();


    return(
        <div>
            <h1>Account Page</h1>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    )
}