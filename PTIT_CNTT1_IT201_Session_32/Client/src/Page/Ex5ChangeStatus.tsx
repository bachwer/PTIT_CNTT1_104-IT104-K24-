
import {changeStatus} from "../store/Text.tsx";
import {useAppDispatch, useAppSelector} from "../hooks.tsx";



export default function(){
    const text = useAppSelector((state) =>state.text)
    const dispatch = useAppDispatch();

    return(
        <div>
            <h1>{text}</h1>
            <button onClick={() => dispatch(changeStatus())}>Change Status</button>
        </div>
    )


}