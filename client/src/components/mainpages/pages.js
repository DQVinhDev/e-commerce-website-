import React ,{useContext}from "react";
import { Routes ,Route } from 'react-router-dom';


import Products from './products/Products'
import DetailProduct from './detailProduct/detailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'


import {globalState} from '../../globalState'


function Pages(){

    const state = useContext(globalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return (
        <>
            <div className="main-page"></div>
            <Routes>
            <Route exact path="/" element={<Products/>} />
            <Route exact path="/detail/:id" element={<DetailProduct/>} />


            <Route exact path="/login"  element={isLogged ? <NotFound/> : <Login/>  }/>
            <Route exact path="/register"  element={isLogged ? <NotFound/>  : <Register/>}  />
            <Route exact path="/category"  element={isAdmin ? <Categories/>  : <NotFound/>}  />
    
            <Route exact path="/create_product"  element={isAdmin ? <CreateProduct/>  : <NotFound/>}  />    
            <Route exact path="/edit_product/:id"  element={isAdmin ? <CreateProduct/>  : <NotFound/>}  />
    
            <Route exact path="/history"  element={isLogged ? <OrderHistory />  : <NotFound/>}  />
            <Route exact path="/history/:id"  element={isLogged ? <OrderDetails/>  : <NotFound/>}  />
    
            <Route exact path="/cart"  element={<Cart/>} />
            
        
        
            <Route exact path="/*"  element={<NotFound/>} />


            <Route path="*" exact component={<NotFound/>} />

            <Route path='/facebook' component={() => { 
                window.location.href = 'https://www.facebook.com/vin0405/'; 
                return null;
            }}/>

            <Route path='/github' component={() => { 
                window.location.href = 'https://github.com/vinhkute24'; 
                return null;
            }}/>
        </Routes>
        </>
        
    )
}
export default Pages


