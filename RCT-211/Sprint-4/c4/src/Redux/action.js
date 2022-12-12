
import * as types from "./actionTypes";
import axios from "axios";

export const port = process.env.REACT_APP_JSON_SERVER_PORT;




//get tasks

const getTask = ()=>(dispatch)=>{
    dispatch({ type: types.GET_TASKS_REQUEST});

    return axios.get(`http://localhost:${port}/tasks`).then((r) => {
        dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
      })
      .then((r) => {
        dispatch({ type: types.ADD_TASK_FAILURE, payload: r });
      });
}



//add task


const addTask = (payload) => (dispatch)=>{
    dispatch({ type: types.ADD_TASK_REQUEST });
    // let payload={
    //     title: payload,
    //     status: false
    // };
    return axios
      .post(`http://localhost:${port}/tasks`, payload)
      .then((r) => {
        dispatch({ type: types.ADD_TASK_SUCCESS, payload: r.data });
      })
      .then((e) => {
        dispatch({ type: types.ADD_TASK_FAILURE, payload: e });
      });
  };

//update task

const editTask=(id,payload)=> (dispatch)=>{
    dispatch({ type: types.UPDATE_TASK_REQUEST });
  
    return axios
      .patch(`http://localhost:${port}/tasks/${id}`, payload)
      .then((r) => {
        dispatch({ type: types.UPDATE_TASK_SUCCESS, payload: r.data });
      })
      .then((e) => {
        dispatch({ type: types.UPDATE_TASK_FAILURE, payload: e });
      });
  
  }



//delete task

const deleteTask=(id) =>(dispatch)=> {
    dispatch({ type: types.DELETE_TASK_REQUEST });
  
    return axios
      .delete(`http://localhost:${port}/products/${id}`)
      .then((r) => {
        dispatch({ type: types.DELETE_TASK_SUCCESS, payload: r.data });
      })
      .then((e) => {
        dispatch({ type: types.DELETE_TASK_FAILURE, payload: e });
      });
  }
  
  
  export {getTask,addTask,editTask,deleteTask}
