import {type ChangeEvent, useState} from "react";


export default function Ex1(){
    const [str, setStr] = useState("")


    const handelStr = (e: ChangeEvent<HTMLInputElement>) => {
        setStr(e.target.value)
    }
    return(
        <div>
            <h1>Kiểm Tra Chuỗi Nhập Vào</h1>
            <input onChange={handelStr} value={str}  />

            <div>
                {str.length > 5 && (
                    <div>
                        <p style={{color: "red"}}>chuỗi nhập vào dài hơn 5 ký tự.</p>
                    </div>
                )

                }
            </div>
        </div>
    )
}