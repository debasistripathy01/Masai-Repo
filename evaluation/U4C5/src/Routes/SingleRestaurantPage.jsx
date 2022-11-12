import { useEffect } from "react";
import { useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

export const displayResturantsById = ({ id = 1 }) => {
  return fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`
  ).then((res) => {
    res.json();
  });
};

function SingleRestaurantPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const params = useParams();
  useEffect(() => {
    setLoading(true);
    displayResturantsById({
      id: params.id,
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
        // console.log(res);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [params.id]);
  console.log(data);

  return (
    <div data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{data.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{data.type}</div>
      <div data-testid="restaurant-rating">Rating:{data.rating}</div>
      <div data-testid="restaurant-votes">Votes:{data.number_of_votes}</div>
      <div data-testid="restaurant-price">
        Starting Price:{data.price_starts_from}
      </div>
      <div>
        <img data-testid="restaurant-image" src={data.image} width={"100px"} />
      </div>
    </div>
  );
}
export default SingleRestaurantPage;
