import React from "react";
import { useState, useEffect } from "react";



const Counter2 = () => {

  const [count, setCount] = useState(10);

  useState(()=>{
    const id = setTimeout(()=>{
      
        setCount((prevState)=>{
          if(prevState === 0){
            clearInterval(id);
            return prevState;
          }    
          return prevState-1
        })

    }, 1000)
  },[count])
   
  return (
      <div>

        <h1>Counter : {count}</h1>
        

      </div>
  )
};
export default Counter2;
