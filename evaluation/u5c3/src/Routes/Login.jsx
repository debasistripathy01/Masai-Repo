
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../Context/AuthContext";

function Login({ state, handleLogin, handleLogout }) {
  const [data, setData] = useState({ email: "", password: "" });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/Dashboard");
      });
  }
  return (
    <div className="login-page">
      <form className="form" data-testid="login-form" onSubmit={handleSubmit}>
        <div>
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" onChange={handleChange}
              value={data.email}/>
          </label>
        </div>
        <div>
          <label>
          Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={handleChange}
              value={data.password}
            />
          </label>
        </div>
        <div>
          <button data-testid="form-submit" type="submit" value="SUBMIT">
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
