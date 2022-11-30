
import { useState, useEffect } from 'react'






export const useTimeOut = () => {

    const [ ready , setReady ] = useState(false)

    useEffect(()=>{
        let id = setTimeout(()=>{
            setReady((prev) => !prev );


        }, 5000)

        return ()=>{
            clearTimeout(id);
        }
    }, [])

  return ready
}
