
import NavTodo from './Nav.tsx'
import Todo from "./TableList.tsx"
import Footer from "./Footer.tsx"
import ModalTodo from "./ModalTodo.tsx"




export default function () {




    return (
        <div className="border border-gray-200 rounded-sm w-[60%] m-auto mt-[5%] shadow-lg p-5">
            <h1 className="text-center font-bold text-[20px]">Danh Sách Công Việc</h1>
            <NavTodo/>


            <Todo/>

            <Footer/>

            <ModalTodo/>




        </div>
    )
}