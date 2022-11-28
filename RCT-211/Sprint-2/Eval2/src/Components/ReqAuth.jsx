import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = ({ children }) => {
    const auth = useSelector((state)=> state.AuthReducer.isAuth)

    const location = useLocation();
    if(!auth){
        return <Navigate to="/login" replace state={{ data: location.pathname}} />
    }

    return children;
};

export default ReqAuth;
