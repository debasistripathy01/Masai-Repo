import { useContext } from "react"
import { CartContext } from "../context/cartContexr"


export const Card=()=>{


    const {handleChage} = useContext(CartContext)
    return (

        <div>
            <button onClick={()=>{
                handleChage(1);
            }}>Buy Now</button>
        </div>
        

    )
}

