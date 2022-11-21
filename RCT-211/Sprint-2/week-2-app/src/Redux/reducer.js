import * as types from "./actionTypes";


const initialState = {
    todos:[],
    isLoading: false,
    isError: false
}


const reducer =(oldstate= initialState, actionObj)=>{
    const { type, payload } = actionObj;
    switch(type){
        case types.GET_TODOS_REQUEST:
            return {
                ...oldstate, isLoading: true
            }
        case types.GET_TODOS_ERROR:
            return {
                ...oldstate,
                isLoading: false,
                isError: true
            }

        case types.GET_TODOS_SUCCESS:
            return {
                ...oldstate,
                isLoading: false,
                todos:payload
            }
            // ADD TO DO CAses

        case types.ADD_TODO_REQUEST:
            return {
                ...oldstate, isLoading: true
            }
        case types.ADD_TODO_ERROR:
            return {
                ...oldstate,
                isLoading: false,
            }

        case types.ADD_TODO_SUCCESS:
            
            const newTodos = [...oldstate.todos, payload]
            return {
                ...oldstate,
                isLoading: false,
                todos:newTodos
            }
        default:
             return oldstate;
    }
}


// PUT - { id: 4, title: "New TOdo", status: false} - replace
//const newTodos = oldstate.todos.map(item=>item.id === payload.id ? payload: item)
// 


// DELETE Request - { id : 5}
// const newTodos = oldstate.todos.filter(item=> item.id !== payload.id)
// 

//PATCH - { id: 3, title: "NEw Title"}
// const newTodos = oldstate.todos.map(item=> item.id===payload.id ? { ...item, payload}:item) 

export { reducer }