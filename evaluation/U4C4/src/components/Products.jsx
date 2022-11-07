import React from "react";
import { Box, Flex, Grid } from "@chakra-ui/react";
import Product from "./Product";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import Pagination from "../components/Pagination";
import { useSearchParams } from "react-router-dom";



const initValue = {
  isLoading: false,
  isError: false,
  data: [],
};


let productReducer=(state, action)=>{

  switch(action.type){
    case "GET_PRODUCT_REQUEST":{
      return {
        ...state, 
        isLoading: true,
        isError: false
      };
    }
    case "GET_PRODUCTS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    }
    case "GET_PRODUCTS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    default:
      return state
  }

}
function getCurrentPage(value){
  console.log(value)
  value=Number(value);

  if (typeof value==="number"&&value<0){
    value=1
  }
  if(!value){
    value=1;
  }
  return value
}

const ProductDetails  = { type: "ProductDetails" };
const ProdSuccess = { type: "ProdSuccess" };
const ProdFailuer = {type:"ProdFailuer"};

const fetchData=(dispatch, params)=>{
  dispatch(ProductDetails);
  return axios.get("http://localhost:8080/products",{
    params: {
      page:params.page,
      limit: page.limit
    }
  } ).then((res)=>{
    dispatch({...ProdSuccess, payload: res.data});
  }).catch((error)=>{
    dispatch(ProdFailuer);
  })
}

const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;
  const [state, dispatch] = useReducer(productReducer, initValue)
  const [searchParam, setSearchParams] = useSearchParams();
  let initialPage=getCurrentPage(searchParam.get(1));
  const [data, setData] = useState([]);
  const [page,setPage]=useState(initialPage);
  const [limit, setLimit] = useState(3);


  const handlePage=(page)=>{
    console.log(page);
    setPage(page);
  };



  useEffect(()=>{
    fetchData(dispatch, {
      limit, page
    }).catch((error)=>{
      console.log(error);
    })
  },[limit, page]);

  useEffect(()=>{
    setSearchParams({params})
  })

  console.log(data);
  console.log(state.data.products)


  return (
    <Flex>
      {/*  AddProduct */}
      <Grid>{/* List of Products */}
        <Product />
        {state?.data?.products?.map((items)=>{
          return (
            <Box key={items.id}>
              <Img src={items.image}/>
              <Text>{items.category}</Text>
              <Text>{items.gender}</Text>
              <Text>{items.title}</Text>
              <Text>{items.price}</Text>
            </Box>
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
