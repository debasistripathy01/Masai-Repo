import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Products from './Products'
import SingleProduct from './SingleProduct'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<div>404 Page Not Found</div>}/>
    </Routes>
  )
}

export default AllRoutes