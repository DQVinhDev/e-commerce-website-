
import React, {createContext, useState} from 'react'
import ProductsAPI from './api/ProductsAPI'




export const globalState = createContext()
export const DataProvider = ({children}) => {
    const [token, setToken] = useState(false)

    ProductsAPI()
    const state = { 
        token : [ token, setToken],
        ProductsAPI : ProductsAPI()
    }
    return (
        <globalState.Provider value={state}>
            {children}
        </globalState.Provider>
    )
}

