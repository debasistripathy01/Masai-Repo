import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router-dom";

const userLoginInfo = ({ email, password }) => {
  return fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
};

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { LoginUser, isAuth } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    userLoginInfo({
      email: email,
      password: password,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        LoginUser(email, res.token);
      });
  };
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <form data-testid="login-form">
        <div>
          <label>
            Email
            <input
              data-testid="email-input"
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input
            data-testid="form-submit"
            type="submit"
            onClick={handleLogin}
            value="SUBMIT"
          />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
