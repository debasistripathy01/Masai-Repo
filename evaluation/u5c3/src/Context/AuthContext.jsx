import { useReducer } from "react";
import { createContext, useState } from "react"

export const ContextApi = createContext();


// Action Creators 

const LOGIN_REQUEST = "LOGIN_REQUEST"
const LOGIN_SUCCESS = "LOGIN_SUCCESS"
const LOGIN_FAILUER = "LOGIN_FAILUER";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const GET_PRODUCT_REQUEST = "GET_PRODUCT_REQUEST";
const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS";
const GET_PRODUCT_FAILUER = "GET_PRODUCT_FAILUER";


const reducer = (state, action)=>{
    switch(action.type){
        case LOGIN_REQUEST:{
            return {
                ...state, 
                isLoading: true
            }
        }
        case LOGIN_SUCCESS:{
            return {
                ...state, 
                isLoading: false,
                isAuth: true,
                token: action.payload.token
            }
        }
        case LOGIN_FAILUER:{
            return {
                ...state, 
                isLoading: false,
                isAuth:false
            }
        }
        case GET_PRODUCT_REQUEST:{
            return {
                ...state, 
                isDataLoading: true,
            }
        }
        case GET_PRODUCT_SUCCESS:{
            return{
                ...state,
                isLoading: false,
                isAuth: false,
                token: null
            }
        }
        case GET_PRODUCT_FAILUER:{
            return{
                ...state,
                isDataLoading: false,
                isError: false,
            }
        }
        default:{
            return state;
        }
    }
}



function AuthContextProvider({ children }) {
    // const [isAuth, setIsAuth] = useState(true);
    // const [auth, setAuth] = useState("");
    // const [state, setState] = useState({isAuth: true, token: null });

    const [state, dispatch] = useReducer(reducer,{
        isAuth: false,
        token: null,
        isLoading: false,
        isError: false,
        data: [],
        isDataLoading: false
    })
    
    // const handleLogin = (token) =>{
    //     setState({...state, isAuth: true, token: token});
    // }

    // const handleLogout =()=>{
    //     setState( { ...state, isAuth: false, token:null });
    // }

    return (
        <ContextApi.Provider value={[ state,dispatch]}>
            {children}
        </ContextApi.Provider>
    )
}

export default AuthContextProvider;
