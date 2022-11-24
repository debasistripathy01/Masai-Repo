
import React from 'react'
import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addTodosError, addTodosRequest, addTodosSuccess, getTodosError, getTodosRequest, getTodosSuccess } from '../Redux/action';
import { getTodos } from '../Redux/action';
import axios from 'axios';

const TodoInput = () => {

    const [ todos, setTodos ] = useState("");

    const dispatch = useDispatch();

    const addTodos = ()=>{
        if(todos){
            const payload ={
                title: todos,
                status: false,
            }
            dispatch(addTodosRequest());
            return axios.post("http://localhost:8080/todos", payload).then((item)=>{
                dispatch(addTodosSuccess())
            }).catch((err)=>{
                dispatch(addTodosError());
            })
        }
    }

    const handleAddTodo=()=>{
        addTodos().then(()=>
            getTodos()
        )
    }



  return (
    <div>
        <h1> Todo Input</h1>
        <input value={todos} placeholder="write SOmething" data-testid = "todo-input" />
        <button onClick={handleAddTodo} data-testid ="add-button">Add Todo</button>
    </div>
  )
}

export default TodoInput

