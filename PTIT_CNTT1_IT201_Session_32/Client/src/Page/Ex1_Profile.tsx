import { useSelector } from "react-redux";
import type { RootState } from "../store"; //

export default function Profile() {
    const user = useSelector((state: RootState) => state.user)

    return (
        <div style={{ padding: "20px", border: "1px solid #ccc", width: "300px" }}>
            <h2>👤 Profile</h2>
            <p><b>ID:</b> {user.id}</p>
            <p><b>User Name:</b> {user.userName}</p>
            <p><b>Gender:</b> {user.gender}</p>
            <p><b>Date of Birth:</b> {user.dateBirth}</p>
            <p><b>Address:</b> {user.address}</p>
        </div>
    );
}