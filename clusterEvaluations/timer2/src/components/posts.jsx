import React from "react";

import { useState } from "react";

export default function Posts(){

    const [post, setPost] = React.useState([]);
    const [loading, setLoading] = useState(false);


    const handleClick=async()=>{
        try{
            setLoading(true);
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
            let data = await res.json()
            setPost(data);
            setLoading(false)
        }catch(error){
            console.log(error)
        }

    }

    if(loading){
        return <h1>...Loading</h1>
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