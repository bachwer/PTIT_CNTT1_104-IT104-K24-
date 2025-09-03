import React from "react";
import { Tabs } from "antd";







import Ex1 from "./Page/Ex1.tsx"
import Ex2 from "./Page/Ex2.tsx"
import Ex3 from "./Page/Ex3.tsx"
import Ex4 from "./Page/Ex4.tsx"
import Ex5 from "./Page/Ex5.tsx"
import Ex6 from "./Page/Ex6.tsx"
import Ex7 from "./Page/Ex7.tsx"
import Ex8 from "./Page/Ex8.tsx"
import TH from "./Page/baiTH/TH.tsx"


import "./App.css";


const renderChildren =(key:string) => {
    switch (key){
        case "1":
            return <Ex1/>;
        case "2":
            return <Ex2/>
        case "3":
            return <Ex3/>
        case "4":
            return <Ex4/>
        case "5":
            return <Ex5/>
        case "6":
            return <Ex6/>
        case "7":
            return <Ex7/>
        case "8":
            return <Ex8/>
        case "9":

        case "10":
            return <TH/>


    }
}


const items = Array.from({ length: 10 }, (_, i) => {
    const key = `${i + 1}`;
    return {
        label: `Ex ${key}`,
        key,
        children: renderChildren(key),
    };
});

const App: React.FC = () => (
    <div className=" justify-center items-center w-full text-center h-auto">
        <Tabs defaultActiveKey="1" items={items} centered />
    </div>
);

export default App;