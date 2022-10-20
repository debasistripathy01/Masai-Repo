
import React from "react";
import { useContext } from "react";
import CartContext from "../context/cartContexr"

 const NavBar=()=>{

    const count = useContext(CartContext);

    return (
        <div>
            Cart:{0}
        </div>
    )
}

export  {NavBar}