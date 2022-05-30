
import React, {useContext,useEffect,useState} from "react";
import {useParams, Link} from 'react-router-dom'
import {globalState} from '../../../globalState'
import ProductItem from "../utils/productitem/ProductItem";
import Bag from '../../headers/icon/bag-shopping-solid.svg'



function DetailProduct() {
    const params = useParams()
    const state = useContext(globalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() =>{
        if(params.id){

            products.forEach(product => {
                if(product._id === params.id) setDetailProduct(product)
            })
        }
    },[params.id, products])

    if(detailProduct.length === 0) return null;

    return (
        <>
            <div className="detail">
                <img className="detail-img" src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProduct.title}</h2>
                        
                    </div>
                    <span className="box-detail-price">$ {detailProduct.price}</span>
                    <p>{detailProduct.description}</p>
                    
                    <p>Sold: {detailProduct.sold}</p>
                    
                    <Link to="/cart" className="cart"
                    onClick={() => addCart(detailProduct)}>
                        <span className="cart-span">
                        <img src={Bag} alt="" width="20"/> 
                        <span className="cart-span-2">Add</span>
                        </span>
                       
                    </Link>
                </div>
            </div>

            <div>
                <h2>Others also bought</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct