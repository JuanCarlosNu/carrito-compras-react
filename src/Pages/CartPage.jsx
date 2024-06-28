import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Swal from "sweetalert2";

export const CartPage = () => {

  const {shoppingList, addProduct, removeProduct, incrementQuantity, decrementeQuantity} = useContext(CartContext);

const calculateTotal = ()=>{
   return shoppingList.reduce((total, product)=> total + product.price * product.quantity, 0).toFixed(2)
}
  const handlePurchase = () => {
      const productsPurchase = shoppingList.map(product => `${product.title} X ${product.quantity}`).join('\n')
      Swal.fire({
        icon: 'success',
        title: 'La compro se ha realizado con éxito',
        html:`<p> Has comprado: </p> <pre>${productsPurchase}</pre>`
      })
  }
  return (  
    <>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Eliminar</th>
    </tr>
  </thead>
  <tbody>
    { 
      shoppingList.map(product=> (

        <tr key={product.id} >
      <th scope="row" >{product.title}</th>
      <td>{product.price}</td>



      <button 
      className="btn btn-outline-primary"
      onClick={()=>decrementeQuantity(product.id)}
      >
        -
        </button>

      <button className="btn btn-primary">{product.quantity}</button>
      <button 
      className="btn btn-outline-primary"
      onClick={()=>incrementQuantity(product.id)}>
        +
        </button>


      <td>
        <button className="btn btn-danger"
         onClick={()=> removeProduct(product.id)

         }>
          Eliminar
         </button>
      </td>
    </tr>

      ))
    }
    <tr></tr>
    <th><b>Total:</b></th>
    <td></td>
    <td></td>
    <td>${calculateTotal()}</td>
    
  </tbody>
</table>
<div className="d-grid gap2">
  <button className="btn btn-primary"
   type="button"
   onClick={handlePurchase}>Comprar</button>
</div>

    </>
  )
}
