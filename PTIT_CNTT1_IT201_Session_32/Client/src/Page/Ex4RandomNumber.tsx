import {useAppDispatch, useAppSelector} from "../hooks.tsx";
import {random} from "../store/Counter.tsx"



export default function (){
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();



    return(
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(random())}>random</button>

        </div>
    )
}