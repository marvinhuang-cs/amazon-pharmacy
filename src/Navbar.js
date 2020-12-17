import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

//navbar with links to home, cart, with search bar
function Navbar() {
    return (
        <nav className="navbar navbar-light bg-light">
            
            <img className="navbar__logo" src="https://assets.prod.apex.wolfgang.a2z.com/assets/ap-logo-full-color.svg" alt=""/>
            <div className="navbar__option1">
                <span>Sign in to Pharmacy</span>
            </div>

            <div className="navbar__option2">
                <ShoppingCartIcon/> 
                <span> 0 Cart</span>
            </div>

        </nav>
    )
}

export default Navbar
