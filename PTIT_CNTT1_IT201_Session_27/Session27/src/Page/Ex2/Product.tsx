
import CardProduct from "./CardProduct.tsx"

export default function (){


    return(
        <div>
            <div className={"bg-blue-400 text-white p-3.5 text-center"}>
                <h1>Trang Chi tiep san pham</h1>
                <p>Danh Sach san pham</p>
            </div>


            <div>
                <h1>Danh Sach San Pham</h1>
                <div className={"flex flex-wrap gap-3"}>
                    <CardProduct/>
                </div>
            </div>
        </div>

    )

}