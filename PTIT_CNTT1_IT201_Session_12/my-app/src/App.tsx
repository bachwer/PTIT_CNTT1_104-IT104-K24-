import Header from "./components/Header.tsx";
import {Route, Routes} from "react-router-dom";
import EX1_ListCourse from "./Pages/EX1_ListCourse.tsx";
import EX2_Calculation from "./Pages/EX2_Calculation.tsx"
import EX3_UserInfo from "./Pages/EX3_UserInfo.tsx";
import EX4_ColorBox from "./Pages/EX4_ColorBox.tsx";
import EX5_FormatName from  "./Pages/EX5_FormatName.tsx"
import EX6_AdminIndex from "./Pages/EX6_AdminIndex.tsx";
import EX7_UserLayout from "./Pages/EX7_UserLayout.tsx";
import EX8_ListAccount from "./Pages/EX8_ListAccount.tsx";
import EX9_TodoListIndex from "./Pages/EX9_TodoListIndex.tsx";
import EX10_ListStudents from "./Pages/EX10_ListStudents.tsx";

function App() {
    return (
        <>
            <Header />
        <main>
            <Routes>
                <Route path="/ex1" element={<EX1_ListCourse />} />
                <Route path="/ex2" element={<EX2_Calculation />} />
                <Route path="/ex3" element={<EX3_UserInfo/>} />
                <Route path="/ex4" element={<EX4_ColorBox/>} />
                <Route path="/ex5" element={<EX5_FormatName/>} />
                <Route path="/ex6" element={<EX6_AdminIndex/>} />
                <Route path="/ex7" element={<EX7_UserLayout/>} />
                <Route path="/ex8" element={<EX8_ListAccount/>} />
                <Route path="/ex9" element={<EX9_TodoListIndex/>} />
                <Route path="/ex10" element={<EX10_ListStudents/>} />

                <Route path="*" element={<h2>Trang không tồn tại</h2>} />
            </Routes>

        </main>
        </>
    );
}



export default App;