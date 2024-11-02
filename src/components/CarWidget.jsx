const CartWidget = ({counter}) => {
    return(
        <div className="cartWidgetContainer"> 
            <img src="/public/carrito-compras.png" alt="cart" className="cartIcon"></img>
            <p className="cartCounter">{counter}</p>
        </div>
    )
}
export default CartWidget
