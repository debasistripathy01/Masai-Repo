// In this one I will create a custom hook in traditional way. 
//I will try to keep track of the loading state using useState, or errors as well,

import axios from "axios"


import React, { useEffect, useState } from 'react'

export const useFetchCustomHook = () => {


    const url = "https://reqres.in/"
    const [ fetchElem, setFetchElem ] = useState("");
    const [ error, setError] = useState("");
    const [loading, setLoading ] = useState("");

    useEffect(()=>{
        setLoading(<div>...Loading</div>);
        setFetchElem("");

    })

  return (
    <div>

    </div>
  )
}

