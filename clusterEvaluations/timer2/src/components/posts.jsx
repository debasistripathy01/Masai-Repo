import React from "react";
import postItem from "./postItem";
import { useState } from "react";

export default function Posts(){

    const [post, setPost] = React.useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1)

    const handleClick=async(page)=>{
        try{
            setLoading(true);
            let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&page=${page}`)
            let data = await res.json()
            setPost(data);
            setLoading(false)
        }catch(error){
            console.log(error)
        }
    }

    const  handleSetPage =(num)=>{
        setPage(num + page);
    }

    if(loading){
        return <h1>...Loading</h1>
    }
    console.log(post.map((el)=>{return el.id}));
    return (
        <div>
            <button onClick={handleClick}>GET Posts</button>
            <div>
                {post.map((el)=>(<postItem id={el.id} title={el.title} body={el.body}/>))}
            </div>
            <div>
                <button onClick={()=>handleSetPage(-1)}>Prev</button>
                <button disabled>{page}</button>
                <button onClick={()=>handleSetPage(+1)}>Next</button>
            </div>
        </div>
    )
}