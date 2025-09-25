import {Button} from "antd";
import NavBar from "./Component/NavBar.tsx";
import ListStudent from "./Component/ListStudent.tsx";
import Modal from "./Component/ModalStudent.tsx"
import {useAppDispatch} from "./store/hooks.tsx";
import {setIsOpen, setTitle} from "./store/state/ModalValue.tsx";



function App() {
    const dispatch = useAppDispatch();


  return (
    <div className={"flex flex-col gap-3.5 w-[65%] bg-white m-auto mt-[4%] "}>
        <h1 className={"text-[26px] font-bold"}>🎓 Student Manager</h1>
        <Button
            onClick={() => {dispatch(setIsOpen()); dispatch(setTitle("Add New Student"))}}
            className={"w-[150px]"} size={"large"} type="primary">Add Student</Button>

        <NavBar/>
        <ListStudent/>
        <Modal/>

    </div>
  )
}

export default App
