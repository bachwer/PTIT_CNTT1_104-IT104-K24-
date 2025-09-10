// App.tsx

import Headers from "./Component/Header.tsx";
import "./App.css";
import Home from "./Page/Ex1/Home.tsx";
import About from "./Page/Ex1/About.tsx";
import Contact from "./Page/Ex1/Contact.tsx";
import Contact2 from "./Page/Ex2/Contact.tsx"
import Login from "./Page/Ex3Login/Ex3_Login.tsx"
import Register from "./Page/Ex3Register/register.tsx";
import NotFound404 from "./Page/Ex5/Page404.tsx"
import Home2 from "./Page/Ex1/Home.tsx"
import HomeEx6 from "./Page/Ex6NavLink/HomeEx6.tsx";
import ProductEx6 from "./Page/Ex6NavLink/Product.tsx"
import DetailEx6 from "./Page/Ex6NavLink/detail.tsx"
import CustomLick from "./Page/Ex7/CustomLink.tsx"
import HomePage from "./Page/Ex7/HomePage.tsx"
import Ex8 from "./Page/Ex8/Parent.tsx"
import Ex8Detail from "./Page/Ex8/Detail.tsx"
import HomeLogin from "./Page/Ex3Login/HomePage.tsx"

import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
      <div>
        <Headers></Headers>



          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/Contact2" element={<Contact2/>}/>
              <Route path="/Login" element={<Login/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="*" element={<NotFound404/>}/>
              <Route path={"home"} element={<Home2/>}/>
              <Route path={"Ex6Home"} element={<HomeEx6/>}/>
              <Route path={"Ex6Product"} element={<ProductEx6/>}/>
              <Route path={"Ex6Detail"} element={<DetailEx6/>}/>
              <Route path={"CustomLick"} element={<CustomLick/>}/>
              <Route path={"home-page"} element={<HomePage/>}/>

              LoginSuccess

              <Route path={"LoginSuccess"} element={<HomeLogin/>}/>




              <Route path={"Ex8Home"} element={<Ex8/>}/>


              <Route path={"detail"} element={<Ex8Detail/>}/>




          </Routes>
      </div>
  )


}