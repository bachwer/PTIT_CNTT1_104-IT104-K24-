import {type ChangeEvent, useState} from 'react'


export default function Ex9 (){
    const[hobby, setHobby] = useState<string[]> ([]);


    const handleSet =  (e: ChangeEvent<HTMLInputElement>) => {
        setHobby([...hobby, e.target.value]);
    }

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>So thich:{hobby}</h1>
            <label>
                <input onChange={handleSet} type="checkbox" value="code" />
                Code
            </label>
            <label>
                <input onChange={handleSet} type="checkbox" value="Sport" />
                Sport
            </label>
            <label>
                <input onChange={handleSet} type="checkbox" value="Eat" />
                Eat
            </label>
            <label>
                <input onChange={handleSet} type="checkbox" value="Game" />
                Game
            </label>
            <label>
                <input onChange={handleSet} type="checkbox" value="LTM" />
                LTM
            </label>
        </div>
    )

}
