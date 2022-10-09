import Card from './Card';
import React from "react";
import { useState } from 'react';

const InputTags=(Props)=>{
    const {count, setCount}= useState(0);


    const HandleClickBtn=()=>{
        setCount((PrevCount)=>{
            return count+1;
        });
    }
    return(
        <>
        

        </>
    )
}

export default InputTags;
