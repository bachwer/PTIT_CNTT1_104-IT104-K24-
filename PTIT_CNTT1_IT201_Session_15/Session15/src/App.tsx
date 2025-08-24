import { Route, Routes } from "react-router-dom";
import Header from "./ components/Header.tsx";


import "./App.css";
import "./index.css";

import Ex1_getValueWithFromInput from "./Page/Ex1_getValueWithFromInput.tsx";
import Ex2_Color from "./Page/Ex2_Color.tsx";
import Ex3_getDate from "./Page/Ex3_getDate.tsx";
import Ex4_getValueRange from "./Page/Ex4_getValueRange.tsx";
import Ex5 from "./Page/Ex5_10/Ex5_Parent.tsx";
import Ex6 from "./Page/Ex6/Ex6_parent.tsx"
import Ex7 from "./Page/Ex7_Clock";
import Ex8 from "./Page/Ex8_count"
import Ex9 from "./Page/Ex9/Ex9_Parent"

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/ex1" element={<Ex1_getValueWithFromInput />} />
          <Route path="/ex2" element={<Ex2_Color />} />
          <Route path="/ex3" element={<Ex3_getDate />} />
          <Route path="/ex4" element={<Ex4_getValueRange />} />
          <Route path="/ex5" element={<Ex5 />} />
          <Route path="/ex6" element={<Ex6 />} />
          <Route path="/ex7" element={<Ex7/>} />
          <Route path="/ex8" element={<Ex8/>} />
          <Route path="/ex9" element={<Ex9/>} />
          <Route path="/ex10" element={<Ex5/>} />
          <Route path="*" element={<h2>Trang không tồn tại</h2>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
