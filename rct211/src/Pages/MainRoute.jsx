import React from "react";
import product from "./product";
import HomePage from "./HomePage";
import { Routes, Route } from "react-router-dom";

import SingleProduct from "./Singleproduct";
const MainRoute=()=>{

    return (<Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<product />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}/>
        <Route path="*" element={<div>404 Page Not Found</div>} />
    </Routes>)
}


export default MainRoute;