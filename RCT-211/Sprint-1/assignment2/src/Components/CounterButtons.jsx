import React, { useState } from "react";
import { store } from "../Redux/store";


import {handleAddActionObj, handleReduceActionObj} from "../Redux/action"

const { subscribe } = store

const CounterButtons = () => {

const [forceUpdate, setForceUpdate] = useState(0);


subscribe(()=>{
    setForceUpdate((prev)=>prev+1);
    console.log(forceUpdate)
  })

  return (
    <div data-testid="counterButtons">
      <button data-testid="addButton" onClick={handleAddActionObj}>ADD</button>
      <button data-testid="reduceButton" onClick={handleReduceActionObj}>REDUCE</button>
    </div>
  );
};

export default CounterButtons;
