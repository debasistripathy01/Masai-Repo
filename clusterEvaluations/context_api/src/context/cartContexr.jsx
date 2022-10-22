

import { useState } from "react";
import { createContext } from "react";



export const CartContext = createContext()

const CartContextProvider = ({children}) =>{

    const [count, setCount ] = useState(0);

    const handleChange=(value)=>{
        setCount(count + value)
    }

    return (
        <CartContext.Provider value={{count, handleChange}}>
            {children}
        </CartContext.Provider>
    )
}


export  default CartContextProvider