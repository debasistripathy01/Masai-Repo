import React from 'react'

const TodoList = ({title, status, id}) => {

    // function styles(){
    //     "backgroundColor"= red,
    //     "marginRight"= "10px"
    // }
  return (
    <div>
        <b style={{"backgroundColor":"red", "marginRight":"10px"}}>{title}</b>
        {status?"DONE" : "Not Done"}
    </div>
  )
}

export default TodoList