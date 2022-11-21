import React from 'react'

import { handleAdd, handleReduce } from '../Redux/action';
import { useDispatch, useSelector } from "react-redux";


export const Counter = () => {

    const count = useSelector((reduxStore)=>
        reduxStore.count
    )
    const dispatch = useDispatch()

    const addHandler=()=>{
        dispatch(handleAdd(1))
    }
    const reduceHandler=()=>{
        dispatch(handleReduce(1));
    }

  return (
    <div>
        <h1>Count {count}</h1>
        <button onClick={addHandler}>ADD</button>
        <button onClick={reduceHandler}>REDUCE</button>
    </div>
  )
}
