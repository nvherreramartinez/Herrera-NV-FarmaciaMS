import { useState, useEffect } from 'react'
import { getProducts } from "../mock/data"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId}= useParams()

    useEffect(() => {
        getProducts()
            .then((res) => {
                if (categoryId) {
                    setProducts(res.filter((producto) => producto.category === categoryId))
                } else {
                    setProducts(res)
                }
            })
            .catch((error) => console.log(error))
    }, [categoryId])
    return (
        <div>
            <h1 className="text-center">{greeting}<span style={{ textTransform: 'capitalize', color: 'violet' }}>{categoryId}</span></h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer