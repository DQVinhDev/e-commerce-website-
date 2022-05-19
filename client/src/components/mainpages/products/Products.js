import React ,{useContext} from "react"; 
import {globalState} from '../../../globalState'
import ProductItem from "../utils/productitem/ProductItem";
import Loading from "../utils/loading/Loading";


function Products() {
    const state = useContext(globalState)
    const [products] =  state.ProductsAPI.products
    

    return(
        <>
        <div className="products">
           {
               products.map(product =>{
                   return <ProductItem key={product._id} product={product}/>
               })
           }
        </div>
        {products.length == 0 && <Loading/>}
        </>
    )
}

export default Products