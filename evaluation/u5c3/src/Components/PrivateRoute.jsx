import { useContext } from "react";
import  AuthContextProvider  from "../Context/AuthContext";
import { Navigate } from "react-router-dom"


function PrivateRoute({ children }) {

    const { state } = useContext(AuthContextProvider);
    if(!state.isAuth){
        return <Navigate />
    }
    return children;
}

export default PrivateRoute;
