import { useReducer, type ChangeEvent } from "react";


type Action = {
    type: "SET_TEXT";
    payload: string;
};


interface State {
    text: string;
}

const initialState: State = { text: "" };


function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_TEXT":
            return { ...state, text: action.payload };
        default:
            return state;
    }
}

export default function InputText() {

    const [state, dispatch] = useReducer(reducer, initialState);


    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_TEXT", payload: e.target.value });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Nhập chuỗi và hiển thị</h2>
            <input
                type="text"
                value={state.text}
                onChange={handleChange}
                placeholder="Nhập chuỗi..."
            />
            <p style={{ marginTop: "15px" }}>
                Chuỗi đã nhập: <strong>{state.text}</strong>
            </p>
        </div>
    );
}