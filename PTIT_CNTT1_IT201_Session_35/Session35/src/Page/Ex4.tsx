import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {change} from "../store/State/Ex3Dark.tsx";


export default function() {
    const Mode = useSelector((state:RootState) => state.ChangeMode);
    const dispatch = useDispatch();
    return(
        <div className="flex flex-col items-center justify-center ">
            <button
                className="border-1 p-2 rounded mb-4"
                onClick={() => dispatch(change())}
            >
                List Mode
            </button>

            <div
                className={
                    Mode === false
                        ? "flex justify-around "
                        : "flex flex-col gap-4  "
                }
            >
                {
                    Mode === false? (
                        <div className={"flex flex-col gap-3.5"}>
                            <button className="bg-red-400  w-[200px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[200px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[200px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[200px] h-[40px]">1</button>
                        </div>) : (

                        <div className={"flex gap-3.5"}>
                            <button className="bg-red-400  w-[160px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[160px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[160px] h-[40px]">1</button>
                            <button className="bg-red-400 w-[160px] h-[40px]">1</button>
                        </div>
                    )


                }

            </div>
        </div>
    )
}