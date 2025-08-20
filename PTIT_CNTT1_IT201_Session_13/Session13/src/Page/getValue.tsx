import React, { useState } from "react";



const updateState: React.FC = () => {
    let [value, setValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };


    return(
        <div>
            <h2 >Du lieu: {value}</h2>
           <input onChange={handleChange} value={value}  />
        </div>
    )
}

export default updateState