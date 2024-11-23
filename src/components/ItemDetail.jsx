import React from 'react'
import ItemCount from './ItemCount'
import Item from './Item'


const ItemDetail = (producto={producto}) => {
    
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos!`)
    }
    return (
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
            <p>Detalle del{producto.name}</p>
            <img src={producto.img} alt={producto.name}/>
            <p>{producto.description}</p>
            <p>${producto.price}</p>
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail