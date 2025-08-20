import React from "react"
import type {ListPostData} from "./ListPost.tsx"

interface childrenProps {
    post:ListPostData[];
}

const children: React.FC<childrenProps> = ({ post }) => {


    return (
        <div>
            {
                post.map(a => (
                    <div style={{borderBottom: "1px solid black"}} key = {a.id}>
                        <h1>{a.title}</h1>
                        <p>{a.content}</p>
                        <small>Tac Gia: {a.author}</small>
                    </div>
                ))
            }
        </div>
    )
}
export default children;