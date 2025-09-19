import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store";

import {useEffect, useState} from "react";
import {fetchTasks, removeTaskS, toggleStatusS} from "../../store/Ex910/AllTodo.tsx";
import {useAppSelector} from "../../hooks.tsx";
import { setData } from "../../store/Ex910/DataTarget.tsx";
import {handelMode} from "../../store/Ex910/Model.tsx";

function TypeTask (type: string ){




    switch(type){
        case "Urgent":
            return (
                <div className={"border-2 rounded-2xl text-center px-3 bg-red-400 border-red-500 text-white font-light text-[14px]"}>
                    Khẩn cấp
                </div>
            )
        case "Important":
            return (
                <div className={"border-2 rounded-2xl text-center px-3 bg-orange-400 border-orange-500 text-white font-light text-[14px]"}>
                    Quan trọng
                </div>
            )

        case "Moderate":
            return (
                <div className={"border-2 rounded-2xl text-center px-3 bg-blue-400 border-blue-500 text-white font-light text-[14px]"}>
                    Bình thường
                </div>
            )
        case  "Unimportant":
            return (
                <div className={"border-2 rounded-2xl text-center px-3 bg-gray-400 border-gray-500 text-white font-light text-[14px]"}>
                   Không quan trọng
                </div>
            )

    }


}

function renderList (data: Task[], dispatch: AppDispatch) {
   return <div>
       {
           data.map((a) => (
                   <div className={"flex justify-between mt-5 p-3 shadow-md rounded-sm border border-gray-200"}>
                       <div className={"flex gap-2.5"}>
                           {a.status ? (
                               <>
                                   <input onChange={() => dispatch(toggleStatusS(a))} type={"checkbox"} checked={true}/>
                                   <del>{a.title}</del>
                               </>
                           ) : (
                               <>
                                   <input onChange={() => dispatch(toggleStatusS(a))} type={"checkbox"} checked={false}/>
                                   <span>{a.title}</span>
                               </>
                           )

                           }
                           {TypeTask(a.type)}
                       </div>
                       <div className={"flex gap-2.5"}>


                           {/*DataTarget*/}
                           <Button
                               onClick={() => {dispatch(setData(a)) ;  dispatch(handelMode())}}
                               color="pink" variant="outlined" size={"small"}>
                               Sửa
                           </Button>
                           <Button
                               onClick={() => dispatch(removeTaskS(a.id))}
                               color="danger" variant="outlined" size={"small"}>
                               Xoá
                           </Button>
                       </div>
                   </div>
               )
           )
       }
   </div>
}


interface Task {
    id: string,
    title: string,
    type: string,
    status: boolean,
}

export default function(){

    const {data, loading, error} = useSelector((state:RootState) => state.tasks)
    const dispatch = useDispatch<AppDispatch>();
    const Lever = useAppSelector((state) => state.ChangeLeave);
    const [Current, setCurrent] = useState<Task[]>([]);



    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);


    useEffect(() => {
        if (Lever.value.length !== 0) {
            const filtered = data.filter((v) => Lever.value.includes(v.type));
            setCurrent(filtered);
        } else {
            setCurrent(data);
        }


        if(Lever.value.length !== 0) {
            setCurrent([]);
            console.log("action:" + Lever.value);
            Lever.value.map((a) => {
                data.map((v) => {
                    if(v.type === a){
                        setCurrent((prev) =>[...prev, v])
                    }
                });

            })
        }
    }, [Lever, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Current

    return(
        <div>

            {
                renderList(Lever.value.length === 0 ? data : Current, dispatch)
            }





        </div>
    )
}