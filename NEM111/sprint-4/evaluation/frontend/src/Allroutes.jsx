import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'
export const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<h1>Welcome to the home page</h1>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/posts'></Route>
    </Routes>
  )
}
