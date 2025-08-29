import { useReducer } from "react";


type Action = { type: "increase" };


function reducer(state: number, action: Action): number {
    switch (action.type) {
        case "increase":
            return state + 1;
        default:
            return state;
    }
}

export default function Increase() {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1>{count}</h1>

            <button onClick={() => dispatch({ type: "increase" })}>
                Increase
            </button>
        </div>
    );
}