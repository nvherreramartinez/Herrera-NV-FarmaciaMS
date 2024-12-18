import React, { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "./CartItem"
import EmpyCart from "./EmpyCart"

const CartContainer = () => {
    const{cart} = useContext(CartContext)
    return (
        <div>
        {!cart.lenght
            ? <EmpyCart/>
            : <div>
                <h2>Tu carrito</h2>
                {cart.map((producto) => <CartItem key={producto.id} producto={producto}/>)}
                <span>Monto total de su compra: ${cartTotal()}</span>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: "2rem"}}>
                    <button className="btn btn-danger" onClick={clear}>Borrar carrito</button>
                    <button className="btn btn-success">Finalizar su compra</button>
                </div>
            </div>
            }
        </div>
    )
}
export default CartContainer