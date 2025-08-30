import {useEffect} from "react";


export default function welcome(){
    useEffect(() => {
        console.log("welcome")
        console.log("ren lan dau")
    }, []);


    return (
        <div>
            <h1>👋 Welcome to my app!</h1>
            <p>This message only shows once in the console when the component loads.</p>
        </div>
    );

}