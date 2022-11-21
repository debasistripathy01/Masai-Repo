import React, { useEffect } from 'react'
import { getTodosError, getTodosRequest, getTodosSuccess } from '../Redux/action'
import { TodoInput } from './TodoInput'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../Redux/store';

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(store => store.todos)

    const isLoading = useSelector(store => store.isLoading);

    const getTodos=()=>{
        dispatch(getTodosRequest())
        axios.get("http://localhost:8080/todos").then((item)=>{
            dispatch(getTodosSuccess(item.data));
        }).catch((error)=>{
            // console.log(error)
            dispatch(getTodosError())
        })
    }
    useEffect(()=>{
        // if(todos.length){

        // }
        getTodos();
    }, [])



    if(isLoading){
        return <h2>...Loading</h2>
    }
  return (
    <div>
        <h1>Todos</h1> ,
        <TodoInput getTodos={getTodos} />

        { todos.length >0 && todos.map((items)=>{
            return(
                <div key={items.id}>
                    { items.title } - { items.stats ? "true" : "false"}
                </div>
            )
        }) }
    </div>
  )
}

export  { Todos }