import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./TodoInput";
import React, { useEffect } from "react";
import { getTodos } from "../Redux/action"

const Todos = () => {
    const dispatch = useDispatch();

    const todos = useSelector(store => store.todos);

    const isLoading= useSelector(store=> store.isLoading);

    
    useEffect(()=>{
      getTodos()
    }, [])

  return (
    <div>
    {/* add TodoInput component here */}
    <TodoInput />
    Todos
    {/* map through the todos array and display the tasks */}
    </div>
  );
};

export default Todos;
