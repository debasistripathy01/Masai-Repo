

import { useContext } from "react";
import CartContext from "../context/cartContexr"

 const NavBar=()=>{

    const { count } = useContext(CartContext);

    return (
        <div>
            Cart:{count}
        </div>
    )
}

export  {NavBar}