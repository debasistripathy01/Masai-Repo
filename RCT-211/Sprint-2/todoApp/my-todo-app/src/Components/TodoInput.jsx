import React from 'react'

const TodoInput = () => {

    const [Title, setTitle] = React.useState("")
  return (
    <div>
        <h3>Todo Input</h3>
        <input placeholder='add Something'
        value={Title}
        onChange={(e)=>setTitle(e.target.value)}
        />
        <button>ADD</button>
    </div>

  )
}

export default TodoInput