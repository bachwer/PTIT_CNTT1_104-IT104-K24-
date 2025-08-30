import {type ChangeEvent, useState} from "react"


export default function DemoUseState(){
    const [count, setCount] = useState<number[]>([]);    const [input1, setInput] = useState<string>("")
    // useState<string>("");
    // useState<null>(null)
    // const [task, setTask] = useState({
    //     id: 0,
    //     task: "asd",
    //     isCompleted: false;
    // })
    //
    // const Update = ()=>{
    //     // setCount(count + 1);
    //     setCount((prevState) => prevState + 1)
    // }

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    // const handleSetStak = ( ) => {
    //    setTask({
    //        ...task,
    //
    //    })
    //
    //
    // }

    const handleRandom = () => {
        setCount((prev) => [...prev, Math.ceil(Math.random() * 100)]);
    };

    return (<div>
         <div>
             <h1>{count}</h1>
             <button onClick={handleRandom}> + 1</button>
         </div>

            <div>
                <h1>{input1}</h1>
                <input value={input1} onChange={handleInput}/>
                <button onClick={handleRandom}>random</button>
            </div>

    </div>
    )
}