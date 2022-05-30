
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {globalState} from '../../../../globalState'
import Bag from '../../../headers/icon/bag-shopping-solid.svg'


function BtnRender({product,deleteProduct}) {
    const state = useContext(globalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart

    
    return (
        <div className="row_btn">
            {
                isAdmin ? 
                <>
                    <Link id="btn_buy-delete" to="#!" 
                    onClick={() =>deleteProduct(product._id, product.images.public_id)}>
                        Delete
                    </Link>
                    <Link id="btn_view" to={`/edit_product/${product._id}`}>
                        Edit
                    </Link>
                </>
                : <>
                    <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                        
                        <span id="btn_buy-img"><img src={Bag} alt="" width="20"  />
                        Add
                        </span>
                        

                    </Link>
                    {/* <Link id="btn_view" to={`/detail/${product._id}`}>
                        View
                    </Link> */}
                    
                </>
                
            }
                
        </div>
    )
}

export default BtnRender