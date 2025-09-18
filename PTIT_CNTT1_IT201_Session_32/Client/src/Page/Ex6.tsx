import {useAppDispatch, useAppSelector} from "../hooks.tsx";
import {changeMode} from "../store/DarkMode.tsx";

export default function DarkMode() {
    const darkMode = useAppSelector((state) => state.darkMode)
    const dispatch = useAppDispatch();

    return (
        <div
            style={{
                minHeight: "100vh",
                backgroundColor: darkMode ? "#121212" : "white",
                color: darkMode ? "white" : "black",
                transition: "all 0.3s ease"
            }}
        >
            <label style={{ display: "block", padding: "10px" }}>
                <input
                    type="checkbox"
                    checked={darkMode}
                    onChange={() => dispatch(changeMode())}
                />{" "}

            </label>

        </div>
    );
}