
import './App.css'
import {Route, Routes} from "react-router-dom";


import Ex1About from "./Page/Ex1/About.tsx"
import Ex1Home from "./Page/Ex1/Home.tsx"
import Ex1Contact from "./Page/Ex1/Contact.tsx"

import Ex2Product from "./Page/Ex2/Product.tsx"
import Exe2ProductDetail from "./Page/Ex2/DetailProduct.tsx"

import Ex3TaskList from "./Page/Ex3/TaskList.tsx"
import Ex3TaskListDetail from "./Page/Ex3/TaskDetail.tsx"

import Ex4ProductSearch from "./Page/Ex4/ProductListSearch.tsx"

import Ex5Post from "./Page/Ex5/MyBlog.tsx"
import PostDetail from "./Page/Ex5/PostDetail.tsx"
import Container from "./Page/Ex5/ContainerPost.tsx"

import Home from "./Page/Ex6/Home.tsx"
import Product from "./Page/Ex6/Product.tsx"
import Detail from "./Page/Ex6/Detail.tsx"

import HomeEx7 from "./Page/Ex7/Home.tsx"
import About from "./Page/Ex7/About.tsx"

import NotFound from "./Page/Ex7/NotFound.tsx"


import Login from "./Page/Ex10Login/Ex3_Login.tsx"
import Register from "./Page/Ex10Register/register.tsx";



function App() {

  return (
   <div>
       <Routes >

           <Route path={"/Ex1Home"} element={<Ex1Home/>}/>
           <Route path={"/Ex1Contact"} element={<Ex1Contact/>}/>
           <Route path={"/Ex1About"} element={<Ex1About/>}/>




           <Route path={"/Ex2Product"} element={<Ex2Product/>}/>
           <Route path={"/Ex2ProductDetail"} element={<Exe2ProductDetail/>}/>



           <Route path={"/Ex3TaskList"} element={<Ex3TaskList/>}/>
           <Route path={"/Ex3TaskListDetail"} element={<Ex3TaskListDetail/>}/>


           <Route path={"/Ex4Search"} element={<Ex4ProductSearch/>}/>






           <Route path="/blog" element={<Ex5Post />}>

               <Route index element={<Container />} />


               <Route path="posts" element={<Container />} />


               <Route path="posts/:id" element={<PostDetail />} />
           </Route>






           <Route path="/" element={<Home />} />
           <Route path="/product" element={<Product />} />
           <Route path="/detail" element={<Detail />} />



               <Route path="/HomeEx7" element={<HomeEx7 />} />
               <Route path="/about" element={<About />} />

               <Route path="*" element={<NotFound />} />





           <Route path="/Login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>





       </Routes>

   </div>
  )
}

export default App
