import { Routes, Route } from "react-router-dom";

import Header from "./component/Header.js";
import "./index.css"
import "./App.css"
import "./Page/theme.css"
import Ex1 from "./Page/Ex1.js";
import Ex2 from "./Page/Ex2.js";
import Ex3 from "./Page/Ex3.js";
import Ex4 from "./Page/Ex4.js";
import Ex5 from "./Page/Ex5.js";
import Ex6 from "./Page/Ex6.js";
import Ex7 from "./Page/Ex7.js";
import Ex8 from "./Page/Ex8.js";
import Ex9 from "./Page/Ex9/paren.js";
import Ex10 from "./Page/Ex10/Parent.js";

function App() {
    // @ts-ignore
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
                    <Route path="/ex10" element={<Ex10/>} />




                </Routes>
            </main>
        </div>
    );
}
export default App;