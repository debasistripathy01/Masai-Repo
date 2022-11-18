import React from 'react'
import { FilterComp } from '../components/FilterComp'
import { BookList } from '../components/BookList'
import styled from 'styled-components'

export const Books = () => {
  return (
    <div>
        <BookPageWrapper>
            <FilterWrapper>
                <FilterComp />
            </FilterWrapper>
            <BookListWrapper>
                <BookList />
            </BookListWrapper>
            <div>Books</div>
        </BookPageWrapper>
        
    </div>
  )
}

const FilterWrapper = styled.div`
    display: flex;
    border: 1px solid yellow;
`

const BookListWrapper = styled.div`
    display: flex;
    border: 1px solid green;
`


const BookPageWrapper = styled.div`
    display: flex;
    border: 1px solid red;
    display: grid;
    grid-template-colomns: repeat(auto-fit, minmax(300px, max-content));
    grid-gap: 10px;
    justify-content: center; 
`

