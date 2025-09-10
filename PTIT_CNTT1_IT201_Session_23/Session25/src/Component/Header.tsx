import { Link } from "react-router-dom";
import "../index.css"

export default function Headers(){
    return (
        <header className="header">
            <nav className="flex justify-center gap-4">
                <Link to="/"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex1</button></Link>
                <Link to="/Contact2"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex2</button></Link>
                <Link to="/Login"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex3</button></Link>
                <Link to="/register"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex4</button></Link>
                <Link to="/NotFound404"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex5</button></Link>
                <Link to="/Ex6Home"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex6</button></Link>
                <Link to="/CustomLick"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex7</button></Link>
                <Link to="/Ex8Home"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex8</button></Link>
                <Link to="/Login"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex9</button></Link>
                <Link to="/ex10"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex10</button></Link>
            </nav>
        </header>
    )
}