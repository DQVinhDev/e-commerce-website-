import React, { useContext , useState} from "react";
import {globalState} from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom';


function Header() {
    const value = useContext(globalState)
    return (
        <header>
            <div className="menu">
                <img src={Menu} alt="" width="30px" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">QUANG VINH SHOP</Link>
                </h1>
            </div>

            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/login">Login & Register</Link></li>
                <li>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>
            </ul>

            <div className="cart-icon">
                <span>0</span>
                <Link to="/cart">
                <img src={Cart} alt="" width="30px" />
                </Link>
            </div>
            
            
        </header>
    )
    
    
}

export default Header