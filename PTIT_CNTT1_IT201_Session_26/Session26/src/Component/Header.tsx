
import { Link } from "react-router-dom";


export default function Headers(){
    return (
        <header className="header">
            <nav className="flex justify-center gap-4">
                <Link to="/product"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex1</button></Link>
                <Link to="/NameStudent"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex2</button></Link>
                <Link to="/SearchEx3"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex3</button></Link>
                <Link to="/SearchEx3"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex4</button></Link>
                <Link to="/login"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex5</button></Link>
                <Link to="/loginEx6"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex6</button></Link>
                <Link to="/teams"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex7</button></Link>
                <Link to="/lazy"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex8</button></Link>
                <Link to="/contact"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex9</button></Link>
                <Link to="/ListProduct"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Ex10</button></Link>
            </nav>
        </header>
    )
}
