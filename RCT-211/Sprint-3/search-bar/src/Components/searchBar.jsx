import React from 'react'

import styled from "styled-components";

export const SearchBar = () => {
  return (
    <div>
        <Wrappper>
            <searchBoxWrapper>
                <Input />
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

