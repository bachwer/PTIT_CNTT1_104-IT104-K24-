import  React, {useState} from "react";
import DetailPost from "./DetailPost.tsx";


export interface ListPostData{
    id:number,
    title:string,
    content:string,
    author:string,
}



const ListPost: React.FC = () => {
    const [post] = useState<ListPostData[]>(
       [   {id:1, title: "Tai sao ne hoc ReactJs", content:"Hoc React de di lam", author:"Lindno"},
           {id:2, title: "Props ReactJs", content:"Hoc React de di lam", author:"Lindo"},
           {id:3, title: "State trong ReactJs", content:"Hoc React de di lam", author:"Lindi"},
           {id:4, title: "... ReactJs", content:"Hoc React de di lam", author:"Linde"}
       ])


    return (
        <div style={{margin: "auto", width: "700px"}}>
            <DetailPost post={post}/>
        </div>
    )
}
export default ListPost;