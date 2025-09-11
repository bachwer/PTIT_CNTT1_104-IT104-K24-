import {NavLink} from "react-router-dom";


export default function (){


    return(
        <div className={"w-full flex bg-blue-400 justify-around p-2 pl-3 pr-3"}>

            <div className={"flex font-bold"}>
                <NavLink  to={"/Ex1Home"} className={"text-white"}>Home</NavLink>
            </div>
            <div className={"flex text-cyan-50 font-bold"}>
                <NavLink to={"/Ex1About"} className={"text-white"}>About</NavLink>
            </div>

            <div className={"flex text-cyan-50 font-bold"}>
                <NavLink to={"/Ex1Contact"} className={"text-white"}>Contact</NavLink>
            </div>

        </div>
    )
}