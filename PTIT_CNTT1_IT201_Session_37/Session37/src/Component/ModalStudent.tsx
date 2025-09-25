import {Modal} from "antd";
import {useSelector} from "react-redux";
import type {RootState} from "../store";
import {useAppDispatch} from "../store/hooks.tsx";
import {setIsOpen} from "../store/state/ModalValue.tsx";
import React, {useEffect, useState} from "react";
import { v4 as uuidv4 } from "uuid";
import {AddStudent, updateStudent} from "../store/state/Student.tsx";



export default function() {
    const ModalValue = useSelector((state: RootState) => state.ModalValue);
    const dispatch = useAppDispatch()
    const [value, setValue] = useState({
        id:"",
        name:"",
        age:0,
        grade: "",
    })
    useEffect(() => {
        if(ModalValue?.data){
            setValue(ModalValue?.data)
        }
    }, [ModalValue?.data]);


    const handelSetInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValue((prev) => ({
            ...prev,
            [name] : value
        }))
    }

    const submit = () => {
        if(value.name === "" || value.age === 0 || value.grade === "") return;




        if(ModalValue.title === "Add New Student"){
            const Student = {
                id: uuidv4(),
                name: value.name,
                age: value.age,
                grade: value.grade,
            }
            dispatch(AddStudent(Student))
        }else{
            dispatch(updateStudent(value))
        }

        setValue({
            id: "",
            name: "",
            grade: "",
            age: 0,
        })




        dispatch(setIsOpen())



    }



    return(
       <Modal
           open={ModalValue.isOpen}
           onOk={submit}
           onCancel={() => dispatch(setIsOpen())}
           title={ModalValue.title}
       >

           <div className={"flex flex-col gap-3.5 mt-8"}>
               <input name={"name"} onChange={handelSetInput} value={value.name} className={"border-2 p-1 pl-3 border-gray-200 w-full rounded"} placeholder={"Name"}/>
               <input name={"age"} onChange={handelSetInput} value={value.age} className={"border-2 p-1 pl-3 border-gray-200 w-full rounded"} type={"number"} min={0} placeholder={"Age"}/>
               <input name={"grade"} onChange={handelSetInput} value={value.grade} className={"border-2 p-1 pl-3 border-gray-200 w-full rounded"} placeholder={"Grade"}/>
           </div>

       </Modal>
    )
}