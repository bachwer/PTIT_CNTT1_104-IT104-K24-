import {useSearchParams} from "react-router-dom";


export default function (){
    const [name] = useSearchParams();
    const studentName = name.get("studentName")



    return(
        <div className="p-5">
            <h1 className="text-xl font-bold">Product Detail Page</h1>
            <p>Name Students: <span className="text-blue-600">{studentName}</span></p>
        </div>
    )


}