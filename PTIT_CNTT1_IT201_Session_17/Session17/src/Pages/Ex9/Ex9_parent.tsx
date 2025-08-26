import {type ChangeEvent,useState} from "react"
import ListTask from "./ListTask.tsx";
import "./Ex9.css"
import  ModalU from "./PopUpUpdate.tsx"
import { CircleCheckBig } from 'lucide-react';
import ModalD from "./PopupDelete.tsx"



export interface List {
    name:string,
    status: boolean,
}
interface State{
    Lists: List[],
    inputText: string
}


export default function Ex9 (){

    const [list, setList] = useState<State>({
        Lists: [
            {name:"code", status: false}
        ],
        inputText: "",
    })

    const [text, setText] = useState("");
    const [count, setCount] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState<string>("");

    const handleOpenModal = (name: string) => {
        setCurrentTask(name);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [taskToDelete, setTaskToDelete] = useState<string>("");

    const openDeleteModal = (taskName: string) => {
        setTaskToDelete(taskName);
        setIsDeleteOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteOpen(false);
    };







    const handelInput = (e: ChangeEvent<HTMLInputElement>) => {
        setList(
            {
                ...list,
                inputText: e.target.value
            }
        )
    }

    const handelAddList = () => {
        if (list.inputText === ""){
            setText("Tên Công Việc Không Được để Trống")
            return;
        }

        if (list.Lists.find(a => a.name.toLowerCase() === list.inputText)){
            setText("Tên Công Việc Không Được để trùng")
            return;
        }

        setList({
            ...list,
            Lists: [...list.Lists, {name: list.inputText, status: false}],
            inputText: "",


        })
        setText("")

    }

    const UpdateName = (name: string, input:string) => {
        setList((prev) => {
            const updatedLists = prev.Lists.map((a) =>
                a.name === name ? { ...a, name:  input} : a
            );
            return {
                ...prev,
                Lists: updatedLists,
                inputText: "",
            };
        });
        handleCloseModal();
    }

    const deleteTask = (name:string) => {
        console.log(name)
        setList((prev) => {
            const updatedLists = prev.Lists.filter((a) => a.name !== name);
            return {
                ...prev,
                Lists: updatedLists,
                inputText: "",
            };
        });

        closeDeleteModal()
    }



    const handleChangStatus = (name: string) => {
        setList((prev) => {
            const updatedLists = prev.Lists.map((a) =>
                a.name === name ? { ...a, status: !a.status } : a
            );

            handleCheckTask(updatedLists);

            return {
                ...prev,
                Lists: updatedLists,
                inputText: "",
            };
        });
    };


    const handleCheckTask = (updatedLists: List[]) => {
        let count1 = 0;
        updatedLists.map(a => {
            count1 += (a.status ? 1 : 0)
        })
        setCount(count1);
    }


    // @ts-ignore
    return(
        <div className={"containerList"}>
               <h2>Danh Sách Công Việc</h2>
            <div className={"navContainer"}>
                <input onChange={handelInput} value={list.inputText}  className="form-control"  aria-describedby="emailHelp"
                       placeholder="Nhập Công Việc"/>
                <button onClick={handelAddList} className="btn btn-primary">Thêm</button>
            </div>
            <p style={{color: "red", marginTop: "10px", fontWeight: "lighter"}}>{text}</p>

            <div>
                <ListTask
                    handleChangStatus={handleChangStatus}
                    data={list.Lists}
                    onEdit={handleOpenModal}
                    onDel ={openDeleteModal}
                />
            </div>

            <ModalD
            isOpen={isDeleteOpen}
            onClose={closeDeleteModal}
            onConfirm={deleteTask}
            taskName={taskToDelete}

            />
            <ModalU
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                taskName={currentTask}
                UpdateName = {UpdateName}
            />

            <div className={"FooterNav"}>

                {count === list.Lists.length && list.Lists.length !== 0 ? (
                   <strong><CircleCheckBig style={{color: "green", fontWeight: "bold"}}/> Hoành Thành Công Việc</strong>
                ): (
                    <strong>Công Việc Hoàn Thành:  {count} / {list.Lists.length}</strong>
                )

                }

            </div>

        </div>
    )
}