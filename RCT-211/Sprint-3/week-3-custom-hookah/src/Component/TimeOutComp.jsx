import React from 'react'

import { useTimeOut } from '../Hooks/useTimeOut';



export const useTimeOutComp = () => {
    const ready = useTimeOut(5000);
    return (
        <div>
            { ready && <h1>APp Component</h1>}
        </div>
        
    )
    
}
