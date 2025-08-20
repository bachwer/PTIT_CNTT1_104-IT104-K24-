import React from "react"


interface children {
    name: string;
}

const children: React.FC<children> = ({name}) => {
    return(
        <div>
            <h1>{name}</h1>
        </div>
    )
}

export default children
