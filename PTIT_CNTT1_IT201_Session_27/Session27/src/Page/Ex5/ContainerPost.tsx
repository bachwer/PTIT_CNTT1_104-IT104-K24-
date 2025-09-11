import { tasks } from "./DataTask";
import { useNavigate } from "react-router-dom";




export default function PostList() {
    const navigate = useNavigate();

    return (
        <div>
            {tasks.map((a) => (
                <div
                    key={a.id}
                    onClick={() => navigate(`/blog/posts/${a.id}`)}
                    className="border-1 rounded pl-5 p-2 mt-3.5 text-blue-500 border-black cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg"
                >
                    <h2 className="font-bold">{a.title}</h2>
                    <p className="text-gray-400">{a.description}</p>
                </div>
            ))}
        </div>
    );
}