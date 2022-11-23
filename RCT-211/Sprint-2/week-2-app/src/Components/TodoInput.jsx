import React, { useState } from 'react'

const TodoInput = () => {

    const [text, setText] = useState("");
    
  return (
    <div>
        <input placeholder='write Something' value={text} onChange={(e)=>setText(e.target.value)} />
        <button>Add Todo</button>
    </div>
  )
}

export default TodoInput