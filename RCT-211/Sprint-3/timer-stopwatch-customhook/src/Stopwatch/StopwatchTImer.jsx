


import React, {useState, useRef} from 'react'

export const StopwatchTImer = () => {

    const [timer, setTimer] = useState(3595);
    const [isActive, setIsActive] = useState(false);
    const [ isPaused, setIsPaused] = useState(false);
    const increament = useRef(null);

    const handleStart=()=>{

    }
    const handlePause = ()=>{

    }
    const handleResume = ()=>{

    }
    const handleReset = ()=>{

    }




  return (
    <div>
    <h3>React Stopwatch {element}</h3>
      <div className='stopwatch-card'>
        <p>{formatTime()}</p>
        <div className='buttons'>
          {
            !isActive && !isPaused ?
              <button onClick={handleStart}>Start</button>
              : (
                isPaused ? <button onClick={handlePause}>Pause</button> :
                  <button onClick={handleResume}>Resume</button>
              )
          }
          <button onClick={handleReset} disabled={!isActive}>Reset</button>
        </div>
      </div>
    </div>
  )
}
