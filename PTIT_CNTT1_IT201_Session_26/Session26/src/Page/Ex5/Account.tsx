import {useNavigate} from "react-router-dom";

export default function Account() {
    const navigate = useNavigate()

    const handle = () => {
        const Auth = false;

        navigate("/account", {
            state: {Auth}
        })
    }

    return (
        <div className="flex flex-col items-center mt-10">
            <h1 className="text-2xl font-bold">Account Page</h1>
            <p>Xin chào, đây là trang thông tin tài khoản.</p>

            <button
                onClick={handle}
                className={"bg-blue-500 text-white p-2 rounded-2xl cursor-pointer hover:bg-blue-300"}>Sign Out</button>

        </div>
    );
}