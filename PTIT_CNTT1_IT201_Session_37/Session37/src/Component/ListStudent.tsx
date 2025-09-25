import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import {useAppDispatch} from "../store/hooks.tsx";
import {useEffect} from "react";
import {deleteStudent, fetchStudent} from "../store/state/Student.tsx";
import {setData, setIsOpen, setTitle} from "../store/state/ModalValue.tsx";
import {Popconfirm} from "antd";

interface student {
    id: string,
    name: string,
    grade: string,
    age: number
}

export default function (){
    const ListStudents = useSelector((state: RootState) => state.student);
    const dispatch = useAppDispatch()
    const controlValue = useSelector((state: RootState) => state.ControlFilter);

    useEffect(() => {
        dispatch(fetchStudent())

    }, []);
    console.log(controlValue)







    const showStudent = (a:student) => {
       return(
           <div className={"broder mt-3 bg-white w-[48%] border-gray-200 border-b-2 shadow hover:-translate-y-2 transition-transform duration-300"}>

               <div className={"p-3 flex justify-between"}>
                   <div className={"flex flex-col gap-2"}>
                       <span className={"font-medium text-[20px] text-gray-600"}>{a.name}</span>
                       <span className={"text-gray-400"}>Age: {a.age} | Grade: {a.grade}</span>
                   </div>

                   <div className={"flex gap-3.5"}>
                       <EditOutlined
                           onClick={() => {dispatch(setIsOpen()); dispatch(setTitle("Edit Student")); dispatch(setData(a))}}
                           className={"cursor-pointer text-[20px]"} />



                       <Popconfirm
                           title="Delete the task"
                           description="Are you sure to delete this task?"
                           onConfirm={() => dispatch(deleteStudent(a.id))}
                           okText="Yes"
                           cancelText="No"
                       >
                           <DeleteOutlined className={"cursor-pointer text-[20px]"}/>
                       </Popconfirm>

                   </div>
               </div>
           </div>


       )
    }


    const renderStudent = (a:student) => {


        if(controlValue.search !== "" && !a.name.toLowerCase().includes(controlValue.search.toLowerCase())){
            return null;
        }
        if(controlValue.grade !== "" && controlValue.grade !== a.grade){
            return null;
        }

        return showStudent(a)

    }

    const sort = (ListStudents: student[]) => {
        let currentList:student[];

        switch (controlValue.sort){
            case "AtoZ":
                currentList = [...ListStudents].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "ZtoA":
                currentList = [...ListStudents].sort((a,b) => b.name.localeCompare(a.name));
                break;
            case "increaseAge":
                currentList = [...ListStudents].sort((a,b) => a.age - b.age);
                break;
            case "decreaseAge":
                currentList = [...ListStudents].sort((a,b) => b.age - a.age);
                break
            default:
                currentList = ListStudents
        }
        return(
            <>
                {
                    currentList.map((a) => (
                        renderStudent(a)
                    ))
                }
            </>
        )
    }


    return(

        <div className={"flex flex-wrap justify-between"}>
            {sort(ListStudents.data)}

        </div>

    )
}