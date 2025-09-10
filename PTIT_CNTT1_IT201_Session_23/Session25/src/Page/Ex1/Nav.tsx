import {useNavigate} from "react-router-dom";


export default function NavHome(){
    const navigate = useNavigate();
    return(
        <>

            <div className="nav-buttons">
                <button
                    onClick={() => navigate("/")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Home
                </button>
                <button
                    onClick={() => navigate("/contact")}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                    Contact
                </button>
                <button
                    onClick={() => navigate("/about")}
                    className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                >
                    About
                </button>
            </div>
        </>
    );
}