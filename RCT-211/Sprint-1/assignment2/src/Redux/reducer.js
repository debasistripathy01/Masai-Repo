//Complete the reducer function logic inside the curly braces {}
import { ADD, REDUCE } from "./actionTypes";
const reducer = (oldstate, action) => {

    switch(action.type){

        case ADD:
            return {...oldstate, counter: oldstate.counter+action.payload}
        case REDUCE:
            return {...oldstate, counter: oldstate.counter-action.payload}
        default:
            return oldstate;
    }
};

export { reducer };
