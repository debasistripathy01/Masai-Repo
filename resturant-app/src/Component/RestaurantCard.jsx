import styles from "./RestaurantCard.css"



function RestaurantCard({
  name,
  type,
  image,
  rating,
  number_of_votes,
  price_starts_from,
  id,
}) {
  
  return (
  <div data-testid="restaurant-card" className={styles.container}>
   {/* display the props */}

    {/* <>Image</>
    <div>Name</div>
    <div>Type</div>
    <div>Rating</div>
    <>Price Starts From</> */}
    <h1 data-testid="restaurants-header">Restaurants List</h1>

    <div data-testid="restaurants-container">
      {/* Restaurant Card */}
      <p data-testid="restaurant-card-name" >{name}</p>
      <p data-testid="restaurant-card-type">{type}</p>
      <img src={image} data-testid="restaurant-card-image" alt=""/>
      <p data-testid="restaurant-card-rating">{rating}</p>
      <p data-testid="restaurant-card-votes">{number_of_votes}</p>

      <p data-testid="restaurant-card-price">{price_starts_from}</p>
    </div>

    
  </div>
  );
}

export default RestaurantCard;
