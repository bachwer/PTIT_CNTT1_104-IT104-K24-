import {useState} from "react"


export default function Ex4(){
    const [status, SetStatus] = useState("block")
    const [text, setText] = useState("Ẩn")


    const handleBtn = () => {
        SetStatus(status === "block" ? "none" : "block")
        setText( text === "Ẩn" ? "Hiện" : "Ẩn")
    }

    return(
        <div>
            <h1 style={{display: status}}>Tiêu Đề văn Bản</h1>
            <button onClick={handleBtn}>{text}</button>
        </div>
    )
}