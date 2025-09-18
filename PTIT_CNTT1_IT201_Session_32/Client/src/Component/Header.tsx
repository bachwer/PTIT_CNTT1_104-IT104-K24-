import { Link } from "react-router-dom";


export default function Header(){
    return (
        <header className="header">
            <nav className="flex justify-center gap-4">

                <Link to="/"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex1</button></Link>
                <Link to="/ex2"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex2</button></Link>
                <Link to="/ex3"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex3</button></Link>
                <Link to="/ex4"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex4</button></Link>
                <Link to="/ex5"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex5</button></Link>
                <Link to="/ex6"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex6</button></Link>
                <Link to="/ex7"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex7</button></Link>
                <Link to="/ex8"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex8</button></Link>
                <Link to="/ex9"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex9</button></Link>
                <Link to="/ex10"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex10</button></Link>
            </nav>
        </header>
    )
}