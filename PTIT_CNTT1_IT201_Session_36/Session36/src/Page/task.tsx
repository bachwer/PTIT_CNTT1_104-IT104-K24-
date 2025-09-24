import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import { useSelector} from "react-redux";
import type {RootState} from "../store";
import {useEffect} from "react";
import {deleteTask, fetchDataTask, updateTask} from "../store/State/task.tsx";
import {useAppDispatch} from "../store/hooks.tsx";
import {changeModal, setDataToEdit} from "../store/State/Model.tsx";
interface Task {
    id: string,
    taskName:string,
    completed: boolean,
    priority: string
}



export default function(){
    const TaskList = useSelector((state: RootState) => state.TaskList);
    const dispatch = useAppDispatch();
    const option = useSelector((state: RootState) => state.optionSet);




    useEffect(() => {

        dispatch(fetchDataTask())
    }, []);

    const btnPriority = (priority: string) => {
        switch (priority){
            case "HIGH":
                return  <button className={"bg-red-400 text-white rounded-xl px-3"}>{priority}</button>
            case "MEDIUM":
                return <button className={"bg-[#ed6c03] text-white rounded-xl px-3"}>{priority}</button>
            case "LOW":
                return <button className={"bg-gray-400 text-white rounded-xl px-3"}>{priority}</button>
        }

    }

    const updateStateCheckBox = (a:Task) => {
        const updatedTask: Task = {
            ...a,
            completed: !a.completed
        };
        dispatch(updateTask(updatedTask))
    }
    const ShowTask = (a:Task) => {

        return (
            <div className={"flex flex-col gap-3 w-full shadow-xl p-5 rounded-lg bg-white mt-[20px] hover:-translate-y-2 transition-transform duration-300"}>
                <div className={"flex justify-between"}>
                    <div className={"flex gap-3.5 "}>
                        <input
                            onChange={() => updateStateCheckBox(a)}
                            type={"checkbox"}    checked={a.completed}/>



                        {a.completed ? (<del>{a.taskName}</del>) : (<span>{a.taskName}</span>) }


                        {btnPriority(a.priority)}
                    </div>
                    <div className={"flex gap-3.5"}>
                        <EditOutlined
                            onClick={() => {dispatch(setDataToEdit(a)) ;dispatch(changeModal())}}
                        />
                        <DeleteOutlined
                            onClick={() => dispatch(deleteTask(a.id))}/>
                    </div>
                </div>
            </div>
        )
    }

    const renderTask = (a:Task) => {
        console.log(a)

        if(option.search === "" && option.completed === null && option.priority === ""){

            return  ShowTask(a);
        }


        if (option.search !== "" && !a.taskName.toLowerCase().includes(option.search.toLowerCase())) {
            return null;
        }



        if (option.completed !== null && a.completed !== option.completed) {
            return null;
        }


        if (option.priority !== "" && option.priority !== "" && a.priority !== option.priority) {
            return null;
        }

        return ShowTask(a);




    }

    return(
        <>
            {TaskList.data.map((a) => (


                renderTask(a)


            ))}
        </>


    )
}