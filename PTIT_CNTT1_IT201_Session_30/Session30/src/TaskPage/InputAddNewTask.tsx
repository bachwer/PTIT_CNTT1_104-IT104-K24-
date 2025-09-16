import {Button, Input} from "antd";
import {useState} from "react";
import  React from "react";


interface InputTaskProps {
    addNew?: (name: string) => Promise<void>
}

export default function ({addNew}: InputTaskProps) {
    const [inputTask, setInput] = useState("");
    const [valid, setVal] = useState(false);

    const handleSubmit = async () => {
        if(inputTask === ""){
            setVal(true)
            return
        }

        if (addNew) {
            await addNew(inputTask);
        }

        setInput("");
        setVal(false)
    }
    const handelInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }





    return (
        <div className={"w-full flex flex-col gap-5 p-5 border border-gray-200 mt-5  rounded-md shadow-lg"}>
            <Input
                    value={inputTask}
                    onChange={handelInput} size="large"
                   className={valid? "border-red" :""}
                   placeholder="Add New Task ..."/>

            <Button onClick={handleSubmit} className={"w-full"} type="primary">Add New</Button>

            {valid &&( <p className={"text-red-600 font-light"}>Không Đc Để Trống</p>)

            }

        </div>
    )
}