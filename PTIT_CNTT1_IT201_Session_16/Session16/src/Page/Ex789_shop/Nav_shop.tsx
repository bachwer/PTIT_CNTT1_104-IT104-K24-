import {Component} from 'react'
import { ShoppingCart } from 'lucide-react';

interface State{
    cartCount: () => number;
    open: () => void;
}

class Shop extends Component<State>{

    render(){

        const {cartCount, open} = this.props
        const count = cartCount()
        return(
            <nav className={"NavShop"}>
               <div className={"NavShop_MENU"}>
                   <p>Trang Chủ</p>
                   <p>Danh Sách Sản Phẩm</p>
               </div>
                <div onClick={() => open()}  className={"ShoppingCart"}>
                    <ShoppingCart size={32}/>
                    {count > 0 && (
                        <span className="CartBadge">{count}</span>
                    )}
                </div>
            </nav>
        )
    }
}

export default Shop