import * as types from "./actionTypes";


const initialState = {count: 20, todos: [], isLoading: false, isError: false };


const reducer = (oldstate= initialState, action) =>{
    const { type, payload } = action;

    switch(type){
        case types.ADD: 
            return {...oldstate,count:oldstate.count+payload}
        case types.REDUCE:
            return {...oldstate,count:oldstate.count-payload}
        case types.GET_TODOS_REQUEST:
            return{
                ...oldstate, isLoading: true
            }
        case types.GET_TODOS_SUCCESS:
            return{
                ...oldstate, isLoading: false,todos: payload
            }
        
        case types.GET_TODOS_ERROR:
            return {
                ...oldstate, isLoading: false, isError: true 
            }
        default:
            return oldstate;
    }
}

export { reducer }