import { useReducer, useEffect, type FormEvent } from "react";

// 1. Kiểu dữ liệu
interface Todo {
    id: number;
    text: string;
}

type Action =
    | { type: "ADD_TODO"; payload: string }
    | { type: "REMOVE_TODO"; payload: number }
    | { type: "SET_TODOS"; payload: Todo[] };

// 2. Reducer
function reducer(state: Todo[], action: Action): Todo[] {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, { id: Date.now(), text: action.payload }];
        case "REMOVE_TODO":
            return state.filter((todo) => todo.id !== action.payload);
        case "SET_TODOS":
            return action.payload;
        default:
            return state;
    }
}

export default function TodoApp() {
    const [todos, dispatch] = useReducer(reducer, []);

    // 3. Load dữ liệu từ localStorage khi mở app
    useEffect(() => {
        const stored = localStorage.getItem("todos");
        if (stored) {
            dispatch({ type: "SET_TODOS", payload: JSON.parse(stored) });
        }
    }, []);

    // 4. Lưu dữ liệu vào localStorage khi todos thay đổi
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // 5. Thêm công việc
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const input = e.currentTarget.elements.namedItem("todo") as HTMLInputElement;
        if (!input.value.trim()) return;
        dispatch({ type: "ADD_TODO", payload: input.value });
        input.value = "";
    };

    // 6. Xóa công việc với confirm
    const handleDelete = (id: number) => {
        const confirmDelete = window.confirm("Bạn có chắc chắn muốn xóa công việc này?");
        if (confirmDelete) {
            dispatch({ type: "REMOVE_TODO", payload: id });
        }
    };

    return (
        <div style={{ maxWidth: "400px", margin: "20px auto" }}>
            <h2>Danh sách công việc</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="Nhập tên công việc"
                    style={{ width: "100%", padding: "8px" }}
                />
            </form>

            <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            border: "1px solid #ddd",
                            padding: "8px",
                            marginBottom: "5px",
                            borderRadius: "4px",
                        }}
                    >
                        <span>{todo.text}</span>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                border: "none",
                                padding: "5px 10px",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Xóa
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}