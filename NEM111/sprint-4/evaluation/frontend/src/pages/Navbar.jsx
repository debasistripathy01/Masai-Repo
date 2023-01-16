import React from 'react'
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import { Link } from 'react-router-dom';
import style from "./Navbar.css";

export const Navbar = () => {
  return (
    <>
    <div className='category'>

      <Link to="/register">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/posts">Posts</Link>
    </div>
    </>
  )
}
