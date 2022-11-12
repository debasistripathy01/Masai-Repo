import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";



const displayResturants=({page=1, limit=10})=>{
  return fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}`).then((res)=>{
    res.json()
  })
}


function Dashboard() {

  const [data, setData] = useState({});
  const {isAuth, token, email, LogoutUser} = useContext(AuthContext);
  console.log(token);

  const [limit, setLimit] = useState(10);

  const [page, setPage] = useState(1);

  const changePage=(page)=>{
    // console.log(page);
    setPage(page)
  }


  useEffect(()=>{
    displayResturants({
      limit,
      page
    }).then((res)=>{
      // console.log(res)
      setData(res);
    }).catch((error)=>{
      console.log(error);

    })
  }, [limit, page]);

  console.log(data.data);



  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn"
        onClick={()=>LogoutUser()}
        >Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        {<RestaurantTable data={data.data}/>}
      </div>
      <div data-testid="pagination-container">

        <Pagination 
        handlePageChange={changePage}
        totalPages={data.totalPages}
        currentPage={page}
        />
      </div>
    </div>
  );
}

export default Dashboard;
