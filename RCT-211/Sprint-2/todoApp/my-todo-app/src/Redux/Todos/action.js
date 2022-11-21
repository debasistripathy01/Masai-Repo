import { ADD_TODO } from "./actionTypes";

//action creator 

export const addTodo=payLoad=>{
    return (
        {
            type: ADD_TODO,
            payLoad
        }
    )
}

