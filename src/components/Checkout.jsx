import React, { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore"
import { db } from "../services/firebase"

const Checkout = () => {
    const [user, setUser] = useState({})
    const [validate, setValidate] = useState('')
    const [orderId, setOrderId]=useState('')
    const {cart, cartTotal, clear}= useContext(CartContext)
    const userData = (e)=>{
        setUser(
            {
                ...user, 
                [e.target.name]:e.target.value
            }
        )
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if (!user.name || !user.lastname || !user.address || !user.email){
            alert('Todos los campos son obligatorios')
        }else if(user.email !== validate){
            alert('El mail debe ser el mismo')
        }else{
            let orders = {
                buyer: user,
                cart: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, orders)
            .then((res)=>{
                cart.forEach((item)=>{
                    const docRef = doc(db, "vademecum", item.id)
                    getDoc(docRef)
                    .then((dbDoc)=>{
                        updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
                    })
                })
                setOrderId(res.id)
                clear()
            })
            .catch((error)=> console.log(error))
        }
    }

    return (
        <div>
            {orderId !== '' ? 
                <div>
                    <h5>Su pedido ha sido registrado. ¡Gracias por su compra!.</h5>
                    <h6>Su número de pedido es: {orderId}</h6>
                    <Link to='/' className='btn btn-success'>Volver a Inicio</Link>
                </div>
                :
                <div>
                    <h3>Completar con sus datos personales</h3>
                    <form className="d-flex flex-column align-items-center" onSubmit={finalizarCompra}>
                        <input type="text" name="name" placeholder="Ingrese su mobre" onChange={userData} />
                        <input type="text" name="lastname" placeholder="Ingrese su apellido" onChange={userData} />
                        <input type="text" name="address" placeholder="Ingrese su dirección" onChange={userData} />
                        <input type="text" name="email" placeholder="Ingrese su email" onChange={userData} />
                        <input type="text" name="second-mail" placeholder="Repita su mail" onChange={(e) => setValidate(e.target.value)}/>
                        <button className="btn btn-success" type="submit">Enviar</button>
                    </form>
                </div>}
        </div>
    )
}
export default Checkout