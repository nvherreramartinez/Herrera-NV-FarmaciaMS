import React, { useEffect, useState } from 'react'
import { getProducts } from '../mock/data'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct]=useState({})
    const { id } = useParams()
    console.log(id)

    useEffect(()=>{
        getProducts()
        .then((res)=> setProduct(res.find((item)=> item.id === '2')))
        .catch((error)=>console.log(error))
    },[])
    return (
    <div>
        <ItemDetail product={product}/>
    </div>
    )
}

export default ItemDetailContainer