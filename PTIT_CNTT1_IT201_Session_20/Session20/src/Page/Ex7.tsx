import {useReducer} from "react";



const initialState = {count: 0};

function reducer(state: typeof initialState, action: {type:string}){
    switch (action.type){
        case "increment":
            return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        default:
            return state
    }
}




export default function Ex7(){
    const [state, dispatch] = useReducer(reducer, initialState);


    return(
        <div>
            <h1>Số Đếm: {state.count}</h1>
            <button onClick={() => dispatch({type: "increment"})}>increase</button>
            <button onClick={() => dispatch({type: "decrement"})}>decrease</button>
        </div>
    )
}