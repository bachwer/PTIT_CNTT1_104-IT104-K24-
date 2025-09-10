import {useLocation} from "react-router-dom";


export default function (){
    const location = useLocation();
    const { id, UserName, email, address } = location.state || {};



    return(
        <div className="max-w-md w-full bg-white border border-gray-300 rounded-2xl shadow-lg p-6 m-4">
            {/* Header */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
                Thông tin chi tiết
            </h2>

            {/* Nội dung */}
            <div className="space-y-3">
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">ID:</span> {id}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">UserName:</span> {UserName}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Email:</span> {email}
                </p>
                <p className="text-gray-700">
                    <span className="font-semibold text-gray-800">Address:</span> {address}
                </p>
            </div>
        </div>
    )

}





