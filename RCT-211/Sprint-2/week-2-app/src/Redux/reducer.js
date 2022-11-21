import * as types from "./actionTypes";





const reducer = (oldstate, action) =>{
    const { type, payload } = action;

    switch(type){
        case types.ADD: 
            return {...oldstate,count:oldstate.count+payload}
        case types.REDUCE:
            return {...oldstate,count:oldstate.count-payload}
        default:
            return oldstate;
    }
}

export { reducer }