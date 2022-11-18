import React from 'react'
import { Books } from '../pages/Books'

export const BookCard = ({ bookData }) => {
  return (
    <div>

        <div>
            {bookData.book_name}
        </div>
        <div>
            {bookData.category}
        </div>
        <div>
            {bookData.release_year}
        </div>
    </div>
  )
}
