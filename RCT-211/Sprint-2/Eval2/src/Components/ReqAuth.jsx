import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
//Create the HOC for protected Routes
const ReqAuth = ({ children }) => {
    const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

    const location = useLocation();
    if(!isAuth){
        return <Navigate to="/login" replace state={{ from: location }} />
    }

    return children;
};

export default ReqAuth;
