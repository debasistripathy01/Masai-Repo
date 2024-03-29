import * as types from "./actionTypes";

import axios from "axios"

const getBooksRequest =()=>{
    return {
        type: types.GET_BOOKS_REQUEST,

    }
}
const getBooksSuccess =(payload)=>{
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksError =()=>{
    return {
        type: types.GET_BOOKS_ERROR,
        
    }

}

const getBooks=(params)=>(dispatch)=>{
    dispatch(getBooksRequest());
    return axios.get("http://localhost:8080/books", params).then((r)=>{
        dispatch(getBooksSuccess(r.data))
    }).catch((e)=>{
        dispatch(getBooksError());
    })
}

// function getBooks(){
//     return function(dispatch){
//         dispatch(getBooksRequest())
//         return axios.get("https://localhost:8080/books").then((r)=>{
//             dispatch(getBooksSuccess(r.data));
//         }).catch((error)=>{
//             dispatch(getBooksError())
//         })
//     }
// }

export { getBooksError, getBooksRequest, getBooksSuccess, getBooks}