import SingleRestaurantPage from "./SingleRestaurantPage";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Components/PrivateRoute";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route
          path="/resturants/:id"
          element={
            <PrivateRoute>
              <SingleRestaurantPage />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default AllRoutes;
