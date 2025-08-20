import React, {useState} from "react";


interface Todo {
    id: number,
    name:string,
    assign: string,
    status: boolean,
    created: Date;
}

const TodoList: React.FC = () => {
    const [todos] = useState<Todo[]>([
        {id: 1, name:"Hoc React", assign: "Nguyen Vna A", status: false, created: new Date()},
        {id: 2, name:"Hoc JS", assign: "Nguyen Vna B", status: true, created: new Date()},
        {id: 3, name:"Hoc CSS", assign: "Nguyen Vna C", status: false, created: new Date()},
        {id: 4, name:"Hoc HTML", assign: "Nguyen Vna D", status: true, created: new Date()},
    ]);
    const formatDate = (d: Date): string => {
        const pad = (n: number) => n.toString().padStart(2, "0");
        return (
            `${pad(d.getDate())}/${pad(d.getMonth() + 1)}/${d.getFullYear()} ` +
            `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`
        );
    };

    return (
        <div>
            <h2>Danh sách công việc</h2>
            <table border={1} cellPadding={8}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tên công việc</th>
                    <th>Giao cho</th>
                    <th>Trạng thái</th>
                    <th>Ngày tạo</th>
                </tr>
                </thead>
                <tbody>
                {todos.map((t) => (
                    <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>{t.assign}</td>
                        <td>{t.status ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
                        <td>{formatDate(t.created)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default TodoList;