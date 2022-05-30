import React, {useContext, useState} from 'react'
import {globalState} from '../../globalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart-shopping-solid.svg'
import {Link} from 'react-router-dom'
import User from './icon/user-solid.svg'
import Brand from './icon/vimeo-v-brands.svg'
import Home from './icon/shop-solid.svg'
import axios from 'axios'
import Plus from './icon/folder-plus-solid.svg'
import Clock from './icon/clock-solid.svg'
import Logout from './icon/right-from-bracket-solid.svg'
import Category from './icon/hammer-solid.svg'
import Find from './icon/magnifying-glass-solid.svg'



function Header() {
    const state = useContext(globalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    const [cart] = state.userAPI.cart
    const [menu, setMenu] = useState(false)
    const [search, setSearch] = state.productsAPI.search


    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li className='create-product'>
                    <Link to="/create_product" >
                        <img src={Plus} alt="" width="30"/>
                      
                        
                    </Link>
                </li>
                <li className='category-fix' ><Link to="/category"><img src={Category} alt="" width="30"/>
                <span>Categories</span>
                </Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history"><img src={Clock} alt="" width="30"/></Link></li>
                <li><Link to="/" onClick={logoutUser}><img src={Logout} alt="" width="30"/></Link></li>
            </>
        )
    }

    const searchBtn = () => {
        return (
            <>
            <li>
            <input type="text" value={search} placeholder="Enter your search!"
            onChange={e => setSearch(e.target.value.toLowerCase())} />
            </li>
           
            </>
        )
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            
           <div className='header-main'>
           <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    
                    <Link to="/">{isAdmin ? <img src={Brand} alt="" width="65"/> : <img src={Brand} alt="" width="65"/>}</Link>
                    Quang Vinh Shop
                </h1>

            </div>
            


            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? <img src={Home} alt="" width="35" />: <img src={Home} alt="" width="35" />}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li className='User'><Link to="/login"><img src={User} alt="" width="25"/></Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="35" />
                    </Link>
                </div>
            }
           </div>
            
        </header>



    )
}

export default Header