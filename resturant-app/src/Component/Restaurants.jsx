import React from "react";
import { useEffect } from "react";
import { useState } from "react"
import LoadingIndicator from "./LoadingIndicator";
// import ResturantCard from "./RestaurantCard";

function Restaurants(props) {
  const [data, setData] = useState([]);
  const [lodingInd, setLoadingInd] = useState(false);
  const [page, setPage] = useState(1);


  let getData = async()=>{

    try{
      setLoadingInd(true);
      let res = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants")
      let data = await res.json()
      console.log(data)
      setLoadingInd(false);
    }catch(error){
      console.log(error)
    }
    return data.data;
  };

  let TotalAPIData = async()=>{
    let API_data = await getData();
    setData(API_data);
  };

  useEffect(()=>{
    TotalAPIData();

  },[]);

  if(!lodingInd){
    return <LoadingIndicator />
  }







  // return <LoadingIndicator />;
  return (
    <div>
      {data.map((el)=>{
      return (
        <Restaurants 
        id={el.id}
        name={el.name}
        type={el.type}
        rating={el.rating}
        number_of_votes={el.number_of_votes}
        price_starts_from={el.price_starts_from}
        image={el.image}
         />
      )
    })}
      <div>{/* Pagination Component */}</div>
    </div>
  );
}

export default Restaurants;
