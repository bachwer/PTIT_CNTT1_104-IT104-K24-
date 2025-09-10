import {useNavigate} from "react-router-dom";
import React, {useState} from "react";




// @ts-ignore
export default function Register(){
    const navigate = useNavigate();
    const existingData = JSON.parse(localStorage.getItem("dataLogin") || "[]");

    const [infor, setIn] = useState({
        email: "",
        password: "",
        conFirmPas: "",

    })


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setIn((prev) => ({
            ...prev,
            [name]: value,
        })
        )
    };

    const handleSubmit =() =>{
        if(infor.email === "" || infor.password != infor.conFirmPas || infor.password === "") return;


        existingData.push(infor);


        localStorage.setItem("dataLogin", JSON.stringify(existingData));

        setIn({
            email: "",
            password: "",
            conFirmPas: "",
        })

    }



    return(
        <div className={"m-auto mt-12 w-[400px] flex flex-col p-10 border-x-zinc-600 shadow-lg gap-10 "}>
            <h1 className={"text-center font-bold text-2xl"}>Login Account</h1>

            <div className={"flex-col gap-2.5"}>
                <label className={"flex flex-col gap-2.5"}>
                    Email:
                    <input
                        value={infor.email}
                        type="email"
                        name={"email"}
                        className="bg-gray-100 border-gray-300 border-1 h-[40px] px-2 rounded-[10px]"
                        placeholder="name@company.com"
                        onChange={handleInput}
                    />
                </label>


                <label className={"flex flex-col gap-2.5"}>
                    Password:
                    <input
                        value={infor.password}
                        type="password" id="passwordField" name="password" placeholder="Enter your password"

                        className="bg-gray-100 border-gray-300 border-1 h-[40px] px-2 rounded-[10px]"
                        onChange={handleInput}
                    />
                </label>


                <label className={"flex flex-col gap-2.5"}>
                    Confirm Password:
                    <input
                        value={infor.conFirmPas}
                        type="password"  name="conFirmPas" placeholder="Enter your password"

                        className="bg-gray-100 border-gray-300 border-1 h-[40px] px-2 rounded-[10px]"
                        onChange={handleInput}
                    />
                </label>
            </div>


            <button onClick={handleSubmit} className={"p-5 bg-blue-500 h-[30px] flex justify-center items-center text-cyan-50 rounded-[10px]"}>Create an Account !</button>

            <p className={"text-center"}>
                <span className={"text-gray-400"}> Already have an Account?</span> <span onClick={() => navigate("/login")} className={"text-blue-600 cursor-pointer"}>Sign up here</span>
            </p>
        </div>
    );
}