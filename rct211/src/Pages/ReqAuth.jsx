import React from "react";
import { Children } from "react";
import { Navigate } from "react-router-dom";

const ReqAuth =({ Children })=>{
    if(!isAuth){  // isAuth is not required 
        return <Navigate to="/login"/>
    }
    
    return <div>{Children}</div>
}

export default ReqAuth;