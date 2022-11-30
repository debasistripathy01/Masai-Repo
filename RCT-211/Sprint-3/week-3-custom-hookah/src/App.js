import { useState, useEffect } from "react"
import './App.css';
import { useTimeOutComp } from "./Component/TimeOutComp";
import { useTimeOut } from "./Hooks/useTimeOut";




function App() {



  const ready = useTimeOut(5000)


  return (
    <div className="App">
      
    { ready && <h1>App Component: {ready}</h1>}
    <h2>State: {ready ? "true" : "false"}</h2>
    </div>
  );
}

export default App;
