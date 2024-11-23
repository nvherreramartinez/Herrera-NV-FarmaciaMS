import React from 'react';
import Item from './Item';

const ItemList = ({ products }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap'}}>
            {products.map((producto) => <Item key={producto.id} producto={producto} />)}
        </div>
    );
};

export default ItemList
