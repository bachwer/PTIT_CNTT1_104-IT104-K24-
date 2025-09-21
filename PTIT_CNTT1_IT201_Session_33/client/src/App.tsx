// App.tsx
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./components/css/style.css"
import "./components/css/bootstrap.min.css"

export default function App() {
    return (
        <div className="container">
            <Header />
            <div className="row">
                <ProductList />
                <Cart />

            </div>


        </div>
    );
}