import {useNavigate} from "react-router-dom";

export default function () {
    const navigate = useNavigate();




    const handle = () => {
        const Auth = true;

        navigate("/account", {
            state: {Auth}
        })
    }


    return(
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold">Login Page</h1>
            <p>Bạn cần đăng nhập để truy cập Account</p>

            <button
                onClick={handle}
                className={"bg-blue-500 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-300"}>Login</button>

        </div>
    )
}