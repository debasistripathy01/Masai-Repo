import React from 'react'
import { useState } from 'react';
export const Signup = () => {

    const [email, setEmail] =useState("");
    const [ password, setPassword] = useState("");
    const [name, setName] = useState("");
    

    const handleSubmit=(e)=>{
        e.preventDefault();

    }

  return (


    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name'/>
            <input type="password" placeholder='Input EMail'/>
            <select >
                <option>--Select Gender--</option>
                <option>Male</option>
                <option>Female</option>
            </select>
            <input placeholder='Input password' type="password"/>
        </form>

    </>
  )
}
