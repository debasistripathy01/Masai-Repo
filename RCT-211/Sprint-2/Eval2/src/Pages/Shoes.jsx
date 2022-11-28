import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { useEffect } from "react";
import SingleShoe from "./SingleShoe";
import { getShoes } from "../Redux/AppReducer/action";

const Shoes = () => {

  const shoes = useSelector((state)=> state.AppReducer.shoes)
  const [searchParams] = useSearchParams();
  console.log(shoes)
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
    let shoesParams;
    if(location.search || shoes.length === 0){
       shoesParams = {
        params: {
          category: searchParams.getAll("category"),

        }
      };
      dispatch(getShoes(shoesParams));
    }
  },[location.search, dispatch, shoes.length, searchParams]);


  return (
    <div style={{display: "flex"}}>
      <Filter />
      <div>
        { shoes.length > 0 && shoes.map(((SingleShoe)=>{
          return (
            <ShoeCard key={SingleShoe.id} shoeId={SingleShoe.id} shoeData={SingleShoe}/>
          )
        }))}
        {/* Map through the shoes list here using ShoeCard Component */}
      </div>
    </div>
  );
};

export default Shoes;
