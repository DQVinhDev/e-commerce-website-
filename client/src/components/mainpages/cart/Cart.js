import React, {useContext, useState, useEffect} from 'react'
import {globalState} from '../../../globalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import Cart_empty from '../../headers/icon/cart_empty.svg'
function Cart() {
    const state = useContext(globalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)

    useEffect(() =>{
        const getTotal = () =>{
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            },0)

            setTotal(total)
        }

        getTotal()

    },[cart])

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart}, {
            headers: {Authorization: token}
        })
    }


    const increment = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) =>{
        cart.forEach(item => {
            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            cart.forEach((item, index) => {
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async(payment) => {
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address}, {
            headers: {Authorization: token}
        })

        setCart([])
        addToCart([])
        alert("You have successfully placed an order.")
    }


    if(cart.length === 0) 
        return (
            <>
                <img className="img-cart" src={Cart_empty} alt="" width="200" />
                <h2 className="img-cart-h2" style={{textAlign: "center", fontSize: "24px"}}>YOUR SHOPPING BAG IS EMPTY!</h2> 
            </>
            
        )
        

    return (
        <div>
            <h1 className='h1-shopping-bag'>Shopping bag</h1>
            <div className='main-shopping-bag'>
                <div className='main-shopping-bag-2'>
                {
                cart.map(product => (
                    
                    <div className="detail-2 cart" key={product._id}>
                        <img className="detail-img-2"  src={product.images.url} alt="" />

                        <div className="box-detail-2">
                            <h2>{product.title}</h2>

                            <h3>$ {product.price * product.quantity}</h3>
                            <p>{product.description}</p>
                            

                            <div className="amount">
                                <button onClick={() => decrement(product._id)}> - </button>
                                <span>{product.quantity}</span>
                                <button onClick={() => increment(product._id)}> + </button>
                            </div>
                            
                            <div className="delete" 
                            onClick={() => removeProduct(product._id)}>
                                X
                            </div>
                        </div>
                    </div>
                ))
            }
                </div>
            

            <div className="total">
                <h3>Total:</h3>
                <span className='total-span'>$ {total}</span>
                <PaypalButton
                total={total}
                tranSuccess={tranSuccess} />
            </div>
        </div>
            </div>
            
    )
}

export default Cart