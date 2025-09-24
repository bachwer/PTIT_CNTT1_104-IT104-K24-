
import NavBar from "./Page/NavBar.tsx"
import Nav from "./Page/NavBar1.tsx"
import TaskList from "./Page/task.tsx"
import ModalEdit from "./Page/Modal.tsx"
function App() {


  return (
    <div className={"w-[800px] m-auto mt-[4%]"}>
      <h1 className={"text-[24px] font-bold text-center"}>📝 Task Manager</h1>

      <NavBar/><Nav/><TaskList/><ModalEdit/>


    </div>
  )
}

export default App
