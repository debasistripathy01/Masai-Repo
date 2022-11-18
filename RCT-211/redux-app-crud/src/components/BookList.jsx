import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { SingleBook } from '../pages/SingleBook'

import { getBooks } from '../Redux/action'
import { BookCard } from './BookCard'



export const BookList = () => {

    const dispatch = useDispatch()

    const books = useSelector(store=> store.books)
    useEffect(()=>{
        //if I don't have any books in redux then I have to make an API call here
        if(books.length===0){
            dispatch(getBooks())
        }
    }, [books.length, dispatch])

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