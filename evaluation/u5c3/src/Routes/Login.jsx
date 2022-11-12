
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import ContextApi from "../Context/AuthContext";
import axios from "axios"
import { type } from "@testing-library/user-event/dist/types/setup/directApi";





function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [state, dispatch] = useContext(ContextApi);


const handleSubmit=(e)=>{
  dispatch({
    type: "LOGIN_REQUEST"
  });
  axios.post("https://reqres.in/api/login",{
    email, password
  }).then((res)=>{
    console.log(res.data.token);
    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {
        token: res.data.token
      }
    });
    console.log(res);
    navigate("/dashboard");
  }).catch(()=>{
    // console.log(error);
    dispatch({
      type:"LOGIN_FAILUER"
    })
  })
}

  return (          
    <div className="login-page">    
      <form data-testid="login-form">     //onSubmit={handleSubmit}
        <div>
          <label>
            Email
            <input data-testid="email-input"
            name="email" 
            type="email" 
            placeholder="email" 
            onChange={(e)=> setEmail(e.target.value)}
            value={email}/>
          </label>
        </div>
        <div>
          <label>
          Password
            <input
              data-testid="password-input"
              name="password"
              type="password"
              placeholder="password"
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
            />
          </label>
        </div>
        <div>
          <button onClick={handleSubmit} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
