import './Products.css'
import React from 'react'

const Products = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='single-product'>
            <img src={img} alt="product" />
            <div className='product-info'>
                <h3>{name}</h3>
                <h2>Price : ${price}</h2>
                <p>Manufacturer : {seller}</p>
                <p><small>ratings : {ratings}</small></p>
            </div>
        </div>
    )
}

export default Products