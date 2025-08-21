import {useState} from 'react'


const ex3_changeState: React.FC = () =>{
    const [text, setText] = useState<string>("Rikkei Academy")

    const update = () =>{
        setText("Rikkei Soft")
    }


    return(
        <div>
            <h1>Company: {text}</h1>
            <button onClick={update}>Change</button>
        </div>
    )
}

export default ex3_changeState;