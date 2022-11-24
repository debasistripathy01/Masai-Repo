import * as types from "./actionTypes"



const initalState ={
    todos: [],
    isLoading: false,
    isError: false
}

const reducer =(oldstate=initalState, actionObj)=>{
    const { type, payload } = actionObj;
    switch(type){
        case types.GET_TODOS_REQUEST:
            return {
                ...oldstate, isLoading: true
            }
        case types.GET_TODOS_SUCCESS:
            return {
                ...oldstate, isLoading: false, isError: false, todos: payload
            }
        case types.GET_TODOS_ERROR:
            return {
                ...oldstate, isError: true
            }
        default:

            return oldstate
    }
}

export { reducer }