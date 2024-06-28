import Swal from "sweetalert2"
import { useContext, useState } from "react"
import { ProductsContext } from "../context/ProductsContext"
import { Cards } from "../components/Cards"
import { CartContext } from "../context/CartContext"

export const ProductsPAge = () => {

const {products} = useContext(ProductsContext);
const {addProduct, removeProduct} =  useContext(CartContext);


  return (
    <>
    <h1>Productos</h1>
    <hr/>
    {products.map(product=> 
    <Cards  
    key={product.id}
    id={product.id}
    image={product.image}
    title={product.title}
    description={product.description}
    price={product.price}
    handlerAdd={()=> addProduct(product)}
    handlerRemove= {( ) => removeProduct(product.id) }

    />
    
    )}
    
    </>
  )
}
