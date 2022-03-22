import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const Products = (props) => {
    const { addToCart, product } = props;
    const { img, name, price, seller, ratings } = product;
    return (
        <div className='single-product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h2>Price : ${price}</h2>
                <p>Manufacturer : {seller}</p>
                <p><small>ratings : {ratings}</small></p>
            </div>
            <button onClick={() => addToCart(product)}>
                <p style={{ marginRight: '8px' }}>Add To Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    )
}

export default Products