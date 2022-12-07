import React, { useEffect } from 'react'
import { useState } from "react";
import { countries } from '../utils/countries';

import styled from 'styled-components';

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
            <suggestionBox limit={5} suggestionLength={suggestion.length}>
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
    max-height: ${({limit})=>`${limit * 39}px`};
    overflow: auto;
    border-top-color: ${({ limit})=>( limit? "transparent":"black")};
    border-bottom-color: ${({ suggestionLength}) => ( suggestionLength ? "black": "black")};
    
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

