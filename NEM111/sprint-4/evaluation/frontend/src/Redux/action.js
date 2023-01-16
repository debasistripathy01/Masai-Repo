import * as types from "./actionTypes"
import axios from "axios"
const login = (payload) => (dispatch)=>{
    dispatch({type : types.USER_LOGIN_REQUEST})
    return axios.post("http://localhost:8080/api/login",payload)
    .then((r)=>{
        console.log(r.data)
        dispatch({type : types.USER_LOGIN_SUCCESS,payload : r.data.token})
    })
    .catch((e)=>{
        dispatch({type : types.USER_LOGIN_FALIURE})
    })
}

export {login}