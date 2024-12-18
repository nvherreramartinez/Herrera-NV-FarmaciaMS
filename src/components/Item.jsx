import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className="card" style={{width:'18rem', marginTop:10}}>
            <img src={producto.img} className="card-img-top" alt={producto.name}/>
            <div className="card-body">
                <h5 className='card-title'>{producto.name}</h5>
                <p className='card-text'>${producto.price},00</p>
                <p className='card-text'>Stock:{producto.stock} unidades.</p>
                <Link to={`/item/${producto.id}`} className="btn btn-dark">Ver más</Link>
            </div>
        </div>
    )
}
export default Item
