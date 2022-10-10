// Your code goes here
// do a default export
import React from "react";
import { useState } from "react";


export default function UserCard(props){
    //user card details
    const {name, avatar, posts, followers, address} = props;
    const [text, setText] = useState("follow");

    let handleClick =()=>{
        setText("following");
    }
    //user Button details
    


    // function for Click Button
    

    return (
        <div>
            <img src={avatar} alt={name} />
            <h2 id="user_name">{name}</h2>
            <p id="user_address">{address}</p>
            <h3>Posts</h3>
            <p id="user_posts">{posts}</p>
            <h3>Followers</h3>
            <p id="user_followers"> {followers}</p>
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}


// export function Button(){
    
//     return (
        
//     )
// }