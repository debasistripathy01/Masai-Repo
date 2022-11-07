import Loader from "../Components/Loader";
import { Navigate, useSearchParams } from "react-router-dom";
import { useState, useContext } from "react";
import { ContextApi } from "../Context/AuthContext";

import ProductList from "../Components/ProductList"
// import Pagination from "../Components/Pagination";

function Dashboard() {

  const {isAuth, SuccessAuthenti } = useContext(ContextApi);

  if(!isAuth){
    return <Navigate to="/" />
  }
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={SuccessAuthenti}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token"></b>
        </p>
      </div>
      <br />
      <div data-testid ="sort-container">
      <button data-testid="low-to-high">Sort low to high</button>
      <button data-testid="high-to-low">Sort high to low</button>
      </div>
      <br />
      <br />
      {/* add Pagination component  */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Loader />
        <ProductList />
        {/* <Pagination /> */}
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </div>
  );
}

export default Dashboard;
