


import './App.css'
import {Route, Routes} from "react-router-dom";
import Ex1 from './Page/Ex1.tsx'
import Ex2 from "./Page/Ex2.tsx"
import Ex3 from "./Page/Ex3.tsx"
import Ex4 from "./Page/Ex4.tsx"
import Header from "./Component/Header.tsx"
import Ex5 from "./Page/Ex5.tsx";
import Ex6 from "./Page/Ex6.tsx";
import Ex7 from "./Page/Ex7.tsx"
import Ex8 from "./Page/Ex8.tsx"
function App() {


  return (
    <>
        <Header/>
        <Routes>
            <Route path="Ex1" element={<Ex1/>} />
            <Route path="Ex2" element={<Ex2/>} />
            <Route path="Ex3" element={<Ex3/>} />
            <Route path="Ex4" element={<Ex4/>} />
            <Route path="Ex5" element={<Ex5/>} />
            <Route path="Ex6" element={<Ex6/>} />
            <Route path="Ex7" element={<Ex7/>} />
            <Route path="Ex8" element={<Ex8/>} />







        </Routes>
    </>
  )
}

export default App
