import { tasks } from "./DataTask";
import { useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    const idPost = id ? parseInt(id) : 0;

    const post = tasks.find((a) => a.id === idPost);

    if (!post) return <h2>Bài viết không tồn tại</h2>;

    return (
        <div>
            <h2 className="font-bold">{post.title}</h2>
            <p className="text-gray-400">{post.description}</p>
        </div>
    );
}