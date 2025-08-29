import { useReducer, type ChangeEvent } from "react";

// 1. Định nghĩa action
type Action = {
    type: "SET_GENDER";
    payload: string;
};

// 2. State
interface State {
    gender: string;
}

const initialState: State = { gender: "Nam" };

// 3. Reducer
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "SET_GENDER":
            return { ...state, gender: action.payload };
        default:
            return state;
    }
}

export default function InputRadio() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // 4. Xử lý khi chọn radio
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: "SET_GENDER", payload: e.target.value });
    };

    return (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h2>Chọn giới tính</h2>

            <label style={{ marginRight: "15px" }}>
                <input
                    type="radio"
                    name="gender"
                    value="Nam"
                    checked={state.gender === "Nam"}
                    onChange={handleChange}
                />
                Nam
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Nữ"
                    checked={state.gender === "Nữ"}
                    onChange={handleChange}
                />
                Nữ
            </label>

            <p style={{ marginTop: "20px" }}>
                Giới tính đang chọn: <strong>{state.gender}</strong>
            </p>
        </div>
    );
}