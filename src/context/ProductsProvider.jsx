import { useEffect, useState } from "react"
import { ProductsContext } from "./ProductsContext"




export const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState([])
    
    const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        console.log(data)
        }
        catch(error){
         Swal.fire(
          {
            icon:"error",
            title:"Error!",
            text:"Hubo un problema al cargar productos"
          }
         )
         console.error("hubo un error:" + error)
        }
    
      }
      
      useEffect(()=>{
        fetchProducts();
      },[])
    

  return (
<ProductsContext.Provider value={{products}}>
  {children}

</ProductsContext.Provider>

  
    )
}
