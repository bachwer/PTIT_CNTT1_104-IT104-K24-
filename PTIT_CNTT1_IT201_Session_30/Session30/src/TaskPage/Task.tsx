import InputTask from "./InputAddNewTask"
import ButtonControl from "./ButtonControl.tsx"
import {useEffect, useState} from "react";
import TaskTable from "./TableTask.tsx"
import {Button, Popconfirm} from "antd";
import axios from "axios";
import ModalEdit from "./ModalEdit.tsx"
import Loader from "./Loader.tsx";


export interface Task {
    id: number,
    TaskName: string,
    active: boolean,
}


export default function(){
    const [dataTask, setTask] = useState<Task[]>([]);
    const [numberBtn, setNumberBtn] = useState(1);
    const [id, setId] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [loading, setLoading] = useState(false);



    const HandelBtnChange = (code: number) => {
        setNumberBtn(code);
    };




    const fetchTask = async () => {
        setLoading(true);
        try {
            await fetch("http://localhost:3000/Task")
                .then(response => response.json())
                .then((data: Task[]) => {
                    setTask(data);
                })
                .catch((err) => {
                    console.log(err);
                });
            await new Promise(r => setTimeout(r, 1000));
        } finally {
            setLoading(false);
        }
    }


    const AddNewTask =async (name:string) => {
        setLoading(true);
        const data = {
            TaskName: name,
            active: false,
         }
        try{
            const res = await axios.post("http://localhost:3000/Task", data);
            console.log("Success !!:", res.data);
            setTask((prev) => [...prev, res.data]);
        }catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }
    }



    const DeleteTask = async (id:number) => {
        setLoading(true);
        try{
            await axios.delete(`http://localhost:3000/Task/${id}`)

            await fetchTask();
        }catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }

    }

    const ChangeStatus = async (id: number) => {
        setLoading(true);
        try{

            const task = dataTask.find(t => t.id === id);
            if(!task) return;


            const res = await axios.patch<Task>(`http://localhost:3000/Task/${id}`, {
                active: !task.active,
            });

            setTask(prev => {
                return prev.map(t => (t.id === id ? res.data : t));
            });

        }catch (err) {
            console.log(err)
        } finally {
            setLoading(false);
        }

    }

    const DeleteAllTask = async () => {
        setLoading(true);
        try{
            const res = await axios.get<Task[]>("http://localhost:3000/Task");
            await Promise.all(res.data.map(task => axios.delete(`http://localhost:3000/Task/${task.id}`)));
            setTask([]);
        }catch (err) {
            console.log(err)
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    const DeleteAllTaskDone = async () => {
        setLoading(true);
        try{
            const res = await axios.get<Task[]>("http://localhost:3000/Task?active=true");


            await Promise.all(res.data.map(task => axios.delete(`http://localhost:3000/Task/${task.id}`)));

            setTask(prev => prev.filter(task => !task.active))

        }catch (err) {
            console.log(err)
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }


    useEffect(() => {
        fetchTask().then((r) => console.log(r));
    }, []);


    const  onSubmitEdit = async (val: string) => {
        setLoading(true);
        try{

            const task = dataTask.find(t => t.id === id);
            if(!task) return;


            const res = await axios.patch<Task>(`http://localhost:3000/Task/${id}`, {
                TaskName: val,
            });

            setTask(prev => {
                return prev.map(t => (t.id === id ? res.data : t));
            });

        }catch (err) {
            console.log(err)
            setLoading(false);
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        (window as any).loading = loading;
    }, [loading]);


    const handleOpen = () => {

        setOpen(!isOpen)





    }



    const setIdCurrent = (idTarget: number) => {
        setId(idTarget);

        if(idTarget){
            const data = dataTask.find((a) => a.id === idTarget);
            if(data){
                setValue(data.TaskName);
            }
        }


    }







    return(

<>
    {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
            <Loader />
        </div>
    )}

        <div className={"w-[500px] border text-center p-5 m-auto mt-[5%] rounded-sm border-gray-300"}>


            <h1 className={"font-bold text-lg"}>Quản Lý Công Việc</h1>

            <InputTask addNew={AddNewTask}/>
            <ButtonControl handleBtn={HandelBtnChange}/>

            <ModalEdit open={isOpen} onSubmit={onSubmitEdit} valueTarget={value}  handleModel={handleOpen}/>





            {numberBtn === 1 && (
              <>
                <h2 className="font-semibold mt-4">Tất cả công việc</h2>
                <TaskTable data={dataTask} handleDel={DeleteTask} handleStatus={ChangeStatus}  setId={setIdCurrent} handleOpen={handleOpen}/>
              </>
            )}
            {numberBtn === 2 && (
              <>
                <h2 className="font-semibold mt-4">Công việc hoàn thành</h2>
                <TaskTable data={dataTask.filter(task => task.active)} handleDel={DeleteTask} handleStatus={ChangeStatus} />
              </>
            )}
            {numberBtn === 3 && (
              <>
                <h2 className="font-semibold mt-4">Công việc chưa hoàn thành</h2>
                <TaskTable data={dataTask.filter(task => !task.active)} handleDel={DeleteTask} handleStatus={ChangeStatus} />
              </>
            )}



            <div className={"flex justify-between mt-5"}>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={DeleteAllTaskDone}
                    // onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button className={"w-[220px]"} color="danger" size={"large"} variant="solid">
                        Xoá Công Việc Hoàn Thành
                    </Button>
                </Popconfirm>

                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={DeleteAllTask}
                    // onCancel={cancel}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button className={"w-[220px]"} color="danger" size={"large"} variant="solid">
                        Xoá Tất Cả Công Việc
                    </Button>
                </Popconfirm>
            </div>
        </div>
</>
    )
}
