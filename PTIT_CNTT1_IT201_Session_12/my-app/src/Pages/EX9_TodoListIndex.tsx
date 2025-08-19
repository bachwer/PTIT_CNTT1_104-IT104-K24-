import React, {useState} from "react";
import "../index.css"




let id = 1;

const TodoList: React.FC = () => {
    const [task, setTask] = useState<string>("");
    let [todos, setTodos] = useState([{id: 1, content: "Ăn Tối", checked: false}]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        const newTask = {id:++id,content: task, checked: false};
        setTodos([...todos, newTask]);

        setTask("");
    }

    const toggleTodo = (id: number) => {
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        setTodos(updated);
    };

    const Delete = (id: number)=> {
        const updated = todos.filter(a => a.id !== id);
        setTodos(updated);
        console.log("d")
    }

        return (
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card">
                                <div className="card-body p-5">
                                    <h3 style={{textAlign: "center", marginBottom: "40px"}}>
                                        Quản lý công việc
                                    </h3>

                                    {/* Form thêm công việc */}
                                    <form className="d-flex justify-content-center align-items-center mb-4">
                                        <div className="form-outline flex-fill">
                                            <input type="text" id="form2" className="form-control"
                                                   value={task}
                                                   onChange={(e) => setTask(e.target.value)} // cập nhật state


                                            />
                                            <label className="form-label" htmlFor="form2">
                                                Thêm công việc
                                            </label>
                                        </div>
                                        <button type="button" className="btn btn-info
                                        ms-2" onClick={handleAdd}>Thêm</button>

                                    </form>

                                    {/* Tabs */}
                                    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <a className="nav-link active">Tất cả công việc</a>
                                        </li>
                                    </ul>

                                    {/* Danh sách công việc */}
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active">
                                            <ul className="list-group mb-0">


                                                {
                                                    Array.from({length: todos.length}, (_, i) => (
                                                        <li key={i}
                                                            className="list-group-item d-flex align-items-center border-0 mb-2 rounded justify-content-between"
                                                            style={{backgroundColor: "#f4f6f7"}}
                                                        >
                                                            <div>
                                                                <input
                                                                    className="form-check-input me-2"
                                                                    type="checkbox"
                                                                    onChange={() => toggleTodo(todos[i].id)}
                                                                />

                                                                {todos[i].checked ? (
                                                                    <s>{todos[i].content}</s>
                                                                ) : (
                                                                    todos[i].content
                                                                )}
                                                            </div>
                                                            <div>
                                                                <a href="#!" className="text-info"
                                                                   title="Sửa công việc">
                                                                    <i className="fas fa-pencil-alt me-3"></i>
                                                                </a>

                                                                <a href="#!" className="text-danger"
                                                                   title="Xóa công việc">
                                                                    <i className="fas fa-trash-alt"
                                                                       onClick={() => Delete(todos[i].id)}
                                                                      >
                                                                    </i>
                                                                </a>

                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                    {/* End danh sách */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );

};

export default TodoList;