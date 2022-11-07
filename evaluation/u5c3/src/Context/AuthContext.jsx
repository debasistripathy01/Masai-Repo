import { createContext, useState } from "react"

export const ContextApi = createContext();


function AuthContextProvider({ children }) {
    // const [isAuth, setIsAuth] = useState(true);
    // const [auth, setAuth] = useState("");
    const [state, setState] = useState({isAuth: true, token: null });

    
    const handleLogin = (token) =>{
        setState({...state, isAuth: true, token: token});
    }

    const handleLogout =()=>{
        setState( { ...state, isAuth: false, token:null });
    }

    return (
        <ContextApi.Provider value={{ state, handleLogin, handleLogout }}>
            {children}
        </ContextApi.Provider>
    )
}

export default AuthContextProvider;
