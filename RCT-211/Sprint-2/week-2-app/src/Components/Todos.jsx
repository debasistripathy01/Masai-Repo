import React, { useEffect } from 'react'

import { TodoInput } from './TodoInput'

import { getTodos } from '../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
// import { store } from '../Redux/store';

const Todos = () => {

    const dispatch = useDispatch();

    const todos = useSelector(store => store.todos)

    const isLoading = useSelector(store => store.isLoading);

    
    useEffect(()=>{
        // if(todos.length){

        // }
        getTodos(dispatch);
    }, [])



    if(isLoading){
        return <h2>...Loading</h2>
    }
  return (
    <div>
        <h1>Todos</h1> ,
        <TodoInput />
s
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