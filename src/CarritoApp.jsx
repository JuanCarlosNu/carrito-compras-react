import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { ProductsPAge } from "./Pages/ProductsPAge"
import { CartPage } from "./Pages/CartPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";

export const CarritoApp = () => {

  return (
    <ProductsProvider>
      <CartProvider>
    <Navbar />
    <div className="container">
        <Routes>
            <Route path="/" element={<ProductsPAge />}></Route>
            <Route path="/carrito" element={<CartPage />} ></Route>
            <Route path="/*" element={<Navigate to={'/'}/>}></Route>

        </Routes>
    </div>
    </CartProvider>
    </ProductsProvider>    
    
  )
};
