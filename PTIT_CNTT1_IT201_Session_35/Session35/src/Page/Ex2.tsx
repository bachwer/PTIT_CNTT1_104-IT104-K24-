
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {random, resetList} from "../store/State/Ex2RandomList.tsx";

export default function Ex1() {
    const list = useSelector((state: RootState) => state.RandomList);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ fontSize: "2rem", color: "#333" }}>List: [ {list.join(";")} ] </h1>
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
                    onClick={() => dispatch(random())}
                >
                    Increase
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
                    onClick={() => dispatch(resetList())}
                >
                    Reset
                </button>
            </div>
        </div>
    );
}