import React, { useState } from 'react'
import TodoItem from './TodoItem'



const initialState = [
    {id: 1, title: "Learn React", status: false},
    {id: 2, title: "Learn TypeScript", status: true},
    {id: 3, title: "Learn Redux", status: false}
]

export const Todos = () => {

    const [ Todos , setTods ] = useState(initialState);

    const [ currentTodo, setCurrentTodos] = useState("");

    const handleChange = (e)=>{
        setCurrentTodos(e.target.value);
    }

    const handleAddTask = ( )=>{
        const payload = {
            id: Todos.length + 1,
            status: false,
            title: currentTodo
        }

        setTods([...Todos, payload]);
        setCurrentTodos("");
    }
  return (
    <div>

        <h1>TodoItem</h1>
        <input value={currentTodo} onChange={handleChange}/>
        <button onClick={handleAddTask}>Add</button>
        {Todos.length && Todos.map((item)=>{
            return <TodoItem key={item.id} {...item} />
        })}
        
    </div>

  )
}
