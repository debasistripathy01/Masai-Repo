import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import ShoeCard from "../Components/ShoeCard";
import { useEffect } from "react";
import SingleShoe from "./SingleShoe";

const Shoes = () => {

  const shoes = useSelector((state)=> state.AppReducer.shoes)
  const [searchParams] = useSearchParams();
  console.log(shoes)
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(()=>{
    if(location || shoes.length == 0){
      let shoesParams = {
        params: {
          category: searchParams.getAll("category"),

        }
      };

    }
  },[location.search]);


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
