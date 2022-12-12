import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const port = process.env.REACT_APP_JSON_SERVER_PORT;
export const Navbar = () => {

  // const task = useSelector(state=>state.tasks)
  const [task, setTask] = useState([]);

  let navigate = useNavigate();

  let pendingTask = 0;
  let CompletedTask=0;
  
const handleClick =()=>{
  navigate("/add");
}
  
  useEffect(()=>{
    axios.get(`http://localhost:${port}/tasks`).then((res)=>{
      setTask(res.data);
    })
  }, [task.length])


  return (
    <div
      style={{
        border: "1px solid black",
        height: "fit-content",
        display: "flex",
        padding: "0.5rem",
      }}
    >
      <div style={{ flex: "1" }}>
        <div>Pending Tasks</div>
        <div data-testid="pending-task-count">{pendingTask}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Completed Tasks</div>
        <div data-testid="completed-task-count">{CompletedTask}</div>
      </div>
      <div style={{ flex: "1" }}>
        <div>Total Tasks</div>
        <div data-testid="total-tasks-count">{task.length}</div>
      </div>
      <div style={{ display: "flex" }}>
        <button data-testid="add-task" onClick={()=>handleClick()}>Add Task</button>
      </div>
    </div>
  );
};
