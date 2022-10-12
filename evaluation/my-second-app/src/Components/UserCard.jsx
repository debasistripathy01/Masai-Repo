// Your code goes here
// do a default export
import React from "react";
import { useState } from "react";


export default function UserCard(Props){
    //user card details
    const {name, avatar, posts, followers, address} = Props;
    const [text, setText] = useState("follow");

    let handleClick =()=>{
        setText("following");
    }

    const styles ={
        borderRadius: "50%"
    }
    //user Button details
    


    // function for Click Buttoncd 
    

    return (
        <div>
            <img style={styles} src={avatar} alt={name} />
            <h2 id="user_name">{name}</h2>
            <p id="user_address">{address}</p>
            
            <p id="user_posts">{posts}</p>
            
            <p id="user_followers"> {followers}</p>
            <h3>{posts}</h3>
            <h3>{followers}</h3>

            <button onClick={handleClick}>following</button>
        </div>
    )
}


// export function Button(){
    
//     return (
        
//     )
// }