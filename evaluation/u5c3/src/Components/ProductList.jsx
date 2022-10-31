import React, { useState } from "react";
import ProductItem from "./ProductItem";
import Loader from "./Loader";
import { useEffect } from "react";

// create Product component which contains the list of ProductItem component
const ProductList = ({products=[title,price,image,category]}) => {

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
  }

  useEffect(()=>{
    GetApiData();
  },[page]);

  if(Loader){
    return <Loader />;
  }

  return <div data-testid="products-container">
    {[data].map((el) => {
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
    </div>;
};

// export
export default ProductList;
