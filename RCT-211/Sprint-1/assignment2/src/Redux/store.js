//use this variable to create the redux store.
//the initial data of the redux store should be {counter: 10}
import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

// const store = {};
const store = legacy_createStore(reducer, {counter:10});

export { store };
