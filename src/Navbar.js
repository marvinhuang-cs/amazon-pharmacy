import React from 'react'
import './Navbar.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//navbar with links to home, cart, with search bar
function Navbar() {
    return (
        <div className="navbar">
            <img src="https://assets.prod.apex.wolfgang.a2z.com/assets/ap-logo-full-color.svg" alt=""/>
            
            <div className="navbar__search">
                <input
                type="text"/>
            </div>

            <div className="navbar__option">
                <span>Sign in to Pharmacy</span>
            </div>

            <div>
                <ShoppingCartIcon/> 
            </div>

            <div>
                <span>Cart</span>
            </div>

        </div>
    )
}

export default Navbar
