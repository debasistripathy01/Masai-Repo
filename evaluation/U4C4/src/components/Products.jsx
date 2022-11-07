import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import Product from "./Product";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";
import AddProduct from "./AddProduct";


const getProduct=({ page=1, limit=3})=>{
  return axios({
    method: "get",
    url: "/products",
    baseURL: "https://localhost:8080",
    params: {
      _page: page,
      _limit: limit,
      
    }
  })
}


const AddProduct=(data)=>{
  return axios({
    method: "post",
    url: "https://localhost:8080/products",
    data:{
      title: data.title,
      country: data.country,
      price: data.price,
      image: data.image,
      gender: data.gender
    }
  })
}


const initValue = {
  isLoading: false,
  isError: false,
  data: [],
};


const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [productData, setProductData ] = useState([]);
  const [page, setPage] = useState(1);

  const handleGetProd=(page)=>{
    //1
    getProduct({
      page: page,
      limit: 5,
      
      }).then((res)=>{
        console.log(res);
      });

    

  }


  useEffect(()=>{
    handleGetProd(page)
  },[page])

  console.log(data);
  console.log(state.data.products)

  const handleAddProd=(data)=>{
    AddProduct(data);
    handleGetProd(page);
  }

  const handleDeleteProd =(id)=>{
    handleDelProd(id);
    handleGetProd(page);
  }
  return (
    <Flex>
      {/*  AddProduct */}
      <AddProduct handleAddProd={handleAddProd}/>
      <Grid>{/* List of Products */}
        <Product />
        {state?.data?.products?.map((items)=>{
          return (
            <div key={items.id}>
              <img src={items.image}/>
              <Text>{items.category}</Text>
              <Text>{items.gender}</Text>
              <Text>{items.title}</Text>
              <Text>{items.price}</Text>
              <div>
                <button onClick={()=>handleDeleteProd(items.id)}>DELETE</button>
              </div>
            </div>
          )
        })}
      </Grid>
      <Pagination changePage={handlePage} 
      total={3}
      current={page}
      />
      {/* Pagination */}
    </Flex>
  );
};

export default Products;
