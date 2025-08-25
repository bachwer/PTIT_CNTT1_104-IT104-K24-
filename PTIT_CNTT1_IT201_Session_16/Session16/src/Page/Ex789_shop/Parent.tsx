import {Component} from 'react'
import './shop.css'


import Nav_shop from "./Nav_shop.tsx";
import Product_shop from "./Product.tsx"
import ModalPopup from "./ModalPopup.tsx";

export interface Product{
    name: string;
    price: number;
    imageLink: string;
    quantity?:number;
}

interface State{
    Products: Product[];
    ProSelection: Product[] ;
    isOpen: boolean;
}


class Shop extends Component<{}, State>{
    constructor(props: {}){
        super(props)

        this.state = {
            Products: [
                {
                    "id": 1,
                    "name": "Xiaomi Poco M7 Pro 5G",
                    "price": 5790000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_poco_m7_pro_xanh_5_20cec22a7c.jpg"
                },
                {
                    "id": 2,
                    "name": "Samsung Galaxy M55",
                    "price": 7290000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/samsung_galaxy_m55_den_4_d7f9674500.jpg"
                },
                {
                    "id": 3,
                    "name": "Honor X9c",
                    "price": 9490000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x9c_tim_5_0ac40e3956.png"
                },
                {
                    "id": 4,
                    "name": "Honor Magic V3",
                    "price": 29990000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_magic_v3_xanh_2_2e82ae0429.png"
                },
                {
                    "id": 5,
                    "name": "Xiaomi 14T Pro",
                    "price": 18990000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/xiaomi_14t_pro_blue_1_5f61c0cb50.png"
                },
                {
                    "id": 6,
                    "name": "Honor X7c",
                    "price": 4700000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_x7c_xanh_5_560007b413.jpg"
                },
                {
                    "id": 7,
                    "name": "Honor 400 Pro 5G",
                    "price": 17650000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/honor_400_pro_xam_4_7d109271f9.png"
                },
                {
                    "id": 8,
                    "name": "Nubia V70 Design",
                    "price": 2790000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/nubia_v70_design_xanh_5_93acc5fb92.jpg"
                },
                {
                    "id": 9,
                    "name": "Tecno Spark 30 (8GB/128GB)",
                    "price": 3120000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/tecno_spark_30_8gb_vang_e940f9f07a.png"
                },
                {
                    "id": 10,
                    "name": "TCL 60R 5G",
                    "price": 2790000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/tcl_60r_trang_1_d26798e6b5.png"
                },
                {
                    "id": 11,
                    "name": "iPhone 15 Pro Max 256GB",
                    "price": 27990000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/iphone_15_pro_max_f589ed5358.png"
                },
                {
                    "id": 12,
                    "name": "Nubia A76 (4GB/128GB)",
                    "price": 2190000,
                    "imageLink": "https://cdn2.fptshop.com.vn/unsafe/360x0/filters:format(webp):quality(75)/nubia_a76_xam_5_87aade2a96.jpg"
                }
            ],
            ProSelection: [],
            isOpen: false,
        }

    }
    handleOpenModal = () =>{
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }


    handleProductBtn = (id: number) => {
        const foundProduct = this.state.Products.find((pro) => pro.id === id);
        const found = this.state.ProSelection.find((pro) => pro.id === id);

        console.log(id);

        if(found){
            found.quantity = found.quantity ?  found.quantity + 1 : 1
            console.log(found.quantity)
            this.setState((prev) => ({
                ProSelection: prev.ProSelection.map((pro) => pro.id === id ? {...pro,found} : pro)
            }))

            return;
        }

        if(foundProduct){
            foundProduct.quantity = 1;
           this.setState((prev) => ({
               ProSelection: [...prev.ProSelection,foundProduct],
           }))
        }
    }

    handleMinusPro = (id: number) => {
        const found = this.state.ProSelection.find((pro) => pro.id === id);


        if(found){
            found.quantity = found.quantity ?  found.quantity - 1 : 0;
            console.log(found.quantity)
            this.setState((prev) => ({
                ProSelection: prev.ProSelection.map((pro) => pro.id === id ? {...pro,found} : pro)
            }))

            return;
        }
    }

    handleDelete = (id: number) => {
        this.setState((prev) => ({
            ProSelection: prev.ProSelection.filter((pro) => pro.id !== id )
        }))
    }

    countProduct = () => {
        console.log(this.state.ProSelection.length);
        return this.state.ProSelection.length;
    }

    totalCost = () => {
        let total = 0;

        this.state.ProSelection.map(pro => {
            total = total + pro.price * pro.quantity;
        })
        return total;
    }


    render(){
        return(
          <div>
              {this.state.isOpen && (

                  <ModalPopup totalCost={this.totalCost} handleDelete={this.handleDelete} handleMinusPro={this.handleMinusPro} handleProductBtn={this.handleProductBtn} data={this.state.ProSelection} open={this.handleOpenModal}/>
              )
              }
              <Nav_shop open={this.handleOpenModal} cartCount={this.countProduct}/>

              <Product_shop data={this.state.Products}  handleProductBtn={this.handleProductBtn}/>
          </div>
        )
    }
}

export default Shop