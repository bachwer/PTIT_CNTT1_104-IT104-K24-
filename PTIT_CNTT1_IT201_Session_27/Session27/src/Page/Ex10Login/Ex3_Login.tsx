import {useNavigate} from "react-router-dom";
import React, {useState} from "react";







export default function login(){
    const navigate = useNavigate();
    const dataLogin = localStorage.getItem("dataLogin");
    const data = dataLogin? JSON.parse(dataLogin) : {};

    const [Login, setData] = useState({
        email: "",
        pass: "",
    })


    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(name, value);
        setData((prev) => ({
                ...prev,
                [name]: value,
            })
        )
    };


    const handleDetail = (email:string) => {
        navigate("/LoginSuccess", {
            state: { email},
        });
    };




    const handleSubmit = () =>{
        if (Login.email === "" || Login.pass === "") return ;
        if (!data) return;



        const dataLoginHere = data.filter((a:any) => a.email === Login.email);
        if (!dataLoginHere) return;
        console.log(dataLoginHere);
        if (dataLoginHere[0].password === Login.pass ){
            console.log("ii");
            handleDetail(Login.email);
        }

    }

    return(
      <div className={"m-auto mt-12 w-[400px] flex flex-col p-10 border-x-zinc-600 shadow-lg gap-10 "}>
          <h1 className={"text-center font-bold text-2xl"}>Login Account</h1>

          <div className={"flex-col gap-2.5"}>
              <label className={"flex flex-col gap-2.5"}>
                  Email:
                  <input
                      onChange={handleInput}
                      value={Login.email}
                      name={"email"}
                      type="email"
                      className="bg-gray-100 border-gray-300 border-2 h-[40px] px-2 rounded-[10px]"
                      placeholder="name@company.com"
                  />
              </label>


              <label className={"flex flex-col gap-2.5"}>
                  Password:
                  <input
                      onChange={handleInput}
                      value={Login.pass}
                      type="password" id="passwordField" name="pass" placeholder="Enter your password"

                      className="bg-gray-100 border-gray-300 border-2 h-[40px] px-2 rounded-[10px]"

                  />
              </label>
          </div>


          <button onClick={handleSubmit} className={"p-5 bg-blue-500 h-[30px] flex justify-center items-center text-cyan-50 rounded-[10px]"}>Login an Account !</button>

          <p className={"text-center"}>
              <span className={"text-gray-400"}> Already have an Account?</span> <span onClick={() => navigate("/register")} className={"text-blue-600 cursor-pointer"}>Register here</span>
          </p>
      </div>
    );
}