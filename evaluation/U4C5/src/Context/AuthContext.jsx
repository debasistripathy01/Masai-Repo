
import React from "react";
import { useContext, useState } from "react";
export const AuthContext = React.createContext();



function AuthContextProvider({ children }) {

    const [isAuth, setIsAuth ] = useState(false);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState(null);


    const toggle=()=>{
        setIsAuth(!isAuth);
    }
    const LoginUser =()=>{
        setEmail(email);
        setToken(token);
        setIsAuth(true);
    }

    const LogoutUser =()=>{
        setEmail("");
        setToken(null);
        setIsAuth(false);
    }



    return(

            <AuthContext.Provider value={{isAuth, LoginUser, LogoutUser}}>
                {children}
            </AuthContext.Provider>

    )

}

export default AuthContextProvider;
