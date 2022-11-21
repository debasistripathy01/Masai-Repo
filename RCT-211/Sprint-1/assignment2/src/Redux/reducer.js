//Complete the reducer function logic inside the curly braces {}
const reducer = (oldstate, actionObj) => {

    switch(actionObj.type){

        case "ADD":
            return {...oldstate, counter: oldstate.counter+actionObj.payload}
        case "REDUCE":
            return {...oldstate, counter: oldstate.counter-actionObj.payload}
        default:
            return oldstate;
    }
};

export { reducer };
