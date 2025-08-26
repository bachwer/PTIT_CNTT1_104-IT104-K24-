import {useState} from 'react'

export default function Ex1() {
    const [name] = useState("Nguyen Van A");

    return(
        <div style={{textAlign: "center"}}>
            <h1>{name}</h1>
        </div>
    )
}