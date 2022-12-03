


import React, {useState, useRef} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const element = <FontAwesomeIcon icon={faClock} />

export const StopwatchTImer = () => {

    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [ isPaused, setIsPaused] = useState(false);
    const increament = useRef(null);

    const handleStart=()=>{
      setIsActive(true);
      setIsPaused(true);
      increament.current = setInterval(()=>{
        setTimer((timer)=>timer+1);
      }, 1000);

    }
    const handlePause = ()=>{
      clearInterval(increament.current);
      setIsPaused(false);
    }
    const handleResume = ()=>{
      setIsPaused(true);
      increament.current = setInterval(()=>{
        setTimer((timer)=>timer+1);

      }, 1000);
    }
    const handleReset = ()=>{
      clearInterval(increament.current);
      setIsActive(false);
      setIsPaused(false);
      setTimer(0);
    }

    const formatTime=()=>{
      // const getMilliSec = `0${(timer % 3600)}`.slice(-2);
      const getSeconds = `0${(timer % 60)}`.slice(-2);
      const minutes = `${Math.floor(timer / 60)}`
      const getMinutes = `0${minutes % 60}`.slice(-2)
      const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

      return `${getHours} : ${getMinutes} : ${getSeconds}`
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
