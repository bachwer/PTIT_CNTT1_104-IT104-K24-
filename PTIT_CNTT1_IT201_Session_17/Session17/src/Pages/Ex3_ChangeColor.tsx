import {useState} from "react";


export default function Ex3(){
    const [color, setColor] = useState("Black");

    const handleChange = () => {
        setColor (color === "Black" ? "red" : "Black")
    }

    return(
        <div>
            <h2 style={{color: color}}>Tieu De Van Ban</h2>
            <button onClick={handleChange}>Change color</button>
        </div>
    )
}