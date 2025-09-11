
import {tasks} from "./DataTask.tsx"




export default function (){



    return(
        <div>
            {
                tasks.map((a) => (
                    <div className={"border-1 rounded pl-5 p-2 mt-3.5  text-blue-500 border-black cursor-pointer transition-transform transform hover:-translate-y-1 hover:shadow-lg"}>
                        <h2 className={"font-bold"}>{a.title}</h2>
                        <p className={"text-gray-400"}>{a.description}</p>
                    </div>
                ))
            }

        </div>
    )


}