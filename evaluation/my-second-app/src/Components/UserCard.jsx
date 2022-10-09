// Your code goes here
// do a default export
import React from "react";
import { useState } from "react";

export default function UserCard(Props) {
  //user card details
  const { name, avatar, posts, followers, address } = Props;
  const [text, setText] = useState(false);

  let handleClick = () => {
    setText(!text);
  };

  const styles = {
    borderRadius: "50%",
  };
  //user Button details

  // function for Click Buttoncd

  return (
    <div>
      <img style={styles} src={avatar} alt={name} />
      <h2 data-testid="user_name">{name}</h2>
      <p data-testid="user_address">{address}</p>
      <h3>Posts</h3>
      <p data-testid="user_posts">{posts}</p>

      <h3>Followers</h3>

      <p data-testid="user_followers">{followers}</p>
      
      
      <button onClick={handleClick}>{text ? "following" : "follow"} </button>
    </div>
  );
}

// export function Button(){

//     return (

//     )
// }
