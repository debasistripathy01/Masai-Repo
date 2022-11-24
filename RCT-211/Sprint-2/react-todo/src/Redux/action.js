import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionTypes";
import axios from "axios";

const getTodosSuccess = (payload)=>{
    return {
        type: types.GET_TODOS_REQUEST,
        payload
    }
}

const getTodosRequest =()=>{
    return {
        type: types.GET_TODOS_REQUEST,

    }
}


const getTodosError =()=>{
    return {
        type: types.GET_TODOS_ERROR
    }
}



const addTodosSuccess = (payload)=>{
    return {
        type: types.ADD_TODOS_REQUEST,
        payload
    }
}

const addTodosRequest =()=>{
    return {
        type: types.ADD_TODOS_REQUEST,

    }
}


const addTodosError =()=>{
    return {
        type: types.ADD_TODOS_ERROR
    }
}

const getTodos=(dispatch)=>{
    dispatch(getTodosRequest());
    return axios.get("http://localhost:8080/todos").then((item)=>{
        dispatch(getTodosSuccess(item.data));
    }).catch((error)=>{
        dispatch(getTodosError());
    })
}


export { getTodosError, getTodos, getTodosRequest, getTodosSuccess, addTodosError, addTodosRequest, addTodosSuccess };