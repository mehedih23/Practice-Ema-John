import './Shop.css'
import React, { useEffect, useState } from 'react'
import Products from '../Products/Products'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div className='summary-container'>
                <p>I am from summary container</p>
            </div>
        </div>
    )
}

export default Shop