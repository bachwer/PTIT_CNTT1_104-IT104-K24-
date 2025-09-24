import {useSelector} from "react-redux";
import type {RootState} from "../store";
import {useAppDispatch} from "../store/hooks.tsx";
import {changeModal} from "../store/State/Model.tsx";
import {Modal} from "antd";
import React, {useEffect, useState} from "react";
import {updateTask} from "../store/State/task.tsx";

interface Task {
    id: string,
    taskName:string,
    completed: boolean,
    priority: string
}

export default function (){
    const ModalIsOpen = useSelector((state: RootState) => state.Modal);
    const dispatch = useAppDispatch()
    const [inputValue, setValue] = useState("");
    const [priority, setPriority] = useState("LOW"); // thêm state cho priority

    useEffect(() => {
        if(ModalIsOpen.data?.taskName){
            setValue(ModalIsOpen.data.taskName);
        }
        if(ModalIsOpen.data?.priority){
            setPriority(ModalIsOpen.data.priority);
        }
    }, [ModalIsOpen.data?.taskName, ModalIsOpen.data?.priority]);

    console.log(ModalIsOpen);

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        ModalIsOpen.data.taskName = e.target.value;
    }

    const handlePriority = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriority(e.target.value);
    }

    const Submit = () => {
        if(inputValue === "") return;

        const updateState:Task = {
            ...ModalIsOpen.data,
            taskName: inputValue,
            priority: priority
        }
        dispatch(updateTask(updateState));
        dispatch(changeModal());
        setValue("");
    }

    return(
        <Modal
            open={ModalIsOpen.isOpen}
            onCancel={() => dispatch(changeModal())}
            onOk={Submit}
            className={"p-5"}
            title={"Edit Task"}
        >
            <input
                onChange={handleInput}
                value={inputValue}
                className={"border-1 border-gray-200 w-full p-1.5 rounded mb-3"}
            />

            {/* Radio chọn priority */}
            <div className="flex gap-4 mt-3">
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="HIGH"
                        checked={priority === "HIGH"}
                        onChange={handlePriority}
                    /> HIGH
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="MEDIUM"
                        checked={priority === "MEDIUM"}
                        onChange={handlePriority}
                    /> MEDIUM
                </label>
                <label>
                    <input
                        type="radio"
                        name="priority"
                        value="LOW"
                        checked={priority === "LOW"}
                        onChange={handlePriority}
                    /> LOW
                </label>
            </div>
        </Modal>
    )
}