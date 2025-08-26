import type {List} from "./Ex9_parent.tsx";
import { Trash2 } from "lucide-react";
import {Pencil} from "lucide-react";
interface Props {
    data: List[]
    handleChangStatus: (name:string) => void;
    onEdit: (name:string) => void;
    onDel: (name:string) => void;

}


export default function ListTask({data, handleChangStatus, onEdit, onDel} : Props) {


    return (
        <div>

            {
                data?.map((list) => (
                    <div className={"task"}>

                        {list.status ? (
                            <label className={"checkbox1"}>
                                <input type={"checkbox"} onChange={() => handleChangStatus(list.name)} checked/>


                                <del> {list.name}</del>
                            </label>
                        ) : (
                            <label className={"checkbox1"}>
                                <input onChange={() => handleChangStatus(list.name)} type={"checkbox"} />
                                <span> {list.name}</span>
                            </label>
                        )

                        }

                        <div className={"functionIcon"}>
                            <Pencil style={{cursor: "pointer"}} onClick={() => onEdit(list.name)} />
                            <Trash2 style={{cursor: "pointer"}} onClick={() => onDel(list.name)}/>
                        </div>

                    </div>
                ))

            }

        </div>
    )


}