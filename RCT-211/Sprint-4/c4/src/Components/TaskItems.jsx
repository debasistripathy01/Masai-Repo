import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask, editTask, getTask } from "../Redux/action";

const TaskItems = ({ id, item }) => {

  const dispatch = useDispatch();

const navigate = useNavigate()


  const handleRemovetask=(id)=>{
    dispatch(deleteTask(id)).then(()=>dispatch(getTask())).then(()=>{navigate("/")})
  }


  const handleEdittask=(id)=>{
    // const newTask = item.
    if(id){
      dispatch(editTask(id ))
    }
  }
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        padding: "0.2rem",
        paddingBottom: "0.5rem",
        display: "flex",
        flexDirection: "column",
        maxWidth: "380px",
        margin: "auto",
        marginBottom: "1rem",
        justifyContent: "center",
      }}
      data-testid={`task-item-${id}`}
    >
      <div
        data-testid="task-title"
        style={{ fontSize: "24px", fontWeight: "600" }}
      ></div>
      <div data-testid="task-status" style={{ fontSize: "18px" }}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button data-testid="edit-task" onClick={()=>handleEdittask(id)}>Edit</button>
        <button data-testid="delete-task" onClick={()=>handleRemovetask(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItems;
