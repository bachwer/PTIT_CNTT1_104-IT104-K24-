import './App.css'
import Header from "./Component/Header.tsx"

import Ex1 from "./Page/Ex1_Profile.tsx"
import Ex2 from "./Page/Ex2ListUser.tsx"
import Ex3 from "./Page/Ex3Counter.tsx"
import Ex4 from "./Page/Ex4RandomNumber.tsx"
import Ex5 from "./Page/Ex5ChangeStatus.tsx"
import Ex6 from './Page/Ex6.tsx'
import {Route, Routes} from "react-router";
import Register from "./Page/Register.tsx";
import Login from "./Page/Login.tsx";

import { useSelector } from "react-redux";
import type {RootState} from "./store";

import { useEffect } from "react";

function App() {
    const currentUser = useSelector((state: RootState) => state.auth.currentUser);

    useEffect(() => {
        console.log("Current logged in user:", currentUser);
    }, [currentUser]);

    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={ <Ex1/>} />
                <Route path="/ex2" element={<Ex2/>} />
                <Route path="/ex3" element={<Ex3/>} />
                <Route path="/ex4" element={<Ex4/>}/>
                <Route path="/ex5" element={<Ex5/>}/>
                <Route path="/ex6" element={<Ex6/>}/>

                <Route path="/ex7" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/ex8" element={<Ex4/>}/>
                <Route path="/ex9" element={<Ex4/>}/>
                <Route path="/ex10" element={<Ex4/>}/>
            </Routes>
        </>
    )
}

export default App