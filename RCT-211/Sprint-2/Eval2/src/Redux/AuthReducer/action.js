//Write the ActionCreator functions here


import * as types from "./actionTypes";

import axios from "axios";


const LoginData = (payload) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });
    return axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        return dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      })
      .catch((e) => {
        dispatch({ type: types.LOGIN_FAILURE, payload: e });
      });
  };
export { LoginData }