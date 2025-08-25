import {Component} from "react";
import type {Product} from "./Parent.tsx"
import {Trash2} from 'lucide-react';
import React from "react";
import ReactDOM from "react-dom";
import './shop.css'
interface Props {
    data: Product[];
    handleProductBtn: (id:number) => void;
    handleMinusPro: (id:number) => void;
    handleDelete: (id:number) => void;
    totalCost: () => number;
    open: () => void;
}


export default class ModalPopup extends Component<Props>{


    render(){
        const {data, open, handleProductBtn, handleMinusPro, handleDelete, totalCost} = this.props;
        const cost = totalCost();


        return ReactDOM.createPortal(
            <>
            <div onClick={() => open()} className="modal-overlay" />
            <div className={"modal123"}>

                <h2>Cart</h2>
                <div className={"ProductInCart"}>
                    {data.length === 0 ? (
                        <h3>Chưa Có Sản Phẩm</h3>
                    ):(
                            data.map((pro) => (
                                <div>
                                    <div>
                                        <img src={pro.imageLink} alt={"imgP"}/>
                                    </div>
                                    <p>{pro.name}</p>

                                    <button onClick={() => handleProductBtn(pro.id)}>+</button>
                                    <span>{pro.quantity ?? 1 }</span>
                                    <button onClick={() => handleMinusPro(pro.id)}>-</button>

                                    <Trash2 className={"bin"} onClick={() => handleDelete(pro.id)} />
                                </div>
                            ))
                        )}

                </div>
                <p>Tông Tiền: {new Intl.NumberFormat("vi-VN").format(cost)} <u>đ</u></p>
            </div>
            </>,
        document.body
        )
    }
}