import {useState, useEffect} from "react";

export default function Timer() {
    const [name, setCount] = useState(0);


    useEffect(() => {
        const intervalId = setInterval(() => {
            setCount((prev) => prev + 1);
        },1000)
        console.log("timer start");


        return() => {
            clearInterval(intervalId);
            console.log("Timer stop !")
        }

    }, []);



    return(
        <div style={{ padding: "20px" }}>
            <h2>Bộ đếm thời gian</h2>
            <p>Đã trôi qua: {name} giây</p>
        </div>
    )
}