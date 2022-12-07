import React, { useEffect } from 'react'
import { useState } from "react";
import styled from "styled-components";

export const SearchBar = ( {queryHandler} ) => {

    const [ input, setInput] = useState("");

    const handleInputChange =(e)=>{
        setInput(e.target.value);
    }


    useEffect(()=>{
        queryHandler(input);
    },[input, queryHandler]);
  return (
    <div>
        <Wrappper>
            <searchBoxWrapper>
                <Input value={input} onChange={handleInputChange}/>
            </searchBoxWrapper>
        </Wrappper>
    </div>
  )
}

const searchBoxWrapper = styled.div`
display: flex;
margin: auto;
textAlign: center;
`

const Input = styled.input`
    width: 90%;
    height: 20px;
    border: 1px soli red;

`

const Wrappper = styled.div`
border: 1px solid red;
max-width: 350px;
`

