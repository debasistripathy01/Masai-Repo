import { useContext } from "react"
import { CartContext } from "../context/cartContexr"


export const Card=()=>{


    const {handleChange} = useContext(CartContext)
    return (

        <div>
            <button onClick={()=>{
                handleChange(1);
            }}>Buy Now</button>
        </div>
        

    )
}

