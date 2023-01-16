import React from 'react'
import { useNavigate } from "react-router-dom"
import {useState} from "react"
import "./login.css"

import {useDispatch} from ""
import { Link } from "react-router-dom"

import { login } from "../Redux/action.js"
export const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(email&&password){
            dispatch(login({email,password})).then((r)=>{
                navigate("/")
            })
        }
    }
  return (
    <>

     <div className="main">
       <div className="mainDiv">
         <div>
           <label>* Email address</label>
           <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div>
           <label>* Password</label>
           <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
         </div>
         <div>
           <button className="buttoncontinue" onClick={handleSubmit}>LOGIN TO YOUR ACCOUNT</button>
         </div>
         
        </div>
     </div>
     
 </>
  )
}
