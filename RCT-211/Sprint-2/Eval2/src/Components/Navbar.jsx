import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const  isAuth = useSelector((state)=>state.AuthReducer.isAuth);
  return (
    <div data-testid="navbar" style={{padding: "0.5rem 1 rem", display:"flex"}}>
      <div data-testid="navbar-home-link">
        <img
          src="/Adidas_Logo.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {
          !isAuth && (
            <div>
              <button data-testid="navbar-login-button">{<Link to="/login" style={{color: "white", textDecoration: "none"}}>LOGIN</Link>}</button>
            </div>
          )
        }

        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        
      </div>
    </div>
  );
};

export default Navbar;
