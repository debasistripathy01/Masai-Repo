import { createContext, useState } from "react"

export const ContextApi = createContext();


function AuthContextProvider({children}) {
    const [isAuth, setIsAuth] = useState(true);
    const [auth, setAuth] = useState("");
    
    
    const GetCred = (value) =>{
        setAuth(value);
    }

    const SuccessAuthenti =()=>{
        setIsAuth(!isAuth);
    }

    return (
        <ContextApi.Provider value={{isAuth, auth, GetCred, SuccessAuthenti }}>
            {children}
        </ContextApi.Provider>
    )
}

export default AuthContextProvider;
