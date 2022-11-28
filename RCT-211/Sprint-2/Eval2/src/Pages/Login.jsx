import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
// import * as types from "../Redux/AuthReducer/actionTypes";
// import axios from "axios";
import { LoginData } from "../Redux/AuthReducer/action";

const Login = () => {
  const isLoading = useSelector((state)=> state.AuthReducer.isLoading);
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();
  const Data_coming = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      dispatch(LoginData({ email, password })).then((r)=>{
        navigate(Data_coming, { replace: true });
      })
    }
  };

  return (
    <div data-testid="login">
      <h2>LOGIN</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="login-submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
