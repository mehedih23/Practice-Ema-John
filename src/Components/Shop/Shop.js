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

    const [cart, setCart] = useState([]);
    const [price, setPrice] = useState(0);
    const [tax, setTax] = useState(0);
    const [shipping, setShipping] = useState(0);
    const [grandTotal, setGrandTotal] = useState(0)
    // Function for single product Button //
    const addToCart = (product) => {
        console.log(product);
        setCart([...cart, product]);
        const newPrice = product.price + price;
        setPrice(newPrice);
        setTax(newPrice * 0.10);
        setShipping(15);
    }
    useEffect(() => {
        setGrandTotal(price + tax + shipping);
    }, [price, shipping, tax])

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    ></Products>)
                }
            </div>
            <div className='summary-container'>
                <p className='order-summary'>Order Summary</p>
                <p>Selected Item : {cart.length}</p>
                <p>Price : ${price}</p>
                <p>TAX : ${tax.toFixed(2)}</p>
                <p>Shipping Charge : ${shipping}</p>
                <p><b>Grand Total : ${grandTotal}</b></p>
            </div>
        </div >
    )
}

export default Shop