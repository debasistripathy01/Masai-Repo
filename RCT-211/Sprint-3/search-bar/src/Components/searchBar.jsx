import React, { useEffect } from 'react'
import { useState } from "react";
import styled from "styled-components";

export const SearchBar = ( { queryHandler, suggestion } ) => {

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
            <suggestionBox>
                {suggestion.map((item, index)=>{
                    return ( <div key={index}>{item}</div>)
                }
                )}
            </suggestionBox>
        </Wrappper>
    </div>
  )
}

const searchBoxWrapper = styled.div`
display: flex;
margin: auto;
textAlign: center;
`
const suggestionBox = styled.div`
    border: 1px solid black;
    max-height: 200px;
    overflow: auto;

    & * {
        padding:10px;
        padding-left: 20px;
        text-align: left;
        
    }
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

