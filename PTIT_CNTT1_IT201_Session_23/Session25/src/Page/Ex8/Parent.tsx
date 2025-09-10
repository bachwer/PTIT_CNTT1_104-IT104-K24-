import {useState} from "react";
import {useNavigate} from "react-router-dom";



export  type Product = {
    id: number;
    UserName: string;
    email:string;
    address: string;
}



export default function (){


    const [product] = useState<Product[]>([
        {
            id: 1,
            UserName: "Nguyễn Van A",
            email: "anguyen@gmail.com",
            address: "Ha noi",
        },
        {
            id: 3,
            UserName: "Nguyễn Van B",
            email: "anguyen@gmail.com",
            address: "Ha noi",
        },
        {
            id: 2,
            UserName: "Nguyễn Van C",
            email: "anguyen@gmail.com",
            address: "Ha noi",
        }
    ])
    const navigate = useNavigate();

    const handleDetail = (id:number, UserName:string, email:string, address:string ) => {
        navigate("/detail", {
            state: {id, UserName, email, address },
        });
    };


    return(
        <div className={"flex flex-wrap justify-center"}>
            {
                product.map(a => (
                    <div className="border rounded-lg shadow-md p-4 m-2 w-64 ">
                        <h1 className="text-gray-700 font-semibold">Id: {a.id}</h1>
                        <h1 className="text-gray-700">UserName: {a.UserName}</h1>
                        <h1 className="text-gray-700">Email: {a.email}</h1>
                        <h1 className="text-gray-700">Address: {a.address}</h1>
                        <button onClick={() => handleDetail(a.id, a.UserName, a.email, a.address)}

                                className="mt-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-1 px-2 rounded">
                            Xem chi tiết
                        </button>
                    </div>
                ))
            }

        </div>
    )
}