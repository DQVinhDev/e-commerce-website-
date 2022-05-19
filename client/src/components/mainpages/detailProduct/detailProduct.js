
import React, {useContext,useEffect,useState} from "react";
import {useParams, Link} from 'react-router-dom'
import {globalState} from '../../../globalState'
import ProductItem from "../utils/productitem/ProductItem";



function DetailProduct(){
    const params = useParams()
    const state = useContext(globalState)
    const [products] = state.ProductsAPI.products
    
    const [detailProducts, setDetailProducts] = useState([])

    useEffect(()=> 
    {
        
        if(params.id){
            products.forEach(product => {
                if(product._id == params.id) setDetailProducts(product)
            })
        }
    },[params.id,products])
    
    if(detailProducts.length == 0) return null;

    return (
        <div>
            <div className="detail">
                <img src={detailProducts.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h2>{detailProducts.title}</h2>
                        <h6>#id: {detailProducts.product_id}</h6>
                    </div>
                    <span>$ {detailProducts.price}</span>
                    <p>{detailProducts.description}</p>
                    <p>{detailProducts.content}</p>
                    <p>Sold: {detailProducts.sold}</p>
                    <Link to="/cart" className="cart">
                        Buy Now
                    </Link>
                </div>
            </div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProducts.category 
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
            
            
        </div>
          
    )
}
export default DetailProduct