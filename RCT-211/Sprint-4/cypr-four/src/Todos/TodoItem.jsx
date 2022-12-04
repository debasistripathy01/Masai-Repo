import React from 'react'


const TodoItem = ({ id, title,status}) => {
  return (
    <div style={{display: "flex", justifyContent: "center" }}>
        
        <div> {id}</div>
        <div>{title}</div>
        <div>{status ? "True" : "False"}</div>
        
    </div>
  )
}

export default React.memo(TodoItem)