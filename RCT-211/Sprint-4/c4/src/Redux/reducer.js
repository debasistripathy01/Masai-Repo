

import * as types from "./actionTypes";


// NOTE: DO NOT MODIFY the intial state structure in this file.
const initialState = {
  tasks: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch(type){
    case types.ADD_TASK_REQUEST:
      return {...state, isLoading: false}
    case types.ADD_TASK_FAILURE:
      return {...state, isLoading:false, isError: true}

    case types.ADD_TASK_SUCCESS: 
      return { ...state, isLoading: false, tasks: payload}
    default:
      return state
  }
  //write the logic to handle, get task, update task, add task, and delete task
  // return state;
};

export { reducer };
