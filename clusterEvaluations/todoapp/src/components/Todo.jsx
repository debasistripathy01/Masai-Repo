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

// const toggleTodos = (id, newStatus) =>{
//   return fetch("http://localhost:5000/tasks",{
// }

const toggleTodos =async(id, newStatus)=>{
  return fetch(`http://localhost:5000/tasks/${id}`,{
    method:"PATCH",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({status:newStatus})

  }).then((res)=>{
    res.json()
  })
}


// Adding ToDOs
const Todo = () => {

const[todos, setTodos] = useState([])
const [loading, setLoading] = useState(false)
  
useEffect(()=>{
  handleTodos();
},[]);


const handleTodos=()=>{
  setLoading(true)
  FetchTodo().then((res)=>{
    setLoading(false)
    setTodos(res);
    // console.log(res);

  }).catch((error)=>{
    console.log(error);
    setLoading(false)
  })
}

const handleAdd =(text)=>{
  const Item ={
    title: text,
    status: false,
  };
  setLoading(false)
  addTodos(Item).then((res)=>{
    handleTodos();
    console.log(res);
  })

}
const handleToggle = (id, newStatus) =>{
  setLoading(true);
  toggleTodos(id, newStatus).then((res)=>{
    handleTodos()
  }).catch((error)=>{
    setLoading(false);
  })
}


  return (
    <div>
      <div>{loading && "...Loading"}</div>
      <h1>Add To DO</h1>
      <AddTodo handleAdd={handleAdd}/>
      {
        todos.map((item)=>{
          return (<TodoList 
          title={item.title}
          key={item.id}
          status={item.status}
          id={item.id}
          handleToggle={handleToggle}
          />)
        })
      }
      {/* <TodoList /> */}
    </div>

  )
}

export default Todo