import * as types from "./actionTypes";

import axios from "axios";


//  Counter App todos and Todos Input 

const handleAdd=(payload)=>{
    return{
        type: types.ADD,
        payload
    };
};


const handleReduce =(payload)=>{
    return {
        type: types.REDUCE,
        payload
    }
}


const getTodosRequest =()=>{
    return {
        type: types.GET_TODOS_REQUEST
    }
}


const getTodosSuccess =(payload)=>{
    return {
        type: types.GET_TODOS_SUCCESS,
        payload
    }
}


const getTodosError =()=>{
    return {
        type: types.GET_TODOS_ERROR
    }
}


//  ADD TO DO REquests



const addTodosRequest =()=>{
    return {
        type: types.ADD_TODO_REQUEST
    }
}


const addTodosSuccess =(payload)=>{
    return {
        type: types.ADD_TODO_SUCCESS,
        payload
    }
}


const addTodosError =()=>{
    return {
        type: types.ADD_TODO_ERROR
    }
}

const getTodos=(dispatch)=>{
    dispatch(getTodosRequest())
    axios.get("http://localhost:8080/todos").then((item)=>{
        dispatch(getTodosSuccess(item.data));
    }).catch((error)=>{
        // console.log(error)
        dispatch(getTodosError())
    })
}

export {handleAdd, addTodosError, getTodos, addTodosRequest, addTodosSuccess, handleReduce, getTodosError, getTodosRequest, getTodosSuccess}