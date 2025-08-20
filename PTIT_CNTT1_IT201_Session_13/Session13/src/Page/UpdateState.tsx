import React, { useState } from "react";


const updateState: React.FC = () => {
    let [text, setText] = useState<string>("Rikkei Academy");
    const update = () =>{
        setText ("Rikkei soft")
    }

    return(
        <div>
            <h2>{text}</h2>
            <button onClick={update}>Change</button>
        </div>
    )
}

export default updateState