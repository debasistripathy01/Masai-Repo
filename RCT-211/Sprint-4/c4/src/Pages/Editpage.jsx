import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editTask, getTask } from "../Redux/action";
import { store } from "../Redux/store";

const Editpage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {id} = useParams();
  const taskList = useSelector((store)=> store.tasks);
  const [ titl , setTitle] = useState("");
  const [ state, setState] = useState(false);

  const updateHandler=(e)=>{
    e.preventDefault();
    let payload={
      status: state,
      title: titl
    }

    dispatch(editTask(id, payload)).then((res)=>{
      dispatch(getTask()).then((res)=>{
        navigate("/");
      })
    })
  }
  return (
    <div>
      <form onSubmit={updateHandler}>
        <input data-testid="edit-task-title" onChange={(e)=>setTitle(e.target.value)}/>
        <select data-testid="edit-select-option" onChange={(e)=>setState(e.target.value)}>
          <option value="">select status</option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button data-testid="edit-update" type="submit">Update</button>
      </form>
    </div>
  );
};

export default Editpage;
