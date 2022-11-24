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


//----- 


const AddTodosRequest =()=>{
    return{
        typs: types.ADD_TODOS_REQUEST
    }
}


const AddTodosSuccess =()=>{
    return{
        typs: types.ADD_TODOS_SUCCESS
    }
}


const AddTodosError =()=>{
    return{
        typs: types.ADD_TODOS_ERROR
    }
}

export { AddTodosError, AddTodosRequest, AddTodosSuccess }


export { handleAdd, handleReduce }