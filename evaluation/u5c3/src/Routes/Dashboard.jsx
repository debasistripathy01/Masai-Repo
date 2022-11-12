import Loader from "../Components/Loader";
import { Navigate, useSearchParams } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { ContextApi } from "../Context/AuthContext";
import axios from "axios";
import ProductList from "../Components/ProductList"
import Pagination from "../Components/Pagination";
// import Pagination from "../Components/Pagination";
// import { Button,
//   Container,
//   Heading,
//   ListItem,
//   Stack,
  // UnorderedList } from "@chakra-ui/react"

// const Button=()=>{

// }

function Dashboard() {

  const [state, dispatch ] = useContext(ContextApi);
  const [searchParams, setSearchParams] = useSearchParams()
  const [page, setPage] = useState(Number(searchParams.get("page")))  || 1;

  const [data, setData] = useState([]);



  useEffect(()=>{
    dispatch({
      type: "GET_PRODUCTS_REQUEST"
    });
    axios(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?limit=10&page=${page}`).then((res)=>{
      setData(res.data.data);
      dispatch({
        type: "GET_PRODUCT_SUCCESS",
        payload: {
          data: res.data.data
        }
      })
    }).catch((error)=>{
      dispatch({
        type: "GET_PRODUCT_FAILUER"
      })
    }, [page]);

  })

  useEffect(()=>{
    searchParams({
      page
    })
  }, [page, searchParams])


  if(!isAuth){
    return <Navigate to="/" />
  }



  return (
    <Stack>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={()=>dispatch({type:"LOGOUT_SUCCESS"})}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{state.token}</b>
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
        <Container>
        <UnorderedList>
          {data.map((item) => (
            <ListItem key={item.id}> {item.title}</ListItem>
          ))}
        </UnorderedList>
      </Container>
        {/* <Pagination /> */}
        <Pagination 
        changePage={(page) => setPage(page)}
        total={3}
        current={page}
        />
        {/* Product Listing, remember to show loading indicator when API is loading */}
      </div>
   
    </Stack>
  );
}

export default Dashboard;
