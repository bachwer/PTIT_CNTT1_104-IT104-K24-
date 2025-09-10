import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function (){
    const [name, setName] = useState("");
    const navigate = useNavigate();


    const HandleSubmit = () => {
        if (name.trim() !== ""){
            navigate(`/student?studentName=${encodeURIComponent(name)}`)
        }
    }


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(
             e.target.value,
        )
    }


    return(
        <div className={"flex gap-3 justify-center mt-[150px]"}>


            <input
                onChange={handleInput}
                value={name}
                className={"p-2 border-1 w-[400px] rounded-md border-gray-300"}
                placeholder={"Search name"}
            />
            <button
                onClick={HandleSubmit}
                className={"p-2 pl-5 pr-5 bg-blue-500 text-white rounded-md hover:bg-blue-400  cursor-pointer"}
            >Search</button>

        </div>
    )
}