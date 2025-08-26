import { Route, Routes } from "react-router-dom";
import Header from "./Component/Header.tsx";

import "./App.css";
import "./index.css";

import Ex1 from "./Pages/Ex1.tsx"
import Ex2 from "./Pages/Ex2.tsx"
import Ex3 from "./Pages/Ex3_ChangeColor.tsx"
import Ex4 from "./Pages/Ex4_Toggle.tsx"
import Ex5 from "./Pages/Ex5_from.tsx"
import Ex6 from "./Pages/Ex6_CounText.tsx"
import Ex7 from "./Pages/Ex7_select.tsx"
import Ex8 from "./Pages/Ex8_Checkbox.tsx"
import Ex9 from "./Pages/Ex9/Ex9_parent.tsx"



function App() {
    return (
        <div>
            <Header />
            <main >
                <Routes>
                    <Route path="/ex1" element={<Ex1/>} />
                    <Route path="/ex2" element={<Ex2/>} />
                    <Route path="/ex3" element={<Ex3/>} />
                    <Route path="/ex4" element={<Ex4/>} />
                    <Route path="/ex5" element={<Ex5/>} />
                    <Route path="/ex6" element={<Ex6/>} />
                    <Route path="/ex7" element={<Ex7/>} />
                    <Route path="/ex8" element={<Ex8/>} />



                    <Route path="/ex9" element={<Ex9/>} />
                    <Route path="/ex10" element={<Ex9/>} />

                </Routes>
            </main>
        </div>
    );
}
export default App;