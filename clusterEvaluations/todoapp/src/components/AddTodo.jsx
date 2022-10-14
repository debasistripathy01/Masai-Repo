
import React from 'react'
import { useState } from 'react'

const AddTodo = () => {
    const [text, setText] = useState("")

    const handleChange = (e) =>{
        setText(e.target.value);
    }

    const handleSubmit =()=>{}

    console.log(text)
  return (
    <div>
        <input 
        type="text" 
        placeholder='write something...' 
        onChange={handleChange} />
        <button onClick={handleSubmit}>ADD</button>
    </div>
  )
}

export default AddTodo