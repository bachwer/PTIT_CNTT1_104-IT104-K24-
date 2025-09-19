import {Modal} from "antd";
import {useAppDispatch, useAppSelector} from "../../hooks.tsx";
import {handelMode} from "../../store/Ex910/Model.tsx";
import React, {useEffect, useState} from "react";
import {addTaskS} from "../../store/Ex910/AllTodo.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../store";

interface Task {
    id?: string,
    title: string,
    type: string,
    status: boolean
}

export default function(){

    const ModalOpen = useAppSelector((state) => state.Ex9Modal)
    const dispatch = useAppDispatch();
    const [task, setTask] = useState<Task>({
        title: "",
        type: "",
        status: false,
    })

    const target = useSelector((state:RootState) => state.DataTarget)

    useEffect(() => {
        if(target.id !== "" && target.title !== ""){
            setTask(target);
        }

    }, [target]);



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask((prev) => ({
            ...prev,
            title : e.target.value
        }));
        console.log( e.target.value);
    }

    const handelRadio = (type: string) => {
        setTask((prev) => ({
            ...prev,
            type : type
        }));
        console.log(type)
    }


    const handleSub = () => {
        if(task.title === "" || task.type === "") return;
        dispatch(addTaskS(task))
        dispatch(handelMode())
        setTask({
            title: "",
            type: "",
            status: false,
        })
    }
    // target
    return(
        <Modal
        onOk={handleSub}
        open={ModalOpen}
        onCancel={() => dispatch(handelMode())}
        title={"Add Todo"}
        >


           <div className={"flex flex-col gap-4"}>
               <label>
                   Tên Công Việc: <br/>
                   <input
                       onChange={handleInput}
                       value={task.title}
                       className={"border w-full rounded border-gray-300 mt-2 p-1 pl-5"}
                       placeholder={"Nhập Công việc .."}
                       required
                   />
               </label>


               <label>
                   Cấp độ: <br/>

                   <div className={"flex justify-around mt-2"}>
                       <div>
                           <label className={"flex gap-2"}>
                               <input onChange={() => handelRadio("Urgent")} name={"lever"} type={"radio"}
                                      checked={task.type === "Urgent"}
                               />
                               Khẩn cấp
                           </label>
                       </div>

                       <div>
                           <label className={"flex gap-2"}>
                               <input onChange={() => handelRadio("Important")} name={"lever"} type={"radio"}
                                      checked={task.type === "Important"}
                               />
                               Quan Trọng
                           </label>
                       </div>


                       <div>
                           <label className={"flex gap-2"}>
                               <input onChange={() => handelRadio("Moderate")} name={"lever"} type={"radio"}
                                      checked={task.type === "Moderate"}
                               />
                               Bình Thường
                           </label>
                       </div>


                       <div>
                           <label className={"flex gap-2"}>
                               <input onChange={() => handelRadio("Unimportant")} name={"lever"} type={"radio"}
                                      checked={task.type === "Unimportant"}
                               />
                               Không Quan Trọng
                           </label>
                       </div>
                   </div>


               </label>
           </div>

        </Modal>
    )
}