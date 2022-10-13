import React from 'react'

const TodoList = ({title, status, id, handleToggle}) => {

    // function styles(){
    //     "backgroundColor"= red,
    //     "marginRight"= "10px"
    // }
  return (
    <div style={{display:"flex", gap:"1rem", margin:"auto", justifyContent:"space-around"}}>
        <b style={{"backgroundColor":"red", "marginRight":"10px"}}>{title}</b>
        {status?"DONE" : "Not Done"}
        <button onClick={()=>{handleToggle(id, !status)}}>Status</button>
    </div>
  )
}

export default TodoList