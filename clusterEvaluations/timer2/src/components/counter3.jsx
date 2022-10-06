import React from "react";
import { useState, useEffect } from "react";



export default function Counter3(){

    const [count, setCount] = useState(0);

    useEffect((el)=>{

        console.log(`You clicked ${count} times`)

    },[])

    return (
        <div className="application">
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count + 1)}>Click</button>
        </div>
    )
}