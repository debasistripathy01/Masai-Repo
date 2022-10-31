import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { useEffect } from "react";
import axios from "axios";
// import Pagination from "./Pagination";

// create Product component which contains the list of ProductItem component
const ProductList = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0)

  let fetchData =async()=>{
    // setLoading(true);
    try{
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10`);
      let data = await res.json();
      // setLoading(false);
      return data.data;
      console.log(data.data);
    }catch(error){
      console.log(error)
    }
  }

  let GetApiData = async()=>{
    let apiData = await fetchData();
    setData(apiData);

    // console.log(apiData)
  }
  console.log(data)

  useEffect(()=>{
    GetApiData();
  },[page]);

  if(Loader){
    return <Loader />;
  }
  // console.log(data.map((el)=>{return el.id}))
// console.log(data);
  return (
  <div data-testid="products-container">
    <div>
      {data.map((el) => {
        return (
          <ProductItem
          key={el.id}
          title={el.title}
          price={el.price}
          image={el.image}
          category={el.category}
          />
        );
      })}
    </div>
    <div>
      {/* <Pagination 
      
      /> */}
      <button></button>
      <button></button>
      <button></button>
    </div>
  </div>
  );
};

// export
export default ProductList;
