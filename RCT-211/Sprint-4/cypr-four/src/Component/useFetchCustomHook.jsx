// In this one I will create a custom hook in traditional way. 
//I will try to keep track of the loading state using useState, or errors as well,

import axios from "axios"


import React, { useEffect, useState } from 'react'

export const useFetch = ( url ) => {


    // const url = "https://reqres.in/"
    const [ data, setData ] = useState("");
    const [ error, setError] = useState(false);
    const [loading, setLoading ] = useState(false);
    const source = axios.CancelToken.source()
    useEffect(()=>{
        setLoading(<div>...Loading</div>);
        setData("");
        setError("");

        axios.get(url, { cancelToken: source.Token} ).then((res)=>{
            setLoading(false);
            res.data && setData(res.data)
        }).catch((error)=>{
            setLoading(false);
            setError(true);

            console.log("error")
        })

        return ()=>{
            source.cancel();
        }

    }, [url])

    if(setError){
        return <div>...Error happened</div>
    }

  return ({ data, loading, error })
}
