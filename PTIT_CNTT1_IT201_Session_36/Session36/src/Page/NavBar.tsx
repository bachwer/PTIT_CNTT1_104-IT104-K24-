import { Input, Select, Button } from "antd";
import {useState} from "react";
import {useAppDispatch} from "../store/hooks.tsx";
import {AddTask} from "../store/State/task.tsx";
import { v4 as uuidv4 } from "uuid";

const { Option } = Select;

export default function TaskInput() {
    const [valueInput, setInput] = useState("");
    const [priority, setPriority] = useState("HIGH");
    const dispatch = useAppDispatch()



    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInput(e.target.value)
    }
    const handelSelect = (priority: string) =>{
        setPriority(priority);
    }

    const submit = () => {
        if(valueInput === "" || priority === "") return;
        console.log(priority + valueInput);
        const task = {
            id: uuidv4(),
            taskName: valueInput,
            completed: false,
            priority: priority
        }

        setInput("");
        dispatch(AddTask(task))

    }
    return (
        <div className="flex gap-3 p-5 bg-white rounded-lg shadow-xl">

            <Input
                onChange={handleInput}
                value={valueInput}
                placeholder="Công việc mới"
                className="w-1/2"
            />


            <Select
                onChange={handelSelect}
                defaultValue="HIGH" className="w-1/4">
                <Option value="HIGH">Cao</Option>
                <Option value="MEDIUM">Trung bình</Option>
                <Option value="LOW">Thấp</Option>
            </Select>


            <Button
                onClick={submit}
                type="primary" className="w-1/6">
                Thêm
            </Button>
        </div>
    );
}