import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {change} from "../store/State/Ex3Dark.tsx";


export default function(){
    const ChangeMode = useSelector((state: RootState) => state.ChangeMode);
    const dispatch = useDispatch();


    return(
        <div>
            {ChangeMode === false ? (  <div className={"w-[300px] h-[250px] border border-gray-200 m-auto mt-[5%] flex justify-center items-center"}>
                    <button
                        onClick={() => dispatch(change())}
                        className={"rounded border-1 border-gray-200 w-[60px] h-[40px] cursor-pointer"}>Light</button>
                </div>):
                (
                    <div className={"w-[300px] h-[250px] border bg-black border-gray-200 m-auto mt-[5%] flex justify-center items-center"}>
                        <button
                            onClick={() => dispatch(change())}
                            className={"rounded border-1 bg-black text-white border-gray-400 w-[60px] h-[40px] cursor-pointer"}>Light</button>
                    </div>
                )

            }

        </div>


    )
}