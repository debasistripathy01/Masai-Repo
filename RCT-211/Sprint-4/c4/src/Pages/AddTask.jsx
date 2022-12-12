import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTask, getTask } from "../Redux/action";


const initialState = {
  task: ""
}


const reducerFunction =(state, action)=>{
  switch(action.type){
    case "task":
      return { ...state, task: action.payload}
    default:
      return state;
  }
}


const AddTask = () => {


  const [task ,setTask ] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(addTask(task))
    navigate()
  }
  return (
    <div>
      <form onSubmit={handleClick}>
        <input data-testid="add-task-input-box" placeholder="add task here" onChange={(e)=>{setTask(e.target.value)}} />
        <button data-testid="add-task-button" type="submit">Add task{" "}</button>
      </form>
    </div>
  );
};

export default AddTask;
