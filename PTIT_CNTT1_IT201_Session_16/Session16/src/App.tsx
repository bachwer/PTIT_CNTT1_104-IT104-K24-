import { Route, Routes } from "react-router-dom";
import Header from "./component/Header.tsx";

import "./App.css";
import "./index.css";

import Ex1 from "./Page/Ex1_ListSubject.tsx"
import Ex2 from "./Page/Ex2_LoginStatus.tsx"
import Ex3 from "./Page/Ex3_Btn.tsx"
import Ex4 from "./Page/Ex4_Counter.tsx"
import Ex5 from "./Page/Ex5_UserForm.tsx"
import Ex6 from "./Page/Ex6_themeSwitch.tsx"
import Ex7 from "./Page/Ex789_shop/Parent.tsx"
import Ex10 from "./Page/Ex10/Paren.tsx"

function App() {
    return (
        <div className="w-screen h-screen bg-base-200 text-base-content">
            <Header />
            <main className=" h-full">
                <Routes>
                    <Route path="/ex1" element={<Ex1/>} />
                    <Route path="/ex2" element={<Ex2/>} />
                    <Route path="/ex3" element={<Ex3/>} />
                    <Route path="/ex4" element={<Ex4/>} />
                    <Route path="/ex5" element={<Ex5/>} />
                    <Route path="/ex6" element={<Ex6 />} />
                    <Route path="/ex7" element={<Ex7 />} />
                    <Route path="/ex8" element={<Ex7 />} />
                    <Route path="/ex9" element={<Ex7 />} />
                    <Route path="/ex10" element={<Ex10 />} />
                </Routes>
            </main>
        </div>
    );
}
export default App;