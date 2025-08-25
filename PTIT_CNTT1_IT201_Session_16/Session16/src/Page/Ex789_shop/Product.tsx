import {Component} from "react";
import {Product} from './Parent.tsx'
import { ShoppingBag } from 'lucide-react';


interface State{
    data?: Product[];
    handleProductBtn: (id:number) => void,
}

export default class Product_shop extends Component<State>{

    render(){
        const {data, handleProductBtn} = this.props;
        return(
            <div className={"containerProduct"}>
                {
                    data?.map((pro) => (
                        <div className={"product"}>
                            <img src={pro.imageLink} alt={"ImagePhone"}/>
                            <h2>{pro.name}</h2>
                            <p>{new Intl.NumberFormat("vi-VN").format(pro.price)} <u>đ</u></p>
                            <button onClick={() => handleProductBtn(pro.id)}  className={"btn btn-primary"} ><ShoppingBag /> Thêm vào Giỏ Hàng</button>
                        </div>
                    ))

                }
            </div>
        )
    }
}