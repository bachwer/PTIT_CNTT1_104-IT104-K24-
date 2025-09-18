
import {useAppSelector, useAppDispatch} from "../hooks.tsx";
import {decrease, increate} from "../store/Counter.tsx"

export default function(){
    const count = useAppSelector((state) => state.counter.count);
    const dispatch = useAppDispatch();


    return(
        <div>
            <h1>{count}</h1>

            <div>
                <button onClick={() => dispatch(increate())}>+</button>
                <button  onClick={() => dispatch(decrease())}>-</button>
            </div>
        </div>
    )
}