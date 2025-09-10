import { useParams } from "react-router-dom";

export default function ProductDetail() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="p-5">
            <h1 className="text-xl font-bold">Product Detail Page</h1>
            <p>Id: <span className="text-blue-600">{id}</span></p>
        </div>
    );
}