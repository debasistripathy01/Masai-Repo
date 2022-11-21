//DO NOT change the function names
import { store } from "./store";
import { ADD, REDUCE } from "./actionTypes";
//function to return the add action object

const { dispatch } = store





const handleAddActionObj = () => {
    dispatch({type:ADD, payload:2})
};

//function to return the reduce action object
const handleReduceActionObj = () => {
    dispatch({type:REDUCE, payload:2})
};

export { handleAddActionObj, handleReduceActionObj };
