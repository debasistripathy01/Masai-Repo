import * as types from "./actionTypes"



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
    return{
        typs: types.GET_TODOS_REQUEST
    }
}


const getTodosSuccess =()=>{
    return{
        typs: types.GET_TODOS_SUCCESS
    }
}


const getTodosError =()=>{
    return{
        typs: types.GET_TODOS_ERROR
    }
}

export { getTodosError, getTodosRequest, getTodosSuccess}


export { handleAdd, handleReduce }