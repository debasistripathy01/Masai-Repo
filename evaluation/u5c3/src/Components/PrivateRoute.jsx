import { useContext } from "react";
import  AuthContextProvider, { ContextApi }  from "../Context/AuthContext";
import { Navigate } from "react-router-dom"


function PrivateRoute({ children }) {

    const { state } = useContext(ContextApi);
    if(!state.isAuth){
        return <Navigate to="/login" />
    }
    return children;
}

export default PrivateRoute;