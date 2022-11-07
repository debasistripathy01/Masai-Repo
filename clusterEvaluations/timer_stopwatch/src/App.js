import React from 'react';
import './App.css';
import Stopwatch from './Components/Stopwatch';
import CountDown from './Components/countDown';



function App() {
  return (
    <div className="App">
      <div className='App-title'>
        <h4>Timers</h4>
      </div>
      <div className='Timer'>
        <Stopwatch  />
        <CountDown />
      </div>
      
    </div>
  );
}

export default App;
