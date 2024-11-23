import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ({product}) => {
    const [products, setProducts] = useState({})
    const {id} = useParams()

    useEffect(()=>{
        getProducts(id)
        .then((res) => setProducts(res))
        .catch((error) => console.log(error))
        },[])
    return (
        <div>
            <ItemDetail product={product}/>
        </div>
    )
}

export default ItemDetailContainer
