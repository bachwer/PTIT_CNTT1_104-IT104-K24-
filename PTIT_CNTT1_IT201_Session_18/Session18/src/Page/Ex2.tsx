import { useMemo } from "react";

interface User {
    id: number;
    name: string;
    age: number;
}

export default function UserList() {

    const users: User[] = [
        { id: 1, name: "An", age: 17 },
        { id: 2, name: "Bình", age: 20 },
        { id: 3, name: "Chi", age: 25 },
        { id: 4, name: "Dung", age: 15 },
        { id: 5, name: "Hà", age: 30 },
    ];


    const filteredUsers = useMemo(() => {
        console.log("Filtering users..."); // để kiểm tra khi nào chạy
        return users.filter((u) => u.age > 18);
    }, [users]);


    return (
        <div>
            <h2>Danh sách người dùng trên 18 tuổi:</h2>
            <ul>
                {filteredUsers.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} tuổi
                    </li>
                ))}
            </ul>
        </div>
    );
}