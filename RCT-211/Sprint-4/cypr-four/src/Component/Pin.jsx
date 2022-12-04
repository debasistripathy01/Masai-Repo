import React, { useRef, useState } from 'react'

export const Pin = ({ length, perInputBox=1}) => {

    const [ inputBoxLength ] = useState(new Array(length)).fill("");

    const inputRef = useRef([])


    const onChangeHandler = (e, index)=>{
        inputRef.current[index+1].focus();
    }
  return (
    <div>
        {inputBoxLength.map((item, index)=>{
            return (
                <input ref={(inputRefElement)=>{
                    console.log(inputRefElement, index);
                    inputRef.current[index] = inputRefElement;
                    console.log(inputRef.current)
                }}
                key={index}
                maxLength={perInputBox}
                onChange={(e)=> onChangeHandler(e, index)}
                />
            )
        })}
    </div>
  )
}
