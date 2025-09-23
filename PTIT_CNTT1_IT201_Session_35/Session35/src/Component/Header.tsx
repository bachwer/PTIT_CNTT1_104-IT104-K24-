import { Link } from "react-router-dom";
import "../index.css"

export default function Headers(){
    return (
        <header className="header">
            <nav className="flex justify-center gap-4">
                <Link to="/Ex1"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex1</button></Link>
                <Link to="/Ex2"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex2</button></Link>
                <Link to="/Ex3"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex3</button></Link>
                <Link to="/Ex4"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex4</button></Link>
                <Link to="/Ex5"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex5</button></Link>
                <Link to="/Ex6"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex6</button></Link>
                <Link to="/Ex7"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex7</button></Link>
                <Link to="/Ex8"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex8</button></Link>
                <Link to="/Ex9"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex9</button></Link>
                <Link to="/Ex10"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex10</button></Link>
            </nav>
        </header>
    )
}