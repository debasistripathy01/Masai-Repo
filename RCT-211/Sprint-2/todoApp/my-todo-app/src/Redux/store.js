import {legacy_createStore, combineReducers, createStore} from "redux";
import {reducer} from "./Todos/reducer";

import { reducer as CountReducer } from "./Counter/reducer";

import { reducer as TodoReducer } from "./Todos/reducer";

export const store = createStore(reducer);

