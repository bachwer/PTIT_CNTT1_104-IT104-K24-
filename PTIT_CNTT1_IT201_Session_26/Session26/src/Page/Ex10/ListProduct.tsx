

import Products from "./Products.tsx";
import {useState} from "react";
import type {Product} from "./Product.tsx";
import {products} from "./Product.tsx"





export default function (){


    const [dataPro] = useState<Product[]>(products)


    const handleInput = () => {

    }

    const HandleSubmit = () => {

    }


    return(
        <div>
            <h1 className={"mt-5 text-center"}>List Product</h1>

           <div className={" mr-25 flex gap-3 justify-end"}>
               <input
                   onChange={handleInput}
                   className={"p-2 border-1 w-[400px] rounded-md border-gray-300"}
                   placeholder={"Search name"}
               />
               <button
                   onClick={HandleSubmit}
                   className={"p-2 pl-5 pr-5 bg-blue-500 text-white rounded-md hover:bg-blue-400 rounded-1  cursor-pointer"}
               >Search</button>
           </div>


            <div>
                <Products data={dataPro}/>
            </div>
        </div>
    )
}