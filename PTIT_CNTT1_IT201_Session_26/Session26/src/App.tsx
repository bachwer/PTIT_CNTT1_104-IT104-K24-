
import './App.css'

import Headers  from "./Component/Header.tsx";
import {Route, Routes} from "react-router-dom";
import ProductDetail from "./Page/Ex1/parent.tsx"
import NameStudents from "./Page/Ex2/Parent.tsx"
import SearchEx3 from "./Page/Ex3_4/Parent.tsx"
import Student from "./Page/Ex3_4/name.tsx"
import Login from "./Page/Ex5/Login.tsx"
import PrivateRouter from "./Page/Ex5/PrivateRouter.tsx"
import Account from "./Page/Ex5/Account.tsx"
import LoginEx6 from "./Page/Ex6/LoginEx6.tsx";
import AccountEx6 from "./Page/Ex6/AcountEx6.tsx"

import PrivateRouterEx6 from "./Page/Ex6/PrivateRouterEx6.tsx"

import Teams from "./Page/Ex7/Teams.tsx"
import TeamsIndex from "./Page/Ex7/TeamsIndex.tsx"
import Team from "./Page/Ex7/Team.tsx"
import {Suspense} from "react";

import LazyLoadComp from "./Page/Ex8/LazyLoad.tsx"
import Contact from "./Page/Ex9/Contact.tsx"
import About from "./Page/Ex9/About.tsx"
import Post from "./Page/Ex9/Post.tsx"

import ListProduct from "./Page/Ex10/ListProduct.tsx"
import Detail from "./Page/Ex10/Detail.tsx"

function App() {


  return (
      <div>
          <Headers/>

          <Routes>

              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/NameStudent/:name" element={<NameStudents />} />

              <Route path="/SearchEx3" element={<SearchEx3 />} />
              <Route path="/student" element={<Student />} />





              <Route path="/login" element={<Login />} />


              <Route element={<PrivateRouter />}>
                  <Route path="/account" element={<Account />} />
              </Route>




              <Route path={"/LoginEx6"} element={<LoginEx6/>}/>

              <Route element={<PrivateRouterEx6 />}>
                  <Route path="/AccountEx6" element={<AccountEx6 />} />
              </Route>




                  <Route path="teams" element={<Teams />}>

                      <Route index element={<TeamsIndex />} />

                      <Route path=":tempId" element={<Team />} />
                  </Route>

              <Route
                  path="/lazy"
                  element={
                      <Suspense
                          fallback={
                              <div className="flex justify-center items-center h-screen">
                                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                                  <span className="ml-3 text-blue-600 text-lg">Loading Page...</span>
                              </div>
                          }
                      >
                          <LazyLoadComp />
                      </Suspense>
                  }
              />




              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/post" element={<Post />} />

              <Route path="/ListProduct" element={<ListProduct/>}/>
              <Route path="/ProductDetail" element={<Detail />} />

          </Routes>

      </div>

  )
}

export default App
