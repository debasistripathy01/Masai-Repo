import { reducer as AppReducer } from "./AppReducer/reducer";
import { reducer as AuthReducer } from "./AuthReducer/reducer";
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


let RootReducer = combineReducers({ AppReducer, AuthReducer });

// NOTE: use this store variable to create a store.
const store = legacy_createStore(RootReducer, applyMiddleware(thunk))

export { store };

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
