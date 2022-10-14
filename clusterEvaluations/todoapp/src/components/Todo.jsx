// racfe -----> shirtcut to take the format for the React component

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import { useState } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


//fetch data 

const FetchTodo = ()=>{
  return fetch("http://localhost:5000/tasks").then((res)=> res.json())
}

//Adding Todos

const addTodos =async(todo)=>{
  return fetch("http://localhost:5000/tasks",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(todo)

  }).then((res)=>{
    res.json()
  })
}

let Todo = () => {

const[todos, setTodos] = useState([])

  const handleAdd =()=>{
    const Item ={
      title:"text",
      status: false,

    }
    addTodos().then((res)=>{
      console.log(res);
    })
  }

useEffect(()=>{
  FetchTodo().then((res)=>{
    setTodos(res);
    console.log(res);
  })
},[])

  return (
    <div>
      <h1>Add To DO</h1>
      <AddTodo handleAdd={handleAdd}/>
      {
        todos.map((item)=>{
          <TodoList 
          title={item.title}
          key={item.id}
          status={item.status}
          id={item.id}
          />
        })
      }
      {/* <TodoList /> */}
    </div>

  )
}

export default Todo