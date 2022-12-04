import React from "react";
import "./UserCard.css";

const UserCard = ({ imageURL, avatarShape,name, description, backgroundColor,title  }) => {

  return (
    <div data-testid="usercard" className={"usercard"}>
        <div>
          <image src={imageURL} alt="image"/>
        </div>

        <h3>{avatarShape}</h3>
        <h3>{name}</h3>
        <h3>{description}</h3>
        <h3>{backgroundColor}</h3>
        <h3>{title}</h3>
    </div>
  );
};

export default UserCard;
