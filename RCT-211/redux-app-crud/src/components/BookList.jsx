import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { SingleBook } from '../pages/SingleBook'

import { getBooks } from '../Redux/action'
import { BookCard } from './BookCard'



export const BookList = () => {

    const dispatch = useDispatch()

    const books = useSelector(store=> store.books);
    const [ searchParams ] = useSearchParams();
    const location = useLocation();
    console.log(location)

    useEffect(()=>{
        //if I don't have any books in redux then I have to make an API call here
        if(location || books.length===0){
            const sort = searchParams.get("sort");

            const getBookParams = {

                params:{
                    category: searchParams.getAll("category"),
                    _sort: sort && "release_year",
                    _order: sort
                }
            }
            dispatch(getBooks(getBookParams));

        }
    }, [books.length, dispatch, location.search])

  return (
    <div>

        {books.length >0 && books.map(SingleBook=>{
            return <BookCardWrapper key={SingleBook.id}><BookCard bookData={SingleBook}/></BookCardWrapper>
        })}
    </div>
  )
}

const BookCardWrapper = styled.div`
    width: 150px; 
`