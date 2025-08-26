import {type ChangeEvent, useState} from "react";


export default function Ex5(){
    let [text, setText] = useState("")


    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(
            text = e.target.value
        )
    }

    return(
        <div>
            <input onChange={handleInput}/>
            <h3>{text}</h3>
        </div>
    )
}