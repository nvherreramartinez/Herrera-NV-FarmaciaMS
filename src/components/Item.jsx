import React from 'react'
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'


const Item = ({producto})=>{
    return (
        <Card style={{ width: '18rem'}}>
            <Card.Img variant='top' src={producto.img} alt={producto.name}/>
            <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{producto.atc}</Card.Subtitle>
                <Card.Text>
                    ${producto.price},00 
                    Stock: {producto.stock} unidades.
                </Card.Text>
                <Link className="btn btn-info" to={`/item/${producto.id}`}>Ver más</Link>
            </Card.Body>
        </Card>
    );
}

export default Item
