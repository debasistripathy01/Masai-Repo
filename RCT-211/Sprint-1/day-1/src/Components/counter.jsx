import React, { useEffect, useState } from "react";


const Counter =()=>{

    const [count, setCount] = useState(2);
    useEffect(()=>{
        console.log("Inside useEffect");

        let id = setInterval(()=>{
            console.log("Inside counter.jsx setInterval ")

        }, 1000)
        return ()=>{
            clearInterval(id);
        }
    }, []);
    return (<div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount((prev=>prev+1))}>ADD</button>
    </div>)
}

export default Counter