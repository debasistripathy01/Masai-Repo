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
    


    // function for Click Buttoncd 
    

    return (
        <div>
            <img src={avatar} alt={name} />
            <h2 id="user_name">{name}</h2>
            <p id="user_address">{address}</p>
            
            <p id="user_posts">{posts}</p>
            
            <p id="user_followers"> {followers}</p>
            <h3>{posts}</h3>
            <h3>{followers}</h3>
            
            <button onClick={handleClick}>{text}</button>
        </div>
    )
}


// export function Button(){
    
//     return (
        
//     )
// }