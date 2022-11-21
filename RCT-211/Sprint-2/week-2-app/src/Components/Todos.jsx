import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import { axios } from "axios"

const Todos = () => {

    const getTodos=()=>{
        axios.get("https://localhost:8080/todos").then(r=>{
            // successful if then
        }).catch((error)=>{
            console.log(error);
        })
    }
    // fetch all the Todos when component mounts
    useEffect(()=>{
        getTodos()
    },[])
  return (
    <div>
        
        <h1>Todos</h1>
        <TodoInput />
    </div>
  )
}

export default Todos