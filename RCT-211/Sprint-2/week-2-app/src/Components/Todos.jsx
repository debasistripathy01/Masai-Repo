import React, { useEffect } from 'react'
import TodoInput from './TodoInput'
import { axios } from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { getTodosError, getTodosRequest, getTodosSuccess } from '../Redux/action'
import { store } from '../Redux/store'

const Todos = () => {
    const dispatch = useDispatch()
    const todos = useSelector(store=>store.todos);

    const isLoading =useSelector(store=>store.isLoading);
    const getTodos=()=>{

        dispatch(getTodosRequest());
        axios.get("https://localhost:8080/todos").then(r=>{
            // successful if then
            dispatch(getTodosSuccess(r.data))
        }).catch((error)=>{
            console.log(error);
            dispatch(getTodosError());
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
        { isLoading && <div>Loading...</div>}
        {todos.length > 0 && todos.map((item)=>{
            return(
                <div key={item.id}>
                    {item.title} - { item.status ? "True": "False"}
                </div>
            )
        })}
    </div>
  )
}

export default Todos