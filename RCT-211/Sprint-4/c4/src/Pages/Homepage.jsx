import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItems from "../Components/TaskItems";
import { getTask } from "../Redux/action";

const Homepage = () => {

  const dispatch = useDispatch();
  const taskList = useSelector((store)=>store.tasks);

  useEffect(()=>{
    if(taskList.length===0){
      dispatch(getTask());
    }
  }, [dispatch, taskList.length]);
  console.log(taskList.length);
  return (
    <div>
      {taskList.length > 0 && taskList.map((item)=>{return <TaskItems key={item.id} item={item}/>})}
      {/* Map through the task lists here using the TaskItems component */}

    </div>
  );
};

export default Homepage;
