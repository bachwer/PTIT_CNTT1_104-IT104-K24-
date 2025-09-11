import Menu from "./Menu";
import { Outlet } from "react-router-dom";

export default function Ex5Post() {
    return (
        <div className="flex">
            <Menu />
            <h1>ádasd</h1>
            <div className="flex ml-[15%] w-[85%] p-5">

                <Outlet />
            </div>
        </div>
    );
}