import {type ChangeEvent, useState} from "react"


export default function Ex6(){
    let [count, setCount] = useState(0)


     const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
         setCount(
             count = (e.target.value.length)
         )
    }

    return(
        <div>
            <textarea onChange={handleInput}/>
            <p>So Luong ki tu: {count}</p>
        </div>
    )


}