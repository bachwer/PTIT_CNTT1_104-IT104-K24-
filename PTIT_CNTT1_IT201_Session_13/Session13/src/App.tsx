import {Route, Routes} from "react-router-dom";
import Header from "./components/Header.tsx";

import './App.css'
import './index.css'

import Exercises01 from "./Page/Exercises01.tsx";
import Exercises02 from "./Page/Exercises02.tsx";
import Exercises03 from "./Page/Exercises03.tsx";
import Parent_Comp from "./Page/Parent_Comp.tsx";
import ParentEx5 from "./Page/ParentEx5.tsx";
import ListPost from "./Page/ListPost.tsx";
import LayoutEx7 from "./Page/LayoutEx7.tsx"
import TodoList from "./Page/TodoList.tsx"
import UpdateState from "./Page/UpdateState.tsx"
import GetValue from "./Page/getValue.tsx"

function App() {
    return (
        <>
            <Header />
            <main>
                <Routes>
                    <Route path="/ex1" element={<Exercises01 />} />
                    <Route path="/ex2" element={<Exercises02 />} />
                    <Route path="/ex3" element={<Exercises03 />} />
                    <Route path="/ex4" element={<Parent_Comp />} />
                    <Route path="/ex5" element={<ParentEx5 />} />
                    <Route path="/ex6" element={<ListPost />} />
                    <Route path="/ex7" element={<LayoutEx7/>} />
                    <Route path="/ex8" element={<TodoList/>} />
                    <Route path="/ex9" element={<UpdateState/>} />
                    <Route path="/ex10" element={<GetValue/>} />




                    <Route path="*" element={<h2>Trang không tồn tại</h2>} />
                </Routes>

            </main>
        </>
    );
}



export default App;