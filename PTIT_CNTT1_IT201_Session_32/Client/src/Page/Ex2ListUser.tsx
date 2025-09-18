
import { useAppSelector, useAppDispatch } from "../hooks";
import { removeUser } from "../store/userSlice";

export default function ListUser() {
    const users = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch();

    return (
        <div style={{ padding: "20px" }}>
            <h2>👥 Danh sách User</h2>

            <table
                border={1}
                cellPadding={10}
                style={{ borderCollapse: "collapse", width: "100%" }}
            >
                <thead>
                <tr style={{ background: "#f2f2f2" }}>
                    <th>Id</th>
                    <th>Tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Địa chỉ</th>
                    <th>Chức năng</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                        <td>{user.gender}</td>
                        <td>{user.dateBirth}</td>
                        <td>{user.address}</td>
                        <td>
                            <button
                                onClick={() => alert("Chức năng sửa user " + user.id)}
                                style={{ marginRight: "10px" }}
                            >
                                Sửa
                            </button>
                            <button onClick={() => dispatch(removeUser(user.id))}>
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}