// racfe -----> shirtcut to take the format for the React component

import React from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'


const todo = () => {
  return (
    <div>
      <h1>Add To DO</h1>
      <AddTodo />
      <TodoList />
    </div>

  )
}

export default todo