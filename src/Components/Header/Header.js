import './Header.css'
import logo from '../../images/Logo.svg'
import React from 'react'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="website-logo" />
            <div className='header-item'>
                <a href="/shop">Shop</a>
                <a href="/orders">Orders</a>
                <a href="/inventory">Inventory</a>
                <a href="/about">About</a>
            </div>
        </nav>
    )
}

export default Header