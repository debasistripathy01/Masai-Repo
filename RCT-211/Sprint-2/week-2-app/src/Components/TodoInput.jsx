import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodosError, addTodosRequest, addTodosSuccess, getTodosError } from '../Redux/action';



export const TodoInput = ({ getTodos }) => {
  const [ todo, setTodo] = useState("")
  const dispatch = useDispatch();


  const addToDo =()=>{
   

    if(todo){
      const payload ={
        title: todo,
        stats: false
      }

      dispatch(addTodosRequest());
       return axios.post("http://localhost:8080/todos", payload).then((item)=>{
        dispatch(addTodosSuccess());
      }).catch((error)=>{
        dispatch(addTodosError())
      })
    }
  }

  const handleAddTodo=()=>{
    // first Add the data using POST request 
    // call the GetToDos function to fetch all the data from db.json

    addToDo().then(()=>getTodos())


}

/*
  .then(r => return 'Hello world').then(r => console.log(r));
*/


  return (
    <div>
      <h1>Todo Input</h1>
      <input value={todo} placeholder='write SOmething' onChange={(e)=>setTodo(e.target.value)}/>
      <button onClick={handleAddTodo}>ADD</button>
    </div>
  )
}
