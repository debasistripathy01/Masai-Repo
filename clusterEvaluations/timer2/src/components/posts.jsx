import React from "react";

import { useState } from "react";

export default function Posts(){

    const [post, setPost] = React.useState([]);



    const handleClick=async()=>{
        try{
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            let data = await res.json()
            setPost(data);

        }catch(error){
            console.log(error)
        }

    }
    console.log(post.map((el)=>{return el.id}));
    return (
        <div>
            <button onClick={handleClick}>GET Posts</button>
            <div>
                {post.map((el)=><p key={el.id}>{el.title}</p>)}
            </div>
        </div>
    )

}