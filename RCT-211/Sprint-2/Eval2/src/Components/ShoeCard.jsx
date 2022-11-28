import React from "react";
import { Link } from "react-router-dom";
//Get the shoe card data from props
const ShoeCard = ({ shoeId, shoeData }) => {
  return (
    <Link to={`/shoes/${shoeData.id}`}>
      <div data-testid={`shoe-card-wrapper-${shoeId}`} style={{border:"2px solid black", width: "300px"}}>
        <div>
          <img data-testid="shoe-card-image" src={`${shoeData.image}`} alt="" style={{width:"200px",height:"200px"}} />
        </div>
        <div>
          <div data-testid="shoe-name">{shoeData.name}</div>
          <div data-testid="shoe-category">{shoeData.category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ShoeCard;
