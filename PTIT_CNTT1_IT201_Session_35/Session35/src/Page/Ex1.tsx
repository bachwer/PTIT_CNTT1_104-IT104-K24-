import {decrease, increase, reset} from "../store/State/Ex1Count.tsx";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";

export default function Ex1() {
    const Count = useSelector((state: RootState) => state.Count);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ fontSize: "2rem", color: "#333" }}>Count: {Count}</h1>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                <button
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        background: "green",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => dispatch(increase())}
                >
                    Increase
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        background: "orange",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => dispatch(decrease())}
                >
                    Decrease
                </button>
                <button
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        background: "red",
                        color: "white",
                        borderRadius: "5px",
                        cursor: "pointer",
                    }}
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}