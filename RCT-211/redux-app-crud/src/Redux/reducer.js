import * as types from "./actionTypes"


const initalState ={
    books:[],
    isLoading: false,
    isError: false
}


const reducer = (oldstate = initalState, actionObj)=>{
    const {type, payload } = actionObj;
    switch(type){
        case types.GET_BOOKS_REQUEST:
            return {...oldstate, isLoading: true }
        case types.GET_BOOKS_SUCCESS:
            return {...oldstate, isLoading:false, books: payload }
        case types.GET_BOOKS_ERROR:
            return { ...oldstate, isLoading: false, isError: true }
        default:
            return oldstate
    }
}

export { reducer }